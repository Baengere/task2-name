import OpenAI from 'openai';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const { title, description } = await req.json();

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Missing OpenAI API key. Please set OPENAI_API_KEY in environment variables.' },
        { status: 500 }
      );
    }

    // 🧠 Create client *here*, at runtime
    const client = new OpenAI({ apiKey });

    const prompt = `Analyze this task: "${title}" - ${description}. Respond as JSON with keys: category, difficulty (Easy/Medium/Expert), estimatedPrice (number).`;

    const res = await client.responses.create({
      model: 'gpt-4.1-mini',
      input: prompt,
    });

    const text =
      res.output_text ||
      res.output?.[0]?.content?.[0]?.text ||
      '';

    try {
      const parsed = JSON.parse(text);
      return NextResponse.json(parsed);
    } catch {
      return NextResponse.json({
        category: 'General',
        difficulty: 'Medium',
        estimatedPrice: 20,
      });
    }
  } catch (err) {
    console.error('AI Insight API Error:', err);
    return NextResponse.json(
      {
        category: 'General',
        difficulty: 'Medium',
        estimatedPrice: 20,
        error: err.message,
      },
      { status: 500 }
    );
  }
}
