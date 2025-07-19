/*
  Warnings:

  - You are about to drop the column `createdAt` on the `allowed_ips` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `allowed_ips` table. All the data in the column will be lost.
  - You are about to drop the column `ipAddress` on the `allowed_ips` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `allowed_ips` table. All the data in the column will be lost.
  - You are about to drop the column `lastUsed` on the `allowed_ips` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `allowed_ips` table. All the data in the column will be lost.
  - You are about to drop the column `usageCount` on the `allowed_ips` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `api_keys` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `api_keys` table. All the data in the column will be lost.
  - You are about to drop the column `expiresAt` on the `api_keys` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `api_keys` table. All the data in the column will be lost.
  - You are about to drop the column `lastUsed` on the `api_keys` table. All the data in the column will be lost.
  - You are about to drop the column `rateLimit` on the `api_keys` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `api_keys` table. All the data in the column will be lost.
  - You are about to drop the column `usageCount` on the `api_keys` table. All the data in the column will be lost.
  - You are about to drop the column `blockedBy` on the `blocked_domains` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `blocked_domains` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `blocked_domains` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `blocked_domains` table. All the data in the column will be lost.
  - You are about to drop the column `changedBy` on the `config_history` table. All the data in the column will be lost.
  - You are about to drop the column `configKey` on the `config_history` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `config_history` table. All the data in the column will be lost.
  - You are about to drop the column `newValue` on the `config_history` table. All the data in the column will be lost.
  - You are about to drop the column `oldValue` on the `config_history` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `email_logs` table. All the data in the column will be lost.
  - You are about to drop the column `errorMessage` on the `email_logs` table. All the data in the column will be lost.
  - You are about to drop the column `jobId` on the `email_logs` table. All the data in the column will be lost.
  - You are about to drop the column `maxAttempts` on the `email_logs` table. All the data in the column will be lost.
  - You are about to drop the column `sentAt` on the `email_logs` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `email_logs` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `email_templates` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `email_templates` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `email_templates` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `email_templates` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `email_templates` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `system_configs` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `system_configs` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `system_configs` table. All the data in the column will be lost.
  - You are about to drop the column `isPublic` on the `system_configs` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `system_configs` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `system_configs` table. All the data in the column will be lost.
  - You are about to drop the column `changedBy` on the `template_history` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `template_history` table. All the data in the column will be lost.
  - You are about to drop the column `templateId` on the `template_history` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `webhook_configs` table. All the data in the column will be lost.
  - You are about to drop the column `failureCount` on the `webhook_configs` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `webhook_configs` table. All the data in the column will be lost.
  - You are about to drop the column `lastUsed` on the `webhook_configs` table. All the data in the column will be lost.
  - You are about to drop the column `retryCount` on the `webhook_configs` table. All the data in the column will be lost.
  - You are about to drop the column `successCount` on the `webhook_configs` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `webhook_configs` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `webhook_logs` table. All the data in the column will be lost.
  - You are about to drop the column `errorMessage` on the `webhook_logs` table. All the data in the column will be lost.
  - You are about to drop the column `responseTime` on the `webhook_logs` table. All the data in the column will be lost.
  - You are about to drop the column `statusCode` on the `webhook_logs` table. All the data in the column will be lost.
  - You are about to drop the column `webhookId` on the `webhook_logs` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ip_address]` on the table `allowed_ips` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[job_id]` on the table `email_logs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ip_address` to the `allowed_ips` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `allowed_ips` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `api_keys` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `blocked_domains` table without a default value. This is not possible if the table is not empty.
  - Added the required column `config_key` to the `config_history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `new_value` to the `config_history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `email_logs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `email_templates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `system_configs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `template_id` to the `template_history` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `webhook_configs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `webhook_id` to the `webhook_logs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "template_history" DROP CONSTRAINT "template_history_templateId_fkey";

-- DropForeignKey
ALTER TABLE "webhook_logs" DROP CONSTRAINT "webhook_logs_webhookId_fkey";

-- DropIndex
DROP INDEX "allowed_ips_ipAddress_key";

-- DropIndex
DROP INDEX "email_logs_jobId_key";

-- AlterTable
ALTER TABLE "allowed_ips" DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "ipAddress",
DROP COLUMN "isActive",
DROP COLUMN "lastUsed",
DROP COLUMN "updatedAt",
DROP COLUMN "usageCount",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" TEXT,
ADD COLUMN     "ip_address" TEXT NOT NULL,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "last_used" TIMESTAMP(3),
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "usage_count" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "api_keys" DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "expiresAt",
DROP COLUMN "isActive",
DROP COLUMN "lastUsed",
DROP COLUMN "rateLimit",
DROP COLUMN "updatedAt",
DROP COLUMN "usageCount",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" TEXT,
ADD COLUMN     "expires_at" TIMESTAMP(3),
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "last_used" TIMESTAMP(3),
ADD COLUMN     "rate_limit" INTEGER NOT NULL DEFAULT 100,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "usage_count" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "blocked_domains" DROP COLUMN "blockedBy",
DROP COLUMN "createdAt",
DROP COLUMN "isActive",
DROP COLUMN "updatedAt",
ADD COLUMN     "blocked_by" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "config_history" DROP COLUMN "changedBy",
DROP COLUMN "configKey",
DROP COLUMN "createdAt",
DROP COLUMN "newValue",
DROP COLUMN "oldValue",
ADD COLUMN     "changed_by" TEXT,
ADD COLUMN     "config_key" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "new_value" TEXT NOT NULL,
ADD COLUMN     "old_value" TEXT;

-- AlterTable
ALTER TABLE "email_logs" DROP COLUMN "createdAt",
DROP COLUMN "errorMessage",
DROP COLUMN "jobId",
DROP COLUMN "maxAttempts",
DROP COLUMN "sentAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "error_message" TEXT,
ADD COLUMN     "job_id" TEXT,
ADD COLUMN     "max_attempts" INTEGER NOT NULL DEFAULT 3,
ADD COLUMN     "sent_at" TIMESTAMP(3),
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "email_templates" DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "isActive",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedBy",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" TEXT,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_by" TEXT;

-- AlterTable
ALTER TABLE "system_configs" DROP COLUMN "createdAt",
DROP COLUMN "createdBy",
DROP COLUMN "isActive",
DROP COLUMN "isPublic",
DROP COLUMN "updatedAt",
DROP COLUMN "updatedBy",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "created_by" TEXT,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "is_public" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updated_by" TEXT;

-- AlterTable
ALTER TABLE "template_history" DROP COLUMN "changedBy",
DROP COLUMN "createdAt",
DROP COLUMN "templateId",
ADD COLUMN     "changed_by" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "template_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "webhook_configs" DROP COLUMN "createdAt",
DROP COLUMN "failureCount",
DROP COLUMN "isActive",
DROP COLUMN "lastUsed",
DROP COLUMN "retryCount",
DROP COLUMN "successCount",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "failure_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "last_used" TIMESTAMP(3),
ADD COLUMN     "retry_count" INTEGER NOT NULL DEFAULT 3,
ADD COLUMN     "success_count" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "webhook_logs" DROP COLUMN "createdAt",
DROP COLUMN "errorMessage",
DROP COLUMN "responseTime",
DROP COLUMN "statusCode",
DROP COLUMN "webhookId",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "error_message" TEXT,
ADD COLUMN     "response_time" INTEGER,
ADD COLUMN     "status_code" INTEGER,
ADD COLUMN     "webhook_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "allowed_ips_ip_address_key" ON "allowed_ips"("ip_address");

-- CreateIndex
CREATE UNIQUE INDEX "email_logs_job_id_key" ON "email_logs"("job_id");

-- AddForeignKey
ALTER TABLE "template_history" ADD CONSTRAINT "template_history_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "email_templates"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "webhook_logs" ADD CONSTRAINT "webhook_logs_webhook_id_fkey" FOREIGN KEY ("webhook_id") REFERENCES "webhook_configs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
