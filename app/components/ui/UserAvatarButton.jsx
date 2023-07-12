'use client'

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

const UserAvatarButton = () => {
  const pathname = usePathname()

  return (
    <>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton mode='modal' redirectUrl={pathname} />
      </SignedOut>
    </>
  )
}

export default UserAvatarButton
