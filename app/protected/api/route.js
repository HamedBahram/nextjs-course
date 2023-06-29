import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const data = auth()
  return NextResponse.json({ data })
}
