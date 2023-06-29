'use client'

import { useUser } from '@clerk/nextjs'

export default function Page() {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded || !isSignedIn) {
    return (
      <section className='py-24'>
        <div className='container'>Not logged In.</div>
      </section>
    )
  }

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-2xl font-bold'>
          This is a <span className='text-emerald-500'>client rendered</span>{' '}
          page
        </h1>
        <h2 className='mt-4 font-medium'>You are logged in as:</h2>
        <p className='mt-4'>{user?.firstName}</p>
      </div>
    </section>
  )
}
