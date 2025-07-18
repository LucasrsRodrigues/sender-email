import { PrismaClient } from '@prisma/client';
import * as fs from 'fs';
import * as path from 'path';

const prisma = new PrismaClient();

async function migrateConfigurations() {
  console.log('🔄 Iniciando migração de configurações para o banco de dados...');

  try {
    // 1. Migrar IPs permitidos do .env
    const allowedIPs = process.env.ALLOWED_IPS?.split(',') || ['127.0.0.1', '::1'];

    for (const ip of allowedIPs) {
      const cleanIP = ip.trim();
      await prisma.allowedIP.upsert({
        where: { ipAddress: cleanIP },
        update: {},
        create: {
          ipAddress: cleanIP,
          description: 'Migrado do .env',
          createdBy: 'system',
        },
      });
      console.log(`✅ IP ${cleanIP} migrado`);
    }

    // 2. Migrar domínios bloqueados do .env
    const blockedDomains = process.env.BLOCKED_DOMAINS?.split(',') || [];

    for (const domain of blockedDomains) {
      const cleanDomain = domain.trim();
      if (cleanDomain) {
        await prisma.blockedDomain.upsert({
          where: { domain: cleanDomain },
          update: {},
          create: {
            domain: cleanDomain,
            reason: 'Migrado do .env',
            blockedBy: 'system',
          },
        });
        console.log(`✅ Domínio ${cleanDomain} migrado`);
      }
    }

    // 3. Migrar configurações do sistema
    const systemConfigs = [
      {
        key: 'GMAIL_USER',
        value: process.env.GMAIL_USER || '',
        type: 'STRING',
        description: 'Usuário Gmail para envio',
        category: 'email',
        isPublic: false,
      },
      {
        key: 'GMAIL_PASS',
        value: process.env.GMAIL_PASS || '',
        type: 'STRING',
        description: 'Senha de app Gmail',
        category: 'email',
        isPublic: false,
      },
      {
        key: 'SENDGRID_API_KEY',
        value: process.env.SENDGRID_API_KEY || '',
        type: 'STRING',
        description: 'API Key do SendGrid',
        category: 'email',
        isPublic: false,
      },
      {
        key: 'WEBHOOK_SECRET',
        value: process.env.WEBHOOK_SECRET || 'default-secret',
        type: 'STRING',
        description: 'Secret para assinatura de webhooks',
        category: 'webhook',
        isPublic: false,
      },
      {
        key: 'BACKUP_PATH',
        value: process.env.BACKUP_PATH || './backups',
        type: 'STRING',
        description: 'Caminho para backups',
        category: 'backup',
        isPublic: true,
      },
    ];

    for (const config of systemConfigs) {
      if (config.value) {
        await prisma.systemConfig.upsert({
          where: { key: config.key },
          update: { value: config.value },
          create: {
            key: config.key,
            value: config.value,
            type: config.type as any,
            description: config.description,
            category: config.category,
            isPublic: config.isPublic,
            createdBy: 'migration',
          },
        });
        console.log(`✅ Config ${config.key} migrado`);
      }
    }

    // 4. Migrar templates de arquivos para banco
    const templatesPath = path.join(process.cwd(), 'src', 'email', 'templates');

    if (fs.existsSync(templatesPath)) {
      const files = fs.readdirSync(templatesPath);
      const templateFiles = files.filter(file => file.endsWith('.hbs') || file.endsWith('.html'));

      for (const file of templateFiles) {
        const name = file.replace(/\.(hbs|html)$/, '');
        const filePath = path.join(templatesPath, file);
        const content = fs.readFileSync(filePath, 'utf-8');

        // Extrair subject do HTML se possível
        const subjectMatch = content.match(/<title>(.*?)<\/title>/i);
        const subject = subjectMatch ? subjectMatch[1] : `Template ${name}`;

        await prisma.emailTemplate.upsert({
          where: { name },
          update: {},
          create: {
            name,
            subject,
            content,
            description: `Template migrado de ${file}`,
            createdBy: 'migration',
            updatedBy: 'migration',
          },
        });
        console.log(`✅ Template ${name} migrado de ${file}`);
      }
    }

    // 5. Criar configurações de webhook exemplo
    const webhookUrls = process.env.WEBHOOK_URLS?.split(',') || [];

    for (let i = 0; i < webhookUrls.length; i++) {
      const url = webhookUrls[i].trim();
      if (url) {
        await prisma.webhookConfig.upsert({
          where: { url },
          update: {},
          create: {
            name: `Webhook ${i + 1}`,
            url,
            secret: process.env.WEBHOOK_SECRET,
            events: ['email.sent', 'email.failed'],
            timeout: 5000,
            retryCount: 3,
          },
        });
        console.log(`✅ Webhook ${url} configurado`);
      }
    }

    console.log('🎉 Migração concluída com sucesso!');
    console.log('\n📋 Próximos passos:');
    console.log('1. Atualize seu código para usar ConfigService ao invés de process.env');
    console.log('2. Configure as APIs de administração');
    console.log('3. Teste as configurações via endpoints');
    console.log('4. Considere remover as variáveis do .env após validação');

  } catch (error) {
    console.error('❌ Erro na migração:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Executar migração se este arquivo for chamado diretamente
if (require.main === module) {
  migrateConfigurations()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}

export { migrateConfigurations };