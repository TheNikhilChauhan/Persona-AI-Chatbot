import OpenAI from "openai";
import { hiteshPersona, piyushPersona } from "@/app/persona/persona";
import { NextRequest, NextResponse } from "next/server";
import { Persona } from "@/types";

const personas: Record<string, Persona> = {
  "hitesh-choudhary": hiteshPersona,
  "piyush-garg": piyushPersona,
};

export async function POST(req: NextRequest) {
  try {
    const { messages, userApiKey, personaId } = await req.json();

    //persona's

    const selectedPersona = personas[personaId];

    if (!selectedPersona) {
      return NextResponse.json({ error: "Persona not found" }, { status: 404 });
    }

    const systemPrompt = selectedPersona.systemPrompt || "";

    const client = new OpenAI({
      apiKey: userApiKey || process.env.Gemini_API,
      baseURL: process.env.Gemini_baseUrl || "https://api.openai.com/v1",
    });

    //prepare messages with sys prompt
    const chatMessages = [
      { role: "system" as const, content: systemPrompt },
      ...messages,
    ];

    const response = await client.chat.completions.create({
      model: process.env.Gemini_model || "gpt-4o-mini",
      messages: chatMessages,
      max_tokens: 500,
    });

    const content = response.choices[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        {
          error: "No response genereated",
        },
        { status: 500 }
      );
    }
    return NextResponse.json({
      message: content,
    });
  } catch (error) {
    console.error("Chat API error", error);
    return NextResponse.json(
      { error: "Internal server Error" },
      { status: 500 }
    );
  }
}
