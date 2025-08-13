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
      totalScore: body.totalScore,
      emotionalRegulation: body.erScore,
      cognitiveFunction: body.cfScore,
      scoialMatric: body.smScore,
      psychologicalFlexibility: body.pfScore,
      journel: "No journel",
      createdAt: new Date().toISOString().split("T")[0], // createdAt
    },
    update: {
      totalScore: body.totalScore,
      emotionalRegulation: body.erScore,
      cognitiveFunction: body.cfScore,
      scoialMatric: body.smScore,
      psychologicalFlexibility: body.pfScore,
    },
  });

  return new NextResponse(
    JSON.stringify({ message: "checks created successfully" }),
    {
      status: 200,
    }
  );
}

export async function GET(req:NextRequest,res:NextResponse){
    const {userId} = await auth()

    if (!userId) {

  return new NextResponse('User ID is null', { status: 400 });
}

  const { searchParams } = new URL(req.url);
  const time = searchParams.get("time");

    const response = await prisma.entry.findFirst({
        where : {
                userId : userId,
                createdAt : time ?? ""
        }
    })

    if(!response){
        return new NextResponse('No entry found', { status: 400 });
    }

    return  NextResponse.json(JSON.stringify(response),{
        status:200
    })
}