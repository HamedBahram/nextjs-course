'use client'

const Error = ({ reset }) => {
  return (
    <section className='py-24'>
      <div className='container'>
        <h2 className='mb-4 text-red-400'>Something went wrong!</h2>
        <button
          className='rounded bg-black px-3 py-1 text-sm text-white disabled:opacity-50 dark:bg-white dark:text-black'
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </section>
  )
}

export default Error
