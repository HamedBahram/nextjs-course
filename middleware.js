import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/((?!protected).*)']
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api)(.*)']
}
