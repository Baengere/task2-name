import { NextResponse } from 'next/server'
import prisma  from '@/lib/prisma'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export async function DELETE(req, { params }) {
  try {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const id = params.id
    const task = await prisma.task.findUnique({ where: { id }, include: { creator: true } })
    if (!task) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    if (task.creator.kindeId !== user.id) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    await prisma.task.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
