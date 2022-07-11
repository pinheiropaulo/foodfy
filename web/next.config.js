/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['rocketseat-cdn.s3-sa-east-1.amazonaws.com'],
  },
};

module.exports = nextConfig;
