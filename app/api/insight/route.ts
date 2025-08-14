import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { GoogleGenAI, Type } from "@google/genai";
import { auth } from "@clerk/nextjs/server";

const ai = new GoogleGenAI({});

export async function GET(req: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("User ID is null", { status: 400 });
  }

  const Entry = await prisma.entry.findMany({
    where: {
      userId: userId ?? "",
    },
  });



  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `
Use the last 10 entries from the user's mental health logs, each entry having:
- totalScore: Int
- emotionalRegulation: Int
- cognitiveFunction: Int
- scocialMatric: Int
- psychologicalFlexibility: Int
- journel: String

From this data, analyze patterns and generate the following:

  ${Entry}

1. On good days (high totalScore), describe what the user did well using journel entries.
2. On bad days (low totalScore), describe what the user struggled with using journel entries.
3. Give a personalized and genuine suggestion for emotional or cognitive improvement — not generic advice, and based on recent trends.

Be specific and psychologically insightful.Dont give advice if 10 entries are not present or they are irrelevant and tell user to correct this
  `,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            onGoodDays: {
              type: Type.ARRAY, // ✅ now array
              items: { type: Type.STRING }, // ✅ array elements are strings
            },
            onBadDays: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            suggestion: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
          },
          propertyOrdering: ["onGoodDays", "onBadDays", "suggestion"],
        },
      },
    },
  });

  //@ts-ignore
  return  NextResponse.json(JSON.parse( response!.candidates[0]!.content!.parts[0]!.text), { status: 200 });
}
