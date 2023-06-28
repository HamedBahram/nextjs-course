import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'

import { MongoDBAdapter } from '@auth/mongodb-adapter'

import clientPromise from '@/lib/mongo/client'

export const authOptions = {
  providers: [
    EmailProvider({
      server: {
        host: process.env.MAIL_SERVER_HOST,
        port: process.env.MAIL_SERVER_PORT,
        auth: {
          user: process.env.MAIL_SERVER_USER,
          pass: process.env.MAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  pages: {
    signIn: '/signin'
  },
  adapter: MongoDBAdapter(clientPromise)
}
