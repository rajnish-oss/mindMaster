import { NextRequest,NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"

export  async function GET(req:NextRequest){
    const {userId} = await auth()

    if (!userId) {

  return new NextResponse('User ID is null', { status: 400 });
}

  const { searchParams } = new URL(req.url);
  const time = searchParams.get("time");

    const response = await prisma.entry.findMany({
        where : {
                userId : userId,
        }
    })

    return new NextResponse(JSON.stringify(response),{
        status:200
    })
}

export async function POST() {
    return new NextResponse('Hello, Next.js!')
}