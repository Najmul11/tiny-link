-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "expiryDate" TIMESTAMP(3) NOT NULL DEFAULT now() + interval '10 days';
