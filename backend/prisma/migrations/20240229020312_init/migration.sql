-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "originalLink" TEXT NOT NULL,
    "shortLink" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "userId" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Link_id_key" ON "Link"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Link_shortLink_key" ON "Link"("shortLink");

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
