'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const ContactButton = () => {
  const router = useRouter()

  function handleClick() {
    router.push('/contact')
  }

  return <button onClick={handleClick}>Contact</button>
}

export default ContactButton
