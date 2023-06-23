import { getGuestbookEntries } from '@/lib/mongo/guestbook'
import GuestbookEntryForm from '@/components/ui/GuestbookEntryForm'

// export const dynamic = 'force-dynamic'

async function getData() {
  const { entries, error } = await getGuestbookEntries()

  if (!entries || error) {
    throw new Error('Failed to fetch entries.')
  }

  return entries
}

async function getMetadata() {
  const { entries, error } = await getGuestbookEntries()
}

const Page = async () => {
  const entries = await getData()
  const metadata = await getMetadata()

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='mb-8 text-3xl font-bold'>Guestbook</h1>

        <GuestbookEntryForm />

        <ul className='mt-8 flex flex-col gap-y-2'>
          {entries.map(e => (
            <li key={e._id} className='flex gap-x-3'>
              <span className='text-gray-500'>{e.name}:</span>
              <span>{e.message}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Page
