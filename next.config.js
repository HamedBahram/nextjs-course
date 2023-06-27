/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  images: {
    domains: ['res.cloudinary.com']
    // loader: 'custom',
  }
}

module.exports = nextConfig
