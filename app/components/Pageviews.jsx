import { wait } from '@/lib/posts'

const Pageviews = async ({ slug }) => {
  // fetch page view count from db
  await wait(3000)

  return <div>Views: 100</div>
}

export default Pageviews
