/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: ['media.rawg.io', process.env.API_DOMAIN],
  },
}

module.exports = nextConfig
