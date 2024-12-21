-- AlterTable
ALTER TABLE "User" ADD COLUMN     "phonePrefixId" TEXT;

-- CreateTable
CREATE TABLE "PhonePrefix" (
    "id" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "PhonePrefix_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PhonePrefix_prefix_country_key" ON "PhonePrefix"("prefix", "country");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_phonePrefixId_fkey" FOREIGN KEY ("phonePrefixId") REFERENCES "PhonePrefix"("id") ON DELETE SET NULL ON UPDATE CASCADE;
