'use client'

import { signIn } from 'next-auth/react'

const EmailSignInForm = () => {
  const handleSubmit = event => {
    event.preventDefault()

    // Get form data
    const form = event.currentTarget
    const formData = new FormData(form)
    const { email } = Object.fromEntries(formData)

    // TODO: Validate form data

    // Send sign in email
    signIn('email', { email })
  }

  return (
    <form onSubmit={handleSubmit}>
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
