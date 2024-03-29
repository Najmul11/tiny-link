-- DropForeignKey
ALTER TABLE "Link" DROP CONSTRAINT "Link_userId_fkey";

-- AlterTable
ALTER TABLE "Link" ALTER COLUMN "userId" DROP NOT NULL,
ALTER COLUMN "expiryDate" SET DEFAULT now() + interval '10 days';

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
