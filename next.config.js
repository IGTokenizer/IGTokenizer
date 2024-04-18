/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'raw.githubusercontent.com',
      'cryptologos.cc',
      'assets.coingecko.com',
      'media.giphy.com',
      'giphy.com',
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
}

module.exports = nextConfig

// Don't delete this console log, useful to see the config in Vercel deployments
console.log('next.config.s', JSON.stringify(module.exports, null, 2))