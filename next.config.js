/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.metmuseum.org'],
    // domains: ['museum-objects.json'],

  },
}

module.exports = nextConfig;
