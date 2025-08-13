import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";
import { headers } from "next/headers";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";


export async function POST(req: NextRequest) {
  console.log("niefo")
  const secret = process.env.SIGNING_SECRET;
  if (!secret) return new Response("Missing secret", { status: 500 });

  const wh = new Webhook(secret);
  const body = await req.text();
  const headerPayload = {
  "svix-id": req.headers.get("svix-id") ?? "",
  "svix-timestamp": req.headers.get("svix-timestamp") ?? "",
  "svix-signature": req.headers.get("svix-signature") ?? "",
};
console.log(wh)
let event: WebhookEvent;
try {
  event = wh.verify(body, headerPayload) as WebhookEvent;
} catch (err) {
  console.error("❌ Webhook verification failed:", err);
  return new Response("Invalid signature", { status: 400 });
}
console.log(event)


  if (event.type === "user.created") {
    const { id, email_addresses,username } = event.data;
    await prisma.user.upsert({
      where: { clerkId: id },
      update: {},
      create: {
        clerkId: id,
        email: email_addresses[0].email_address,
        name: username ?? ""
      },
    });
  }

  return new Response("OK");
}


