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
          {
            protocol: 'https',
            hostname: 'randomuser.me',
            port: '',
            pathname: '/**',
          },
          {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
