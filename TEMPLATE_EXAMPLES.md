# 📧 Guia de Templates - Handlebars (.hbs)

O serviço agora suporta tanto arquivos `.hbs` quanto `.html`! Você pode usar seus templates existentes sem modificações.

## 🎯 Estrutura de Pastas

```
src/email/templates/
├── welcome.html              # Template HTML
├── password-reset.hbs        # Template Handlebars  
├── reset-password.html       # Template HTML alternativo
├── invoice.hbs              # Seus templates existentes
├── notification.hbs         # Seus templates existentes
└── ...
```

## 📋 Como Usar Seus Templates Existentes

### 1. **Copie seus arquivos .hbs**
```bash
# Copie seus templates para a pasta correta
cp /seus-templates/*.hbs src/email/templates/
```

### 2. **Exemplo de uso da API**
```bash
# Para usar o template 'password-reset.hbs'
curl -X POST http://localhost:3000/api/email/send \
  -H "Content-Type: application/json" \
  -d '{
    "to": "user@example.com",
    "subject": "Redefinição de Senha",
    "template": "password-reset",
    "variables": {
      "user": {
        "name": "João Silva",
        "email": "joao@example.com",
        "lastLogin": "2025-01-15T10:30:00Z"
      },
      "resetToken": "abc123",
      "resetUrl": "https://app.com/reset?token=abc123",
      "expiresIn": "1 hora",
      "supportContact": "suporte@empresa.com",
      "company": {
        "name": "Minha Empresa",
        "year": "2025",
        "address": "Rua das Flores, 123 - São Paulo, SP"
      },
      "sentAt": "2025-01-15T10:30:00Z"
    }
  }'
```

## 🔧 Templates Dinâmicos - Variáveis Comuns

### **Dados do Usuário**
```handlebars
{{user.name}}           <!-- Nome do usuário -->
{{user.email}}          <!-- E-mail do usuário -->
{{user.firstName}}      <!-- Primeiro nome -->
{{user.lastName}}       <!-- Último nome -->
{{user.avatar}}         <!-- URL do avatar -->
{{user.createdAt}}      <!-- Data de criação -->
{{user.lastLogin}}      <!-- Último login -->
```

### **Dados da Empresa/Sistema**
```handlebars
{{company.name}}        <!-- Nome da empresa -->
{{company.logo}}        <!-- URL do logo -->
{{company.address}}     <!-- Endereço -->
{{company.phone}}       <!-- Telefone -->
{{company.website}}     <!-- Website -->
{{app.name}}           <!-- Nome do app -->
{{app.version}}        <!-- Versão do app -->
```

### **Tokens e URLs**
```handlebars
{{resetToken}}         <!-- Token de reset -->
{{resetUrl}}           <!-- URL completa de reset -->
{{activationUrl}}      <!-- URL de ativação -->
{{loginUrl}}           <!-- URL de login -->
{{unsubscribeUrl}}     <!-- URL para descadastro -->
```

### **Dados Temporais**
```handlebars
{{expiresIn}}          <!-- Tempo de expiração (ex: "1 hora") -->
{{expiresAt}}          <!-- Data/hora de expiração -->
{{sentAt}}             <!-- Data/hora de envio -->
{{validUntil}}         <!-- Válido até -->
```

## 🎨 Helpers Disponíveis

### **Formatação de Data**
```handlebars
{{formatDate sentAt 'short'}}      <!-- 15/01/2025 -->
{{formatDate sentAt 'long'}}       <!-- 15 de janeiro de 2025 -->
{{formatDate sentAt 'datetime'}}   <!-- 15/01/2025 10:30 -->
```

### **Formatação de Moeda**
```handlebars
{{currency 99.90}}                 <!-- R$ 99,90 -->
{{currency invoice.total}}         <!-- R$ 150,00 -->
```

### **Manipulação de Texto**
```handlebars
{{uppercase user.name}}            <!-- JOÃO SILVA -->
{{lowercase user.email}}           <!-- joao@email.com -->
```

### **Condicionais**
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

### **Loops**
```handlebars
{{#each items}}
    <li>{{this.name}} - {{currency this.price}}</li>
{{/each}}

{{#each user.permissions}}
    <span class="permission">{{this}}</span>
{{/each}}
```

## 📋 Exemplo Completo - Invoice Template

```handlebars
<!-- src/email/templates/invoice.hbs -->
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Fatura #{{invoice.number}}</title>
</head>
<body>
    <h1>{{company.name}}</h1>
    
    <h2>Fatura #{{invoice.number}}</h2>
    <p>Data: {{formatDate invoice.date 'long'}}</p>
    <p>Vencimento: {{formatDate invoice.dueDate 'long'}}</p>
    
    <h3>Cliente:</h3>
    <p>{{customer.name}}<br>
       {{customer.email}}<br>
       {{customer.address}}</p>
    
    <h3>Itens:</h3>
    <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Quantidade</th>
                <th>Preço</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            {{#each invoice.items}}
            <tr>
                <td>{{this.description}}</td>
                <td>{{this.quantity}}</td>
                <td>{{currency this.price}}</td>
                <td>{{currency this.total}}</td>
            </tr>
            {{/each}}
        </tbody>
    </table>
    
    <h3>Total: {{currency invoice.total}}</h3>
    
    {{#if invoice.isPaid}}
        <div class="paid">✅ PAGO</div>
    {{else}}
        <a href="{{paymentUrl}}">Pagar Agora</a>
    {{/if}}
</body>
</html>
```

## 🔍 Testar Templates

### **Listar templates disponíveis**
```bash
GET http://localhost:3000/api/email/templates

# Resposta:
{
  "status": "success",
  "data": {
    "templates": [
      "welcome",
      "password-reset", 
      "reset-password",
      "invoice",
      "notification"
    ],
    "supportedExtensions": [".hbs", ".html"],
    "templatesPath": "src/email/templates/"
  }
}
```

### **Enviar e-mail de teste**
```javascript
// Teste com Node.js
const response = await fetch('http://localhost:3000/api/email/send', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    to: 'teste@example.com',
    subject: 'Teste do Template',
    template: 'password-reset', // Seu template .hbs
    variables: {
      user: { name: 'João' },
      resetUrl: 'https://app.com/reset?token=123'
    }
  })
});
```

## 🚨 Troubleshooting

### **Template não encontrado**
```
Error: Template 'meu-template' não encontrado. Suporte para extensões: .hbs, .html
```
**Solução:** Verifique se o arquivo existe na pasta `src/email/templates/`

### **Erro de compilação**
```
Error: Erro ao compilar template 'meu-template': ...
```
**Solução:** Verifique a sintaxe Handlebars no seu template

### **Variável não renderizada**
```html
<!-- Aparece: {{user.name}} ao invés do nome -->
```
**Solução:** Verifique se a variável foi passada corretamente na requisição

## 💡 Dicas

1. **Use nomes descritivos** para templates: `welcome-user.hbs`, `order-confirmation.hbs`
2. **Organize por categoria**: crie subpastas se necessário
3. **Teste localmente** antes de usar em produção
4. **Cache é automático**: templates são compilados apenas uma vez
5. **Suporte completo** ao Handlebars: partials, helpers customizados, etc.

---

**Agora você pode usar todos os seus templates .hbs existentes! 🎉**