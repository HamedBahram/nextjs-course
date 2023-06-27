'use client'

import Image from 'next/image'

const imageLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/dtijo8xha/image/upload/v1613144469/samples/landscapes/${src}`
}

const BlogHeaderImage = () => {
  return (
    <div className='relative h-96'>
      <Image
        fill
        alt='beach'
        src='/beach-boat.jpg'
        // width={800}
        // height={400}
        loader={imageLoader}
        className='rounded object-cover'
      />
    </div>
  )
}

export default BlogHeaderImage
