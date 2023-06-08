import React from 'react'

const AboutLayout = ({ children }) => {
  return (
    <section>
      <h1>About Layout</h1>
      <div className='mt-6'>{children}</div>
    </section>
  )
}

export default AboutLayout
