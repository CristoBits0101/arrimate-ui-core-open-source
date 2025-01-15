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
      },
      {
        protocol: 'https',
        port: '',
        hostname: 'res.cloudinary.com',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

export default withNextIntl(nextConfig)
