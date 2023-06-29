import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'

import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import Providers from './providers'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { Playfair_Display } from 'next/font/google'
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair'
})

export const metadata = {
  title: 'Hamed Bahram Portfolio',
  description: 'Created using NextJs 13'
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={`${inter.className} ${playfairDisplay.variable}`}>
          <Providers>
            <Header />
            <main>{children}</main>
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
