import { cache } from 'react'
import clientPromise from '@/lib/mongo/client'

let client
let db
let guestbook

async function init() {
  if (db) return
  try {
    client = await clientPromise
    db = await client.db()
    guestbook = await db.collection('guestbook')
  } catch (error) {
    throw new Error('Failed to connect to the database.')
  }
}

;(async () => {
  await init()
})()

/////////////////
/// Guestbook ///
////////////////

export const getGuestbookEntries = cache(async () => {
  try {
    if (!guestbook) await init()

    const entries = await guestbook
      .find({})
      .map(entry => ({ ...entry, _id: entry._id.toString() }))
      .toArray()
    return { entries }
  } catch (error) {
    return { error: 'Failed to fetch guestbook!' }
  }
})

export const createGuestbookEntry = async ({ name, message }) => {
  try {
    if (!guestbook) await init()

    return await guestbook.insertOne({ name, message, updatedAt: new Date() })
  } catch (error) {
    return { error: 'Failed to create entry!' }
  }
}
