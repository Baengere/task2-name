"use server"
import { NextResponse } from 'next/server'
import {prisma}  from '@/lib/prisma'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export async function GET() {
  const tasks = await prisma.task.findMany({ include: { creator: true }, orderBy: { createdAt: 'desc' } })
  return NextResponse.json(tasks)
}

export async function POST(req) {
  try {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await req.json()
    const { title, description } = body

    // ✅ Define base URL (fix)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL 
      || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

    // ✅ Call AI insight route
    const aiRes = await fetch(`${baseUrl}/api/ai-insight`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    })
    const aiData = aiRes.ok ? await aiRes.json() : {}

    // ✅ Create task in Prisma
    const task = await prisma.task.create({
      data: {
        title,
        description,
        category: aiData.category || null,
        difficulty: aiData.difficulty || null,
        estimatedPrice: aiData.estimatedPrice || null,
        creator: {
          connectOrCreate: {
            where: { kindeId: user.id },
            create: {
              kindeId: user.id,
              name: user.given_name || null,
              email: user.email || null,
              avatar: user.picture || null,
            },
          },
        },
      },
      include: { creator: true },
    })

    return NextResponse.json(task, { status: 201 })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}

