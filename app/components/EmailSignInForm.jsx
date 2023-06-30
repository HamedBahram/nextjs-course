'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { EmailLoginFormData } from '@/lib/schema'

const EmailSignInForm = ({ callbackUrl }) => {
  const [validationError, setValidationError] = useState(null)

  const handleSubmit = event => {
    event.preventDefault()

    // Reset errors
    setValidationError(null)

    // Get form data
    const form = event.currentTarget
    const formData = new FormData(form)
    const { email } = Object.fromEntries(formData)

    // Validate form data
    const { error: zodError } = EmailLoginFormData.safeParse({ email })
    if (zodError) {
      setValidationError(zodError.format())
      return
    }

    // Send sign in email
    signIn('email', { email, callbackUrl })
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className='flex flex-col gap-y-2'>
        <label className='font-semibold'>Sign in with your email</label>
        <input
          id='email'
          name='email'
          type='email'
          autoComplete='email'
          placeholder='hello@me.com'
          className='rounded-lg border border-gray-400 bg-transparent px-3 py-2'
          required
        />
        {validationError && (
          <div className='mx-2 my-1 text-sm text-red-400'>
            {validationError.email._errors.join(', ')}
          </div>
        )}
      </div>
      <button
        type='submit'
        className='mt-3 inline-flex w-full justify-center rounded-lg border border-gray-400 px-3 py-2'
      >
        Continue with email
      </button>
    </form>
  )
}

export default EmailSignInForm
