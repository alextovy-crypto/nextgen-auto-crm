import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { contacts } from "@/db/schema";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

export async function POST(request: NextRequest) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON" },
      { status: 400, headers: CORS_HEADERS }
    );
  }

  const { name, email, phone, source, status, notes } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: "name and email are required" },
      { status: 400, headers: CORS_HEADERS }
    );
  }

  try {
    const now = new Date();
    const contact = db
      .insert(contacts)
      .values({
        name,
        email,
        phone: phone || null,
        source: source || "otro",
        temperature: status || "cold",
        score: 0,
        notes: notes || null,
        createdAt: now,
        updatedAt: now,
      })
      .returning()
      .get();

    return NextResponse.json(contact, { status: 201, headers: CORS_HEADERS });
  } catch (error) {
    return NextResponse.json(
      {
        error: `Failed to create contact: ${
          error instanceof Error ? error.message : "Unknown"
        }`,
      },
      { status: 500, headers: CORS_HEADERS }
    );
  }
}
