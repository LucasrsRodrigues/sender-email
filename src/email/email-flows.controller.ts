import { Controller, Post, Get, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { EmailFlowsService } from './email-flows.service';
import { WhitelistDbGuard } from 'src/common/guards/whitelist-db-.guard';

class StartOnboardingDto {
  userId: string;
  userEmail: string;
  userData: Record<string, any>;
}

class StartPasswordRecoveryDto {
  userId: string;
  userEmail: string;
  resetToken: string;
  userData: Record<string, any>;
}

class StartMarketingCampaignDto {
  campaignId: string;
  recipients: Array<{
    userId: string;
    email: string;
    data: Record<string, any>;
  }>;
  campaignData: Record<string, any>;
}

@Controller('email/flows')
@UseGuards(WhitelistDbGuard)
export class EmailFlowsController {
  constructor(private readonly emailFlowsService: EmailFlowsService) { }

  // Iniciar flow de onboarding
  @Post('onboarding')
  async startOnboarding(@Body() dto: StartOnboardingDto) {
    const result = await this.emailFlowsService.startOnboardingFlow(
      dto.userId,
      dto.userEmail,
      dto.userData
    );

    return {
      status: 'success',
      message: 'Flow de onboarding iniciado',
      data: result,
    };
  }

  // Iniciar flow de recuperação de senha
  @Post('password-recovery')
  async startPasswordRecovery(@Body() dto: StartPasswordRecoveryDto) {
    const result = await this.emailFlowsService.startPasswordRecoveryFlow(
      dto.userId,
      dto.userEmail,
      dto.resetToken,
      dto.userData
    );

    return {
      status: 'success',
      message: 'Flow de recuperação de senha iniciado',
      data: result,
    };
  }

  // Iniciar campanha de marketing
  @Post('marketing-campaign')
  async startMarketingCampaign(@Body() dto: StartMarketingCampaignDto) {
    const result = await this.emailFlowsService.startMarketingCampaignFlow(
      dto.campaignId,
      dto.recipients,
      dto.campaignData
    );

    return {
      status: 'success',
      message: `Campanha iniciada para ${dto.recipients.length} destinatários`,
      data: result,
    };
  }

  // Obter status de um flow
  @Get(':flowId/status')
  async getFlowStatus(@Param('flowId') flowId: string) {
    const status = await this.emailFlowsService.getFlowStatus(flowId);

    if (!status) {
      return {
        status: 'not_found',
        message: 'Flow não encontrado',
      };
    }

    return {
      status: 'success',
      data: status,
    };
  }

  // Cancelar flow
  @Delete(':flowId')
  async cancelFlow(@Param('flowId') flowId: string) {
    await this.emailFlowsService.cancelFlow(flowId);

    return {
      status: 'success',
      message: `Flow ${flowId} cancelado`,
    };
  }

  // Listar flows ativos
  @Get('active')
  async getActiveFlows(@Query('limit') limit?: string) {
    const flows = await this.emailFlowsService.getActiveFlows(
      limit ? parseInt(limit) : 50
    );

    return {
      status: 'success',
      data: {
        flows,
        count: flows.length,
      },
    };
  }

  // Estatísticas de flows
  @Get('stats')
  async getFlowStats(@Query('period') period?: 'day' | 'week' | 'month') {
    const stats = await this.emailFlowsService.getFlowStats(period || 'day');

    return {
      status: 'success',
      data: stats,
    };
  }

  // Exemplos de flows predefinidos
  @Get('examples')
  async getFlowExamples() {
    const examples = {
      onboarding: {
        description: 'Sequência de e-mails para novos usuários',
        steps: [
          { name: 'Boas-vindas', delay: '0 minutos', template: 'welcome' },
          { name: 'Tutorial', delay: '1 dia', template: 'tutorial' },
          { name: 'Recursos', delay: '3 dias', template: 'features-highlight' },
          { name: 'Feedback', delay: '7 dias', template: 'feedback-request' },
        ],
        usage: 'POST /api/email/flows/onboarding',
      },

      passwordRecovery: {
        description: 'Sequência para recuperação de senha',
        steps: [
          { name: 'Link de reset', delay: '0 minutos', template: 'password-reset' },
          { name: 'Alerta de segurança', delay: '1 minuto', template: 'security-alert' },
        ],
        usage: 'POST /api/email/flows/password-recovery',
      },

      marketingCampaign: {
        description: 'Campanha de marketing personalizada',
        steps: [
          { name: 'Email principal', delay: 'aleatório até 1 min', template: 'campaign' },
          { name: 'Follow-up', delay: '3 dias (opcional)', template: 'campaign-followup' },
        ],
        usage: 'POST /api/email/flows/marketing-campaign',
      },
    };

    return {
      status: 'success',
      data: { examples },
    };
  }

  // Templates necessários para flows
  @Get('required-templates')
  async getRequiredTemplates() {
    const templates = {
      onboarding: ['welcome', 'tutorial', 'features-highlight', 'feedback-request'],
      passwordRecovery: ['password-reset', 'security-alert'],
      marketing: ['campaign', 'campaign-followup'],
    };

    return {
      status: 'success',
      data: { templates },
      message: 'Certifique-se de que estes templates existem no banco de dados',
    };
  }
}