import { wait } from '@/lib/posts'

const Pageviews = async ({ slug }) => {
  // fetch page view count from db
  await wait(3000)

  return <div className='text-sm'>100 views</div>
}

export default Pageviews
