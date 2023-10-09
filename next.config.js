/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.dummyapi.io',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
