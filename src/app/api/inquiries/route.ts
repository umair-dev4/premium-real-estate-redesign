import { NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const interest = String(body.interest ?? "General enquiry").trim();
  const message = String(body.message ?? "").trim();

  if (!name || name.length < 2) {
    return NextResponse.json(
      { ok: false, error: "Please tell us your name." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "A valid email address is required." },
      { status: 400 }
    );
  }
  if (message.length > 4000) {
    return NextResponse.json(
      { ok: false, error: "Message is too long." },
      { status: 400 }
    );
  }

  try {
    await db.insert(inquiries).values({
      name,
      email,
      phone: phone || null,
      interest,
      message: message || null,
    });
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (err) {
    console.error("Failed to save inquiry", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
