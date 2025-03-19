/*
  Warnings:

  - Made the column `description` on table `technologies` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "technologies" ALTER COLUMN "description" SET NOT NULL;
