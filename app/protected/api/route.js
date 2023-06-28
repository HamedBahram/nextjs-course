import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import {authOptions} from '@/app/api/auth/_options'

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ message: 'You are not logged in.' })
  }

  return NextResponse.json({ name: session.user.name })
}
