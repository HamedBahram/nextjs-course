import NextAuth from 'next-auth/next'
import { authOptions } from '../_options'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
