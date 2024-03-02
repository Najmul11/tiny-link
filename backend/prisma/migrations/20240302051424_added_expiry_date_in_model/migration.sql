-- AlterTable
ALTER TABLE "Link" ALTER COLUMN "expiryDate" SET DEFAULT now() + interval '10 days';
