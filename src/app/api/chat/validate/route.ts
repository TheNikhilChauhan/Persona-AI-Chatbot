import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

export async function POST(req: NextRequest) {
  //test api
  try {
    const { apiKey } = await req.json();

    if (!apiKey || typeof apiKey !== "string") {
      return NextResponse.json(
        { error: "API key is required" },
        { status: 400 }
      );
    }
    const client = new OpenAI({
      apiKey: process.env.Gemini_API,
    });

    try {
      //validate the key
      await client.models.list();

      return NextResponse.json({
        valid: true,
        message: "Api key is valid",
      });
    } catch (error: unknown) {
      console.error("API key validation error: ", error);

      const apiError = error as { status?: number };

      if (apiError.status === 401) {
        return NextResponse.json({ error: "Invalid API key" }, { status: 401 });
      }

      return NextResponse.json(
        { error: "Failed to validate API key." },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(`Validation endpoint error: ${error}`);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
