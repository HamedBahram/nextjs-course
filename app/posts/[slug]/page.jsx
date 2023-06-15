import { Suspense } from 'react'

import { getAllPosts, getPostBySlug } from '@/lib/posts'
import Pageviews from '@/app/components/Pageviews'

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
        {/* Post frontmatter */}
        <header className='rounded bg-gray-100 dark:bg-gray-800 p-8'>
          <h1 className='font-serif text-3xl'>{frontmatter.title}</h1>
          <p className='mb-6 text-sm font-light uppercase leading-snug tracking-wide text-gray-500'>
            {frontmatter.author}
          </p>

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
