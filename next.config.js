/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      // "miro.medium.com",        // modern Medium CDN
      // 'cdn-images-1.medium.com' // legacy Medium CDN
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // or 'miro.medium.com' for Medium images
      },
    ],
  },
};

module.exports = nextConfig;
