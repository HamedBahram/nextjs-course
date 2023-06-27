import Image from 'next/image'
import { Suspense } from 'react'

import Pageviews from '@/app/components/Pageviews'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

import beach from '@/public/images/beach-boat.jpg'
import BlogHeaderImage from '@/app/components/BlogHeaderImage'

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map(post => ({ slug: post.slug }))
}

const Page = async ({ params }) => {
  const { slug } = params

  const { content, frontmatter } = await getPostBySlug(slug)

  return (
    <section className='py-24'>
      <div className='container'>
        {/* Local image */}
        <Image src={beach} alt='beach' className='h-96 rounded object-cover' />

        {/* Remote image */}
        {/* <BlogHeaderImage /> */}

        {/* Post frontmatter */}
        <header className='mt-4 flex flex-col items-start justify-between sm:flex-row'>
          <div>
            <h1 className='font-serif text-3xl'>{frontmatter.title}</h1>
            <p className='text-sm font-light uppercase leading-snug tracking-wide text-gray-500'>
              {frontmatter.author}
            </p>
          </div>

          <Suspense fallback={<div>Loading view count...</div>}>
            <Pageviews slug={slug} />
          </Suspense>
        </header>

        {/* Post content */}
        <main className='prose mt-12'>{content}</main>
      </div>
    </section>
  )
}

export default Page
