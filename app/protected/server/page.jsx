import { auth } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs'

export default async function Page() {
  const { userId } = auth()
  const user = await currentUser()

  if (!user) {
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
          This is a <span className='text-emerald-500'>server rendered</span>{' '}
          page
        </h1>
        <h2 className='mt-4 font-medium'>You are logged in as:</h2>
        <p className='mt-4'>{user?.firstName}</p>
      </div>
    </section>
  )
}
