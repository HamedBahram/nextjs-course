import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

const Page = async () => {
  const posts = await getAllPosts()

  // console.log(posts)

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>All blog posts</h1>

        <ul className='mt-12 flex flex-col gap-4'>
          {posts.map(post => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <h4 className='text-lg font-medium'>
                  {post.frontmatter?.title}
                </h4>
                <p className='text-sm text-gray-500'>
                  {post.frontmatter?.author}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Page
