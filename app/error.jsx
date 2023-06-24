'use client'

import { useEffect } from 'react'

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <section className='py-24'>
      <div className='container'>
        <h2 className='text-sm text-red-400'>
          Something went wrong! (from app)
        </h2>
        {/* <button onClick={() => reset()}>Try again</button> */}
      </div>
    </section>
  )
}

export default Error
