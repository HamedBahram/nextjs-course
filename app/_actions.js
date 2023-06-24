'use server'

import { revalidatePath } from 'next/cache'
import { GuestEntrySchema } from '@/lib/schema'
import { createGuestbookEntry } from '@/lib/mongo/guestbook'

export async function addEntry(data) {
  const { name, message } = Object.fromEntries(data)

  // if (!name || !message) throw new Error('Invalid data.')
  // GuestEntrySchema.parse({ name, message })
  const { error: zodError } = GuestEntrySchema.safeParse({ name, message })

  if (zodError) {
    return { error: zodError.format() }
  }

  const { error } = await createGuestbookEntry({ name, message })
  if (error) throw new Error(error)

  revalidatePath('/guestbook')
}
