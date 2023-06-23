'use client'

import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'

const GuestbookEntryForm = () => {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)
  const isMutating = isFetching || isPending

  const handleSubmit = async event => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const { name, message } = Object.fromEntries(formData)

    if (!name || !message) return

    setIsFetching(true)

    const { error } = await fetch('/api/guestbook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, message })
    })

    console.log(error)

    form.reset()
    setIsFetching(false)
    startTransition(() => {
      router.refresh()
    })
  }

  return (
    <form
      className='flex max-w-sm flex-col gap-y-3 text-sm'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        name='name'
        placeholder='Your name'
        className='rounded border bg-transparent px-3 py-1 dark:border-gray-600'
      />
      <input
        type='text'
        name='message'
        placeholder='Your message...'
        className='rounded border bg-transparent px-3 py-1 dark:border-gray-600'
      />
      <button
        type='submit'
        disabled={isMutating}
        className='rounded bg-black px-3 py-1 text-white disabled:opacity-50 dark:bg-white dark:text-black'
      >
        Add
      </button>
    </form>
  )
}

export default GuestbookEntryForm
