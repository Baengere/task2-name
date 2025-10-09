import OpenAI from 'openai'
import { NextResponse } from 'next/server'

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function POST(req) {
  try {
    const { title, description } = await req.json()

    const prompt = `Analyze this task: "${title}" - ${description}. Respond as JSON with keys: category, difficulty (Easy/Medium/Expert), estimatedPrice (number).`

    const res = await client.responses.create({
      model: 'gpt-4.1-mini',
      input: prompt,
    })

    const text = res.output_text || (res.output && res.output[0] && res.output[0].content && res.output[0].content[0] && res.output[0].content[0].text) || ''
    try {
      const parsed = JSON.parse(text)
      return NextResponse.json(parsed)
    } catch (err) {
      return NextResponse.json({ category: 'General', difficulty: 'Medium', estimatedPrice: 20 })
    }
  } catch (err) {
    console.error(err)
    return NextResponse.json({ category: 'General', difficulty: 'Medium', estimatedPrice: 20 }, { status: 500 })
  }
}
