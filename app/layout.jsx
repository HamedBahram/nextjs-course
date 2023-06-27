import './globals.css'

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

// Multiple size or styles
// import { Roboto } from 'next/font/google'
// const roboto = Roboto({
//   weight: ['400', '700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
//   display: 'swap'
// })

// Font files can be colocated inside of `app`
// import LocalFont from 'next/font/local'
// const localFont = LocalFont({
//   src: './my-font.woff2',
//   display: 'swap'
// })

export const metadata = {
  title: 'Hamed Bahram Portfolio',
  description: 'Created using NextJs 13'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} ${playfairDisplay.variable}`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
