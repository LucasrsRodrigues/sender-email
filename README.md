# 📧 Email Service - Microsserviço de E-mails

Microsserviço robusto para envio de e-mails com filas BullMQ, templates dinâmicos e fallback entre provedores.

## 🚀 Características

- **NestJS + TypeScript** - Framework moderno e tipado
- **Prisma + PostgreSQL** - ORM type-safe com banco relacional
- **BullMQ + Redis** - Filas assíncronas modernas com Redis Streams
- **Gmail + SendGrid** - Fallback automático entre provedores
- **Templates Handlebars** - Templates dinâmicos com helpers
- **Configuração Dinâmica** - Settings no banco de dados
- **Rate Limiting** - Proteção contra spam
- **Logs completos** - Rastreamento de todos os envios

## 📋 Pré-requisitos

- Node.js 18+
- PostgreSQL 12+
- Redis 6+
- Conta Gmail com senha de app
- SendGrid API Key (opcional)

## 🛠️ Instalação

### 1. Clone e instale dependências

```bash
git clone <repository>
cd email-service
npm install
```

### 2. Configure variáveis de ambiente

```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

### 3. Configure o banco de dados

```bash
# Gerar Prisma Client
npm run prisma:generate

# Executar migrations
npm run prisma:migrate

# Migrar configurações do .env para o banco
npm run migrate:configs
```

### 4. Inicie os serviços

```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run build
npm run start:prod
```

## 🐳 Docker

```bash
# Subir todos os serviços
docker-compose up -d

# Ver logs
docker-compose logs -f email-service
```

## 📖 Uso da API

### Enviar E-mail

```bash
POST /api/email/send
Content-Type: application/json

{
  "to": "user@example.com",
  "subject": "Bem-vindo!",
  "template": "welcome",
  "variables": {
    "name": "João Silva",
    "code": "123456"
  },
  "priority": "high"
}
```

**Resposta:**

```json
{
  "status": "enqueued",
  "message": "E-mail adicionado à fila de processamento",
  "data": {
    "logId": "cm2x...",
    "jobId": "123",
    "priority": "high",
    "estimatedDelay": "5-15 segundos"
  }
}
```

### Verificar Status

```bash
GET /api/email/status/{logId}
```

**Resposta:**

```json
{
  "status": "success",
  "data": {
    "id": "cm2x...",
    "to": "user@example.com",
    "subject": "Bem-vindo!",
    "status": "SENT",
    "provider": "gmail",
    "sentAt": "2025-01-15T10:30:00Z",
    "attempts": 1,
    "job": {
      "id": "123",
      "progress": 100,
      "finishedOn": 1642248600000
    }
  }
}
```

### Health Check

```bash
GET /api/email/health
```

**Resposta:**

```json
{
  "status": "healthy",
  "timestamp": "2025-01-15T10:30:00Z",
  "queue": {
    "waiting": 0,
    "active": 2,
    "completed": 145,
    "failed": 3,
    "total": 150
  }
}
```

## 📧 Templates Disponíveis

### welcome.html
Template de boas-vindas com código de verificação.

**Variáveis:**
- `name` - Nome do usuário
- `code` - Código de verificação
- `activationUrl` - URL de ativação (opcional)

### reset-password.html
Template para redefinição de senha.

**Variáveis:**
- `name` - Nome do usuário
- `resetUrl` - URL de redefinição
- `expiryTime` - Tempo de expiração em minutos

### Helpers Disponíveis

```handlebars
{{uppercase name}}          <!-- JOÃO SILVA -->
{{lowercase email}}          <!-- joao@email.com -->
{{formatDate date 'short'}}  <!-- 15/01/2025 -->
{{currency 99.90}}          <!-- R$ 99,90 -->
{{#ifEquals status 'active'}}Ativo{{/ifEquals}}
```

## ⚙️ Configuração

### Variáveis de Ambiente

```env
# Database
DATABASE_URL="postgresql://user:pass@localhost:5432/email_service"

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# Gmail
GMAIL_USER=seu-email@gmail.com
GMAIL_PASS=sua-senha-de-app

# SendGrid
SENDGRID_API_KEY=SG.xxxxx

# Segurança
ALLOWED_IPS=127.0.0.1,::1,192.168.1.100
RATE_LIMIT_TTL=60
RATE_LIMIT_REQUESTS=10
```

### Prioridades de E-mail

- **CRITICAL** - Enviado imediatamente
- **HIGH** - Delay de 5 segundos
- **NORMAL** - Delay de 15 segundos (padrão)
- **LOW** - Delay de 30 segundos

## 📊 Monitoramento e Administração

### APIs de Configuração
```bash
# Configurações por categoria
GET /api/admin/config/category/email
GET /api/admin/config/category/security

# Atualizar configuração
PUT /api/admin/config/RATE_LIMIT_REQUESTS
{
  "value": 20,
  "changedBy": "admin",
  "reason": "Aumentar limite"
}

# Gerenciar IPs permitidos
GET /api/admin/config/allowed-ips
POST /api/admin/config/allowed-ips
DELETE /api/admin/config/allowed-ips/192.168.1.100
```

### Gerenciamento de Filas BullMQ
```bash
# Status da fila
GET /api/admin/queue/status

# Estatísticas detalhadas
GET /api/admin/queue/stats

# Pausar/retomar fila
POST /api/admin/queue/pause
POST /api/admin/queue/resume

# Limpar jobs antigos
DELETE /api/admin/queue/clean?grace=3600000&status=completed

# Reprocessar jobs falhados
POST /api/admin/queue/retry-failed?limit=10
```

### Templates no Banco de Dados
```bash
# Listar templates
GET /api/admin/templates

# Criar template
POST /api/admin/templates
{
  "name": "invoice",
  "subject": "Fatura #{{number}}",
  "content": "<h1>Sua fatura</h1>...",
  "description": "Template de fatura"
}

# Preview de template
POST /api/admin/templates/invoice/preview
{
  "number": "12345",
  "amount": 99.90,
  "customer": { "name": "João" }
}
```

### Dashboards
- **API Health**: `http://localhost:3000/api/metrics/health`
- **Bull Board**: `http://localhost:3000/api/admin/queues`
- **Prisma Studio**: `npm run prisma:studio`

## 🎯 **Funcionalidades Avançadas BullMQ**

### ✅ **Email Flows (Sequências Automatizadas)**
```bash
# Onboarding completo para novos usuários
POST /api/email/flows/onboarding
{
  "userId": "user123",
  "userEmail": "user@example.com",
  "userData": {
    "name": "João Silva",
    "plan": "premium"
  }
}

# Recuperação de senha com alerta
POST /api/email/flows/password-recovery
{
  "userId": "user123",
  "userEmail": "user@example.com",
  "resetToken": "abc123",
  "userData": { "name": "João" }
}

# Campanha de marketing personalizada
POST /api/email/flows/marketing-campaign
{
  "campaignId": "summer2025",
  "recipients": [
    {
      "userId": "user1",
      "email": "user1@example.com",
      "data": { "name": "Ana", "segment": "premium" }
    }
  ],
  "campaignData": {
    "subject": "Oferta especial de verão!",
    "template": "summer-campaign"
  }
}
```

### ✅ **Monitoramento de Performance**
```bash
# Métricas em tempo real
GET /api/metrics/performance?period=1h

# Histórico de métricas
GET /api/metrics/performance/history?hours=24

# Alertas ativos
GET /api/metrics/performance/alerts

# Benchmark de performance
POST /api/metrics/performance/benchmark
```

### ✅ **Gerenciamento Avançado de Filas**
```bash
# Pausar fila durante manutenção
POST /api/admin/queue/pause

# Retomar processamento
POST /api/admin/queue/resume

# Limpeza inteligente
DELETE /api/admin/queue/clean?grace=3600000&status=completed

# Reprocessar falhas em lote
POST /api/admin/queue/retry-failed?limit=100

# Estatísticas detalhadas
GET /api/admin/queue/stats
```

## 📊 **Dashboard de Métricas em Tempo Real**

### **Performance Metrics Response:**
```json
{
  "timestamp": "2025-01-20T10:30:00Z",
  "period": "1h",
  "email": {
    "totalSent": 1250,
    "totalFailed": 25,
    "averageProcessingTime": 2500,
    "throughputPerSecond": 0.35,
    "successRate": 98.04,
    "providerStats": {
      "gmail": { "sent": 800, "failed": 15, "avgTime": 2200 },
      "sendgrid": { "sent": 450, "failed": 10, "avgTime": 2800 }
    }
  },
  "queue": {
    "waiting": 45,
    "active": 8,
    "completed": 1200,
    "failed": 25,
    "delayed": 12,
    "throughput": 0.35,
    "averageWaitTime": 1500
  },
  "system": {
    "memoryUsage": {
      "rss": 45123456,
      "heapUsed": 23456789,
      "heapTotal": 35000000
    },
    "uptime": 86400,
    "redisMemory": "128MB",
    "redisConnections": 12
  },
  "alerts": [
    {
      "level": "warning",
      "message": "Fila com muitos jobs aguardando: 45",
      "metric": "queue.waiting",
      "value": 45,
      "threshold": 30
    }
  ]
}
```

## 🔄 **Email Flows - Sequências Inteligentes**

### **1. Flow de Onboarding:**
```
📧 Boas-vindas (imediato)
  ↓ 24 horas
📧 Tutorial completo  
  ↓ 3 dias
📧 Recursos em destaque
  ↓ 7 dias  
📧 Pedido de feedback
```

### **2. Flow de Recuperação:**
```
🔐 Link de reset (imediato)
  ↓ 1 minuto
🚨 Alerta de segurança
```

### **3. Campanha Marketing:**
```
🎯 Email principal (delay aleatório)
  ↓ 3 dias (opcional)
📈 Follow-up personalizado
```

## 🚨 **Sistema de Alertas Inteligentes**

### **Alertas Automáticos:**
- **Taxa de sucesso < 95%** → Warning/Error
- **Fila > 1000 jobs** → Warning/Error  
- **Tempo processamento > 30s** → Warning/Error
- **Uso memória > 80%** → Warning/Error
- **Jobs falhados > 100** → Warning/Error

### **Notificações:**
```bash
# Webhook automático para alertas críticos
POST https://your-app.com/webhooks/email-alerts
{
  "level": "error",
  "message": "Taxa de sucesso crítica: 85%",
  "metric": "email.successRate", 
  "value": 85,
  "threshold": 90,
  "timestamp": "2025-01-20T10:30:00Z"
}
```

## 🛡️ **Segurança e Configuração Dinâmica**

### **Configurações no Banco de Dados:**
```bash
# Todas as configurações agora são dinâmicas
GET /api/admin/config/category/security
PUT /api/admin/config/RATE_LIMIT_REQUESTS

# IPs permitidos com estatísticas  
GET /api/admin/config/allowed-ips
POST /api/admin/config/allowed-ips
{
  "ipAddress": "192.168.1.100",
  "description": "Servidor de produção",
  "createdBy": "admin"
}

# Domínios bloqueados
GET /api/admin/config/blocked-domains
POST /api/admin/config/blocked-domains
{
  "domain": "spam-domain.com",
  "reason": "Histórico de spam",
  "blockedBy": "security-team"
}
```

### **Templates Versionados:**
```bash
# Templates no banco com histórico
GET /api/admin/templates
POST /api/admin/templates
{
  "name": "invoice-v2",
  "subject": "Fatura #{{number}} - {{company.name}}",
  "content": "<html>...</html>",
  "description": "Template de fatura atualizado"
}

# Preview em tempo real
POST /api/admin/templates/invoice-v2/preview
{
  "number": "12345",
  "amount": 150.00,
  "company": { "name": "ACME Corp" }
}
```

## 🚀 **Principais Vantagens da Migração**

### **Performance (BullMQ vs Bull):**
- **30-50% menos uso** de memória Redis
- **2-3x melhor throughput** em alto volume  
- **Jobs com delay precisos** ao milissegundo
- **Rate limiting automático** por fila

### **Observabilidade:**
- **Métricas em tempo real** com histórico
- **Alertas inteligentes** automáticos
- **Health checks detalhados** por componente
- **Benchmark de performance** integrado

### **Administração:**
- **Configuração zero-downtime** via banco
- **Templates versionados** com aprovação
- **Flows automatizados** para sequências
- **Dashboard unificado** Bull Board

### **Segurança:**
- **IPs com rastreamento** de uso
- **Configurações auditadas** com histórico
- **Webhooks assinados** com HMAC
- **Rate limiting dinâmico** por contexto

## 📈 **Casos de Uso Avançados**

### **1. E-commerce:**
```bash
# Sequência pós-compra
POST /api/email/flows/onboarding
# → Confirmação → Rastreamento → Avaliação → Upsell
```

### **2. SaaS:**
```bash
# Trial to paid conversion
POST /api/email/flows/trial-conversion  
# → Welcome → Tutorial → Feature highlight → Upgrade offer
```

### **3. Campanhas:**
```bash
# Segmentação inteligente
POST /api/email/flows/marketing-campaign
# → A/B test subjects → Timing optimization → Follow-up baseado em engagement
```

## 🎯 **Roadmap e Próximos Passos**

### **Implementado ✅:**
- ✅ BullMQ com Redis Streams
- ✅ Configuração dinâmica no banco
- ✅ Templates versionados
- ✅ Email flows automatizados  
- ✅ Monitoramento avançado
- ✅ Alertas inteligentes
- ✅ APIs de administração

### **Próximas Features 🔄:**
- 🔄 Interface web de administração
- 🔄 A/B testing de templates
- 🔄 Analytics de engagement
- 🔄 Integração com CRMs
- 🔄 Machine learning para otimização

### **Opcional 💡:**
- 💡 Multi-tenancy para SaaS
- 💡 Plugin system para extensões
- 💡 GraphQL API
- 💡 Mobile push notifications

---

**🎉 O microsserviço está production-ready com BullMQ e recursos enterprise!**