-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "maxClicks" INTEGER,
ALTER COLUMN "expiryDate" SET DEFAULT now() + interval '10 days';
