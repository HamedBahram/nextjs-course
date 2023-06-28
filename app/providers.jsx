'use client'

import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'

const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute='class'>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  )
}

export default Providers
