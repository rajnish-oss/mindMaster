import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { NextRequest, NextResponse } from "next/server"
import dayjs from "dayjs"

export  async function POST(req:NextRequest){
    const body = await req.json()
    const {userId} = await auth()


    if(!body || !userId){
        return new NextResponse('Missing body', {status: 400})
    }

    const data = await prisma.entry.upsert({
    where: {
      userId_createdAt: {
        userId: userId,
        createdAt: dayjs().format("YYYY-MM-DD"),
      },
    },
    create: {
      userId: userId,
      totalScore: 0,
      emotionalRegulation: 0,
      cognitiveFunction: 0,
      scoialMatric: 0,
      psychologicalFlexibility: 0,
      journel: body.body,
      createdAt: dayjs().format("YYYY-MM-DD"),
    },
    update: {
      journel: body.body,
    },
  })
    return new NextResponse(JSON.stringify({message:"journel created successfully"}),{
        status:200
    })
}

export async function GET(req:NextRequest) {
    return new NextResponse('Hello, Next.js!')
}