'use client'

import { addEntry } from '@/app/_actions'
import { useRef, useState } from 'react'

const GuestbookEntryForm = () => {
  const formRef = useRef(null)
  const [validationError, setValidationError] = useState(null)

  // client action calling a server action
  async function action(data) {
    const result = await addEntry(data)
    if (result?.error) {
      setValidationError(result?.error)
    } else {
      formRef.current.reset()
      setValidationError(null)
    }
  }

  return (
    <form
      ref={formRef}
      className='flex max-w-sm flex-col gap-y-3 text-sm'
      action={action}
    >
      <input
        type='text'
        name='name'
        placeholder='Your name'
        className='rounded border bg-transparent px-3 py-1 dark:border-gray-600'
      />
      {validationError?.name && (
        <p className='text-sm text-red-400'>
          {validationError.name._errors.join(', ')}
        </p>
      )}
      <input
        type='text'
        name='message'
        placeholder='Your message...'
        className='rounded border bg-transparent px-3 py-1 dark:border-gray-600'
      />
      {validationError?.message && (
        <p className='text-sm text-red-400'>
          {validationError.message._errors.join(', ')}
        </p>
      )}
      <button
        type='submit'
        className='rounded bg-black px-3 py-1 text-white disabled:opacity-50 dark:bg-white dark:text-black'
      >
        Add
      </button>
    </form>
  )
}

export default GuestbookEntryForm
