import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { userId } = await auth();

  const { totalScore, erScore, cfScore, smScore, pfScore } = body;

  if (!totalScore || !erScore || !cfScore || !smScore || !pfScore) {
    return new NextResponse("Missing body", { status: 400 });
  }

  if (!userId) {
    return new NextResponse("User ID is null", { status: 400 });
  }

  await prisma.entry.upsert({
    where: {
      userId_createdAt: {
        userId: userId,
        createdAt: new Date().toISOString().split("T")[0],
      },
    },
    create: {
      userId: userId,
      totalScore,
      emotionalRegulation: erScore,
      cognitiveFunction: cfScore,
      scoialMatric: smScore,
      psychologicalFlexibility: pfScore,
      journel: '"<h1 style=\"text-align: center;\">Start your daily journal</h1><p></p>"',
      createdAt: new Date().toISOString().split("T")[0],
    },
    update: {
      totalScore,
      emotionalRegulation: erScore,
      cognitiveFunction: cfScore,
      scoialMatric: smScore,
      psychologicalFlexibility: pfScore,
    },
  });

  return NextResponse.json({ message: "checks created successfully" });
}

export async function GET(req: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("User ID is null", { status: 400 });
  }

  const { searchParams } = new URL(req.url);
  const time = searchParams.get("time");

  const response = await prisma.entry.findFirst({
    where: {
      userId,
      createdAt: time ?? "",
    },
  });

  if (!response) {
    return new NextResponse("No entry found", { status: 400 });
  }

  return NextResponse.json(response);
}
