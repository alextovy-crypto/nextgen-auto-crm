import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { contacts } from "@/db/schema";

const CORS_HEADERS = {
  // TODO after launch: restrict to https://biztools.nextgenautomations.tech
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const VALID_TEMPERATURES = new Set(["cold", "warm", "hot"]);

function sanitize(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, 500) : null;
}

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

  const name = sanitize(body.name);
  const email = sanitize(body.email);

  if (!name || !email) {
    return NextResponse.json(
      { error: "name and email are required" },
      { status: 400, headers: CORS_HEADERS }
    );
  }

  const phone = sanitize(body.phone);
  const source = sanitize(body.source) ?? "web";
  const temperature = VALID_TEMPERATURES.has(body.status) ? body.status : "cold";
  const notes = sanitize(body.notes);

  try {
    const now = new Date();
    const contact = db
      .insert(contacts)
      .values({
        name,
        email,
        phone,
        source,
        temperature,
        score: 0,
        notes,
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
