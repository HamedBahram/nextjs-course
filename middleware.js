import { NextResponse } from 'next/server'

export function middleware(request) {
  // parsed nextUrl object
  // const { pathname, searchParams } = request.nextUrl
  // console.log({ pathname, sort: searchParams.get('sort') })
  // return NextResponse.next()

  // redirecting
  // return NextResponse.rewrite(new URL('/team', request.url))

  // reading request cookies
  // const allCookies = request.cookies.getAll()

  // setting response cookies
  // const response = NextResponse.next()
  // response.cookies.set({
  //   name: 'next',
  //   value: 'fast',
  //   path: '/'
  // })
  // return response

  // responding with json
  return NextResponse.json({ message: `Hello from middleware` })
}

export const config = {
  matcher: '/api/test'
}
