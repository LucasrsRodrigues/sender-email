# 📧 Email Service - Microsserviço Completo

[![NestJS](https://img.shields.io/badge/NestJS-10.0-red.svg)](https://nestjs.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.1-blue.svg)](https://www.typescriptlang.org/)
[![BullMQ](https://img.shields.io/badge/BullMQ-4.15-orange.svg)](https://docs.bullmq.io/)
[![Prisma](https://img.shields.io/badge/Prisma-5.6-green.svg)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue.svg)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-7-red.svg)](https://redis.io/)

Microsserviço enterprise-grade para envio de e-mails com filas assíncronas, templates dinâmicos, configuração no banco de dados e monitoramento completo.

## 🚀 **Características Principais**

- **🎯 NestJS + TypeScript** - Framework moderno e type-safe
- **📊 BullMQ + Redis Streams** - Filas assíncronas de alta performance
- **🗃️ Prisma + PostgreSQL** - ORM type-safe com banco relacional
- **📧 Dual Provider** - Gmail + SendGrid com fallback automático
- **🎨 Templates Handlebars** - Templates dinâmicos (.hbs/.html)
- **⚙️ Configuração Dinâmica** - Settings no banco sem restart
- **🔄 Email Flows** - Sequências automatizadas (onboarding, recovery, etc.)
- **📈 Monitoramento Completo** - Métricas, alertas e dashboards
- **🛡️ Segurança** - Whitelist IPs, rate limiting, validação
- **🔧 APIs de Admin** - Gestão de filas, templates e configurações

---

## 📋 **Índice**

1. [Instalação](#-instalação)
2. [Configuração](#%EF%B8%8F-configuração)
3. [APIs Principais](#-apis-principais)
4. [Email Flows](#-email-flows)
5. [Administração](#%EF%B8%8F-administração)
6. [Monitoramento](#-monitoramento)
7. [Templates](#-templates)
8. [Exemplos de Uso](#-exemplos-de-uso)
9. [Deploy e Docker](#-deploy-e-docker)
10. [Troubleshooting](#-troubleshooting)

---

## 🛠️ **Instalação**

### **Pré-requisitos**
- Node.js 18+
- PostgreSQL 12+
- Redis 6+
- Gmail com senha de app OU SendGrid API Key

### **Setup Rápido**

```bash
# 1. Clone o repositório
git clone <repository-url>
cd email-service

# 2. Instale dependências
npm install

# 3. Configure variáveis de ambiente
cp .env.example .env
# Edite o .env com suas configurações

# 4. Configure banco de dados
npm run prisma:generate
npm run prisma:migrate

# 5. Migre configurações para o banco
npm run migrate:configs

# 6. Inicie o serviço
npm run start:dev
```

### **Docker (Recomendado)**

```bash
# Subir todos os serviços
docker-compose up -d

# Ver logs
docker-compose logs -f email-service

# Parar serviços
docker-compose down
```

---

## ⚙️ **Configuração**

### **Variáveis de Ambiente (.env)**

```env
# Database
DATABASE_URL="postgresql://user:pass@localhost:5432/email_service"

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# Gmail SMTP
GMAIL_USER=seu-email@gmail.com
GMAIL_PASS=sua-senha-de-app-gmail

# SendGrid (fallback)
SENDGRID_API_KEY=SG.sua-api-key-sendgrid

# Segurança (IPs permitidos - separados por vírgula)
ALLOWED_IPS=127.0.0.1,::1,192.168.1.100

# App
PORT=3000
NODE_ENV=development
```

### **Configuração Gmail**
1. Ativar verificação em 2 etapas na conta Google
2. Ir em "Senhas de app" nas configurações da conta
3. Gerar senha específica para aplicativos
4. Usar essa senha no `GMAIL_PASS`

### **Configuração SendGrid**
1. Criar conta no SendGrid
2. Gerar API Key no painel
3. Adicionar no `SENDGRID_API_KEY`

---

## 🔌 **APIs Principais**

### **📧 Envio de E-mails**

#### `POST /api/email/send`
Envia um e-mail usando template com variáveis dinâmicas.

**Body:**
```json
{
  "to": "usuario@example.com",
  "subject": "Bem-vindo!",
  "template": "welcome",
  "variables": {
    "name": "João Silva",
    "code": "123456"
  },
  "priority": "high"
}
```

**Response:**
```json
{
  "status": "enqueued",
  "message": "E-mail adicionado à fila de processamento",
  "data": {
    "logId": "cm2x1234567890",
    "jobId": "123",
    "priority": "high",
    "estimatedDelay": "5-15 segundos"
  }
}
```

**Prioridades disponíveis:**
- `critical` - Enviado imediatamente
- `high` - Delay de 5 segundos
- `normal` - Delay de 15 segundos (padrão)
- `low` - Delay de 30 segundos

---

#### `GET /api/email/status/{logId}`
Verifica status de envio de um e-mail específico.

**Response:**
```json
{
  "status": "success",
  "data": {
    "id": "cm2x1234567890",
    "to": "usuario@example.com",
    "subject": "Bem-vindo!",
    "status": "SENT",
    "provider": "gmail",
    "sentAt": "2025-07-18T20:30:00Z",
    "attempts": 1,
    "job": {
      "id": "123",
      "progress": 100,
      "state": "completed"
    }
  }
}
```

**Status possíveis:**
- `PENDING` - Aguardando processamento
- `RETRYING` - Tentando reenviar
- `SENT` - Enviado com sucesso
- `FAILED` - Falha no envio

---

#### `GET /api/email/health`
Health check do serviço de e-mail.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-07-18T20:30:00Z",
  "queue": {
    "waiting": 5,
    "active": 2,
    "completed": 1250,
    "failed": 15,
    "total": 1272
  }
}
```

---

#### `GET /api/email/templates`
Lista templates disponíveis (.hbs e .html).

**Response:**
```json
{
  "status": "success",
  "data": {
    "templates": ["welcome", "password-reset", "invoice"],
    "supportedExtensions": [".hbs", ".html"],
    "templatesPath": "src/email/templates/"
  }
}
```

---

## 🔄 **Email Flows**

### **🎯 Onboarding Automático**

#### `POST /api/email/flows/onboarding`
Inicia sequência de 4 e-mails para novos usuários.

**Body:**
```json
{
  "userId": "user123",
  "userEmail": "usuario@example.com",
  "userData": {
    "name": "João Silva",
    "plan": "premium",
    "company": "ACME Corp"
  }
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Flow de onboarding iniciado",
  "data": {
    "flowId": "onboarding-user123-1642766400000",
    "jobIds": ["job1", "job2", "job3", "job4"],
    "steps": 4
  }
}
```

**Sequência de e-mails:**
1. **Boas-vindas** (imediato) - Template `welcome`
2. **Tutorial** (24h depois) - Template `tutorial`
3. **Recursos** (3 dias depois) - Template `features-highlight`
4. **Feedback** (7 dias depois) - Template `feedback-request`

---

### **🔐 Recuperação de Senha**

#### `POST /api/email/flows/password-recovery`
Inicia sequência de recuperação de senha com alerta de segurança.

**Body:**
```json
{
  "userId": "user123",
  "userEmail": "usuario@example.com",
  "resetToken": "abc123xyz789",
  "userData": {
    "name": "João Silva",
    "lastLogin": "2025-07-18T10:00:00Z"
  }
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Flow de recuperação de senha iniciado",
  "data": {
    "flowId": "password-recovery-user123-1642766400000",
    "jobIds": ["reset-job", "alert-job"],
    "resetToken": "abc123xyz789",
    "expiresAt": "2025-07-18T21:30:00Z"
  }
}
```

**Sequência de e-mails:**
1. **Link de reset** (imediato) - Template `password-reset`
2. **Alerta de segurança** (1 min depois) - Template `security-alert`

---

### **📊 Gestão de Flows**

#### `GET /api/email/flows/{flowId}/status`
Verifica status de um flow específico.

**Response:**
```json
{
  "status": "success",
  "data": {
    "flowId": "onboarding-user123-1642766400000",
    "totalJobs": 4,
    "completed": 2,
    "waiting": 1,
    "delayed": 1,
    "failed": 0,
    "jobs": [
      {
        "id": "job1",
        "name": "send-email",
        "state": "completed",
        "processedOn": 1642766400000,
        "delay": 0
      }
    ]
  }
}
```

---

#### `DELETE /api/email/flows/{flowId}`
Cancela um flow (remove jobs pendentes).

**Response:**
```json
{
  "status": "success",
  "message": "Flow onboarding-user123-1642766400000 cancelado"
}
```

---

#### `GET /api/email/flows/stats`
Estatísticas de flows por período.

**Query Params:**
- `period` - `day`, `week`, `month` (padrão: `day`)

**Response:**
```json
{
  "status": "success",
  "data": {
    "period": "day",
    "startDate": "2025-07-17T20:30:00Z",
    "endDate": "2025-07-18T20:30:00Z",
    "templates": [
      {
        "template": "welcome",
        "count": 45,
        "avgAttempts": 1.2
      },
      {
        "template": "password-reset",
        "count": 12,
        "avgAttempts": 1.0
      }
    ],
    "totalEmails": 57
  }
}
```

---

## 🛠️ **Administração**

### **⚙️ Configurações Dinâmicas**

#### `GET /api/admin/config/categories`
Lista categorias de configuração disponíveis.

**Response:**
```json
{
  "status": "success",
  "data": {
    "categories": [
      {
        "name": "security",
        "description": "Configurações de segurança"
      },
      {
        "name": "email",
        "description": "Configurações de e-mail"
      },
      {
        "name": "performance",
        "description": "Configurações de performance"
      }
    ]
  }
}
```

---

#### `GET /api/admin/config/category/{category}`
Obter configurações de uma categoria específica.

**Exemplo:** `GET /api/admin/config/category/security`

**Response:**
```json
{
  "status": "success",
  "data": {
    "category": "security",
    "configs": [
      {
        "key": "RATE_LIMIT_TTL",
        "value": 60,
        "type": "NUMBER",
        "description": "TTL do rate limiting em segundos"
      },
      {
        "key": "RATE_LIMIT_REQUESTS",
        "value": 10,
        "type": "NUMBER",
        "description": "Número máximo de requests por TTL"
      }
    ],
    "count": 2
  }
}
```

---

#### `PUT /api/admin/config/{key}`
Atualizar configuração específica (sem restart do serviço).

**Exemplo:** `PUT /api/admin/config/RATE_LIMIT_REQUESTS`

**Body:**
```json
{
  "value": 20,
  "changedBy": "admin",
  "reason": "Aumentar limite para Black Friday"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Configuração 'RATE_LIMIT_REQUESTS' atualizada com sucesso"
}
```

---

#### `GET /api/admin/config/{key}/history`
Histórico de mudanças de uma configuração.

**Query Params:**
- `limit` - Número máximo de registros (padrão: 10)

**Response:**
```json
{
  "status": "success",
  "data": {
    "key": "RATE_LIMIT_REQUESTS",
    "history": [
      {
        "id": "hist123",
        "oldValue": "10",
        "newValue": "20",
        "changedBy": "admin",
        "reason": "Aumentar limite para Black Friday",
        "createdAt": "2025-07-18T20:30:00Z"
      }
    ],
    "count": 1
  }
}
```

---

### **🌐 Gestão de IPs**

#### `GET /api/admin/config/allowed-ips`
Lista IPs permitidos com estatísticas de uso.

**Response:**
```json
{
  "status": "success",
  "data": {
    "ips": ["127.0.0.1", "192.168.1.100", "203.0.113.1"],
    "count": 3
  }
}
```

---

#### `POST /api/admin/config/allowed-ips`
Adicionar IP à whitelist.

**Body:**
```json
{
  "ipAddress": "203.0.113.1",
  "description": "Servidor de produção",
  "createdBy": "admin"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "IP 203.0.113.1 adicionado à whitelist"
}
```

---

#### `DELETE /api/admin/config/allowed-ips/{ip}`
Remove IP da whitelist.

**Response:**
```json
{
  "status": "success",
  "message": "IP 203.0.113.1 removido da whitelist"
}
```

---

### **🚫 Gestão de Domínios Bloqueados**

#### `GET /api/admin/config/blocked-domains`
Lista domínios bloqueados.

**Response:**
```json
{
  "status": "success",
  "data": {
    "domains": ["spam-domain.com", "fake-email.com"],
    "count": 2
  }
}
```

---

#### `POST /api/admin/config/blocked-domains`
Bloquear domínio.

**Body:**
```json
{
  "domain": "spam-domain.com",
  "reason": "Histórico de spam",
  "blockedBy": "security-team"
}
```

---

### **🎨 Gestão de Templates**

#### `GET /api/admin/templates`
Lista todos os templates no banco de dados.

**Response:**
```json
{
  "status": "success",
  "data": {
    "templates": [
      {
        "name": "welcome",
        "subject": "Bem-vindo à nossa plataforma!",
        "description": "Template de boas-vindas",
        "version": 2,
        "isActive": true,
        "createdAt": "2025-07-18T20:30:00Z",
        "updatedAt": "2025-07-18T20:35:00Z"
      }
    ],
    "count": 1
  }
}
```

---

#### `GET /api/admin/templates/{name}`
Obter template específico.

**Response:**
```json
{
  "status": "success",
  "data": {
    "template": {
      "id": "tpl123",
      "name": "welcome",
      "subject": "Bem-vindo {{name}}!",
      "content": "<h1>Olá {{name}}!</h1><p>Seu código: {{code}}</p>",
      "description": "Template de boas-vindas",
      "variables": {
        "name": "string",
        "code": "string"
      },
      "version": 2,
      "isActive": true
    }
  }
}
```

---

#### `POST /api/admin/templates`
Criar novo template.

**Body:**
```json
{
  "name": "invoice",
  "subject": "Fatura #{{number}} - {{company.name}}",
  "content": "<h1>Fatura #{{number}}</h1><p>Total: {{currency amount}}</p>",
  "description": "Template de fatura",
  "variables": {
    "number": "string",
    "amount": "number",
    "company": "object"
  },
  "createdBy": "admin"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Template 'invoice' criado com sucesso",
  "data": {
    "id": "tpl456"
  }
}
```

---

#### `PUT /api/admin/templates/{name}`
Atualizar template existente.

**Body:**
```json
{
  "subject": "Fatura #{{number}} - {{company.name}} - Atualizada",
  "content": "<h1>Nova Fatura #{{number}}</h1>",
  "updatedBy": "admin",
  "reason": "Melhorar design"
}
```

---

#### `POST /api/admin/templates/{name}/preview`
Preview de template com variáveis de teste.

**Body:**
```json
{
  "number": "12345",
  "amount": 150.00,
  "company": {
    "name": "ACME Corp"
  }
}
```

**Response:**
```json
{
  "status": "success",
  "data": {
    "preview": {
      "subject": "Fatura #12345 - ACME Corp",
      "content": "<h1>Fatura #12345</h1><p>Total: R$ 150,00</p>"
    }
  }
}
```

---

#### `GET /api/admin/templates/{name}/history`
Histórico de versões do template.

**Response:**
```json
{
  "status": "success",
  "data": {
    "name": "welcome",
    "history": [
      {
        "id": "hist789",
        "version": 1,
        "subject": "Bem-vindo!",
        "changedBy": "admin",
        "reason": "Versão inicial",
        "createdAt": "2025-07-18T20:30:00Z"
      }
    ],
    "count": 1
  }
}
```

---

#### `PUT /api/admin/templates/{name}/toggle`
Ativar/desativar template.

**Body:**
```json
{
  "isActive": false,
  "updatedBy": "admin"
}
```

---

### **🔧 Gestão de Filas**

#### `GET /api/admin/queue/status`
Status atual da fila BullMQ.

**Response:**
```json
{
  "status": "success",
  "data": {
    "queueName": "email",
    "isHealthy": true,
    "waiting": 5,
    "active": 2,
    "completed": 1250,
    "failed": 15,
    "delayed": 3,
    "paused": false,
    "workers": 5
  }
}
```

---

#### `GET /api/admin/queue/stats`
Estatísticas detalhadas da fila.

**Response:**
```json
{
  "status": "success",
  "data": {
    "queueName": "email",
    "jobCounts": {
      "waiting": 5,
      "active": 2,
      "completed": 1250,
      "failed": 15,
      "delayed": 3
    },
    "workers": [
      {
        "id": "worker1",
        "addr": "127.0.0.1:3000",
        "age": 3600,
        "idle": 0
      }
    ],
    "metrics": {
      "completed": 1250,
      "failed": 15,
      "throughput": 0.35
    },
    "isPaused": false,
    "timestamp": "2025-07-18T20:30:00Z"
  }
}
```

---

#### `POST /api/admin/queue/pause`
Pausar processamento da fila.

**Response:**
```json
{
  "status": "success",
  "message": "Fila pausada com sucesso"
}
```

---

#### `POST /api/admin/queue/resume`
Retomar processamento da fila.

**Response:**
```json
{
  "status": "success",
  "message": "Fila retomada com sucesso"
}
```

---

#### `DELETE /api/admin/queue/clean`
Limpar jobs antigos da fila.

**Query Params:**
- `grace` - Tempo em ms para considerar job como antigo
- `status` - Tipo de job: `completed`, `failed`, `active`

**Exemplo:** `DELETE /api/admin/queue/clean?grace=3600000&status=completed`

**Response:**
```json
{
  "status": "success",
  "message": "25 jobs removidos da fila",
  "data": {
    "cleaned": 25
  }
}
```

---

#### `POST /api/admin/queue/retry-failed`
Reprocessar jobs falhados.

**Query Params:**
- `limit` - Número máximo de jobs para reprocessar

**Response:**
```json
{
  "status": "success",
  "message": "5 jobs falhados reprocessados",
  "data": {
    "retried": 5
  }
}
```

---

#### `GET /api/admin/queue/health`
Health check específico da fila com recomendações.

**Response:**
```json
{
  "status": "healthy",
  "data": {
    "queueName": "email",
    "isHealthy": true,
    "waiting": 5,
    "active": 2,
    "failed": 2
  },
  "recommendations": [
    "Fila operando normalmente."
  ]
}
```

---

## 📊 **Monitoramento**

### **📈 Métricas Básicas**

#### `GET /api/metrics`
Métricas gerais do sistema.

**Query Params:**
- `period` - `5min`, `1h`, `24h`, `7d` (padrão: `24h`)

**Response:**
```json
{
  "status": "success",
  "data": {
    "timestamp": "2025-07-18T20:30:00Z",
    "period": "24h",
    "email": {
      "totalSent": 1250,
      "totalFailed": 25,
      "totalPending": 5,
      "successRate": 98.04,
      "providerStats": {
        "gmail": 800,
        "sendgrid": 450
      }
    },
    "system": {
      "uptime": 86400,
      "memoryUsage": {
        "rss": 45123456,
        "heapUsed": 23456789,
        "heapTotal": 35000000
      }
    }
  }
}
```

---

#### `GET /api/metrics/health`
Health check completo do sistema.

**Response:**
```json
{
  "status": "healthy",
  "timestamp": "2025-07-18T20:30:00Z",
  "services": {
    "database": {
      "status": "healthy",
      "responseTime": "15ms"
    }
  },
  "metrics": {
    "email": {
      "totalSent": 150,
      "successRate": 96.77
    }
  },
  "uptime": 3600,
  "memory": {
    "rss": 45123456,
    "heapUsed": 23456789
  },
  "version": "1.0.0"
}
```

---

#### `GET /api/metrics/prometheus`
Métricas no formato Prometheus.

**Response (text/plain):**
```
# HELP email_total Total number of emails processed
# TYPE email_total counter
email_total{status="sent"} 1250
email_total{status="failed"} 25
email_total{status="pending"} 5

# HELP email_success_rate Email success rate percentage
# TYPE email_success_rate gauge
email_success_rate 98.04

# HELP email_provider_total Emails sent by provider
# TYPE email_provider_total counter
email_provider_total{provider="gmail"} 800
email_provider_total{provider="sendgrid"} 450

# HELP system_uptime_seconds System uptime in seconds
# TYPE system_uptime_seconds gauge
system_uptime_seconds 86400
```

---

## 🎨 **Templates**

### **Tipos Suportados**
- `.hbs` - Handlebars (recomendado)
- `.html` - HTML simples com Handlebars

### **Localização**
- **Arquivos**: `src/email/templates/`
- **Banco de dados**: Tabela `email_templates`

### **Helpers Disponíveis**

#### **Formatação de Data**
```handlebars
{{formatDate sentAt 'short'}}      <!-- 18/07/2025 -->
{{formatDate sentAt 'long'}}       <!-- 18 de julho de 2025 -->
{{formatDate sentAt 'datetime'}}   <!-- 18/07/2025 20:30 -->
```

#### **Formatação de Moeda**
```handlebars
{{currency 99.90}}                 <!-- R$ 99,90 -->
{{currency invoice.total}}         <!-- R$ 150,00 -->
```

#### **Manipulação de Texto**
```handlebars
{{uppercase user.name}}            <!-- JOÃO SILVA -->
{{lowercase user.email}}           <!-- joao@email.com -->
```

#### **Condicionais**
```handlebars
{{#if user.isActive}}
    <span class="active">Usuário Ativo</span>
{{else}}
    <span class="inactive">Usuário Inativo</span>
{{/if}}

{{#ifEquals user.role 'admin'}}
    <div class="admin-panel">Painel Admin</div>
{{/ifEquals}}
```

#### **Loops**
```handlebars
{{#each items}}
    <li>{{this.name}} - {{currency this.price}}</li>
{{/each}}
```

### **Templates Incluídos**

#### **welcome.html**
Template de boas-vindas com código de verificação.

**Variáveis:**
- `name` - Nome do usuário
- `code` - Código de verificação
- `activationUrl` - URL de ativação (opcional)

#### **password-reset.hbs**
Template para redefinição de senha.

**Variáveis:**
- `user.name` - Nome do usuário
- `resetUrl` - URL de redefinição
- `expiresIn` - Tempo de expiração
- `resetToken` - Token de reset

---

## 💡 **Exemplos de Uso**

### **Envio Simples**
```bash
curl -X POST http://localhost:3000/api/email/send \
  -H "Content-Type: application/json" \
  -d '{
    "to": "usuario@example.com",
    "subject": "Bem-vindo!",
    "template": "welcome",
    "variables": {
      "name": "João Silva",
      "code": "123456"
    }
  }'
```

### **Flow de Onboarding**
```bash
curl -X POST http://localhost:3000/api/email/flows/onboarding \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user123",
    "userEmail": "usuario@example.com",
    "userData": {
      "name": "João Silva",
      "plan": "premium"
    }
  }'
```

### **Criar Template**
```bash
curl -X POST http://localhost:3000/api/admin/templates \
  -H "Content-Type: application/json" \
  -d '{
    "name": "invoice",
    "subject": "Fatura #{{number}}",
    "content": "<h1>Fatura #{{number}}</h1><p>Total: {{currency amount}}</p>",
    "description": "Template de fatura"
  }'
```

### **Configurar Rate Limit**
```bash
curl -X PUT http://localhost:3000/api/admin/config/RATE_LIMIT_REQUESTS \
  -H "Content-Type: application/json" \
  -d '{
    "value": 20,
    "changedBy": "admin",
    "reason": "Aumentar para Black Friday"
  }'
```

---

## 🐳 **Deploy e Docker**

### **Docker Compose**
```bash
# Subir todos os serviços
docker-compose up -d

# Ver logs
docker-compose logs -f email-service

# Rebuild
docker-compose up --build -d

# Parar
docker-compose down
```

### **Serviços Incluídos**
- **email-service** - API principal (porta 3000)
- **postgres** - Banco PostgreSQL (porta 5432)
- **redis** - Cache e filas (porta 6379)
- **bull-board** - Dashboard filas (porta 3001)

### **URLs dos Serviços**
- **API**: http://localhost:3000
- **Prisma Studio**: `npm run prisma:studio` → http://localhost:5555

### **Produção**
```bash
# Build para produção
npm run build

# Executar em produção
npm run start:prod

# PM2 (recomendado)
pm2 start dist/main.js --name email-service
```

---

## 🚨 **Troubleshooting**

### **Problemas Comuns**

#### **Erro: Gmail authentication failed**
```bash
# Solução:
# 1. Ativar verificação em 2 etapas na conta Google
# 2. Gerar senha de app específica
# 3. Usar senha de app no GMAIL_PASS (não a senha normal)
```

#### **Erro: Template não encontrado**
```bash
# Verificar se template existe
ls src/email/templates/

# Ou criar via API
curl -X POST http://localhost:3000/api/admin/templates \
  -H "Content-Type: application/json" \
  -d '{"name": "welcome", "subject": "Bem-vindo!", "content": "<h1>Olá!</h1>"}'
```

#### **Erro: IP não autorizado**
```bash
# Adicionar IP à whitelist
curl -X POST http://localhost:3000/api/admin/config/allowed-ips \
  -H "Content-Type: application/json" \
  -d '{"ipAddress": "203.0.113.1", "description": "Meu IP"}'
```

#### **Erro: Redis connection failed**
```bash
# Verificar se Redis está rodando
redis-cli ping

# Docker
docker-compose up redis -d
```

#### **Erro: Database connection failed**
```bash
# Verificar conexão
npm run prisma:studio

# Executar migrações
npm run prisma:migrate
```

### **Logs e Debugging**
```bash
# Logs em tempo real
docker-compose logs -f email-service

# Logs específicos
docker-compose logs redis
docker-compose logs postgres

# Debug local
npm run start:debug
```

---

## 📚 **Recursos Adicionais**

### **Dashboards**
- **Prisma Studio**: Interface do banco → `npm run prisma:studio`
- **Métricas Prometheus**: Formato padrão → `/api/metrics/prometheus`

### **Scripts Úteis**
```bash
# Migração completa
npm run migrate:configs

# Backup manual
npm run backup:create

# Limpeza de logs antigos
npm run cleanup:logs

# Geração de relatórios
npm run reports:daily
```