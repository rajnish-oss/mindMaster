/*
  Warnings:

  - You are about to drop the column `scocialMatric` on the `Entry` table. All the data in the column will be lost.
  - Added the required column `scoialMatric` to the `Entry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Entry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Entry" DROP COLUMN "scocialMatric",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "scoialMatric" INTEGER NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Entry" ADD CONSTRAINT "Entry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;
