'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

const buttonClasses =
  'rounded border px-2 py-1 text-sm text-gray-500 border-gray-500'

const SignInButton = () => {
  const { data: session } = useSession()

  return (
    <>
      {session ? (
        <button className={buttonClasses} onClick={() => signOut()}>
          Sign Out
        </button>
      ) : (
        <button className={buttonClasses} onClick={() => signIn()}>
          Sign In
        </button>
      )}
    </>
  )
}

export default SignInButton
