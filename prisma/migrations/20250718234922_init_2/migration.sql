/*
  Warnings:

  - The `type` column on the `system_configs` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "SystemConfigType" AS ENUM ('STRING', 'NUMBER', 'BOOLEAN', 'JSON', 'ARRAY');

-- AlterTable
ALTER TABLE "system_configs" DROP COLUMN "type",
ADD COLUMN     "type" "SystemConfigType" NOT NULL DEFAULT 'STRING';

-- DropEnum
DROP TYPE "ConfigType";
