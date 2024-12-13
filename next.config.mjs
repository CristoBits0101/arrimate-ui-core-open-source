import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'real-time-amazon-data.p.rapidapi.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        port: '',
        hostname: 'm.media-amazon.com',
        pathname: '/**'
      }
    ]
  }
}

export default withNextIntl(nextConfig)
