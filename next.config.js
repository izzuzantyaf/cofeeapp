/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'chart.googleapis.com',
        port: '',
        pathname: '/chart**',
      },
      {
        protocol: 'https',
        hostname: 'soal.staging.id',
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
