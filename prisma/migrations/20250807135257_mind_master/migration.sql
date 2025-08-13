-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Entry" (
    "id" SERIAL NOT NULL,
    "totalScore" INTEGER NOT NULL,
    "emotionalRegulation" INTEGER NOT NULL,
    "cognitiveFunction" INTEGER NOT NULL,
    "scocialMatric" INTEGER NOT NULL,
    "psychologicalFlexibility" INTEGER NOT NULL,
    "journel" TEXT NOT NULL,

    CONSTRAINT "Entry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "public"."User"("clerkId");
