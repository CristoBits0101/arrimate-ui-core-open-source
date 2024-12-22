-- AlterTable
ALTER TABLE "User" ADD COLUMN     "genderId" TEXT;

-- CreateTable
CREATE TABLE "Genders" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Genders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Genders_name_key" ON "Genders"("name");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_genderId_fkey" FOREIGN KEY ("genderId") REFERENCES "Genders"("id") ON DELETE SET NULL ON UPDATE CASCADE;
