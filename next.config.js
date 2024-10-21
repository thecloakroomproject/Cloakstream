/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'media.kitsu.io',
        port: '',
        pathname: '/**',
        protocol: 'https',
      },
      {
        hostname: 'media.kitsu.app',
        port: '',
        pathname: '/**',
        protocol: 'https',
      },
      {
        protocol: "https",
        hostname: "asianimg.pro",
        pathname: "/cover/**",
      },
      {
        protocol: "https",
        hostname: "www.pngall.com",
      },
      {
        protocol: "https",
        hostname: "gogocdn.net",
      },
      {
        protocol: "https",
        hostname: "asianimg.pro",
      },
      {
        protocol: "https",
        hostname: "s4.anilist.co",
      },
      {
        protocol: "https",
        hostname: "uploads.mangadex.org",
      },
      {
        protocol: "https",
        hostname: `${process.env.GOOD_PROXY_URL.replace('https://', '')}`,
      },
      {
        protocol: "https",
        hostname: "image.tmdb.org",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
  },
  env: {
    GOOD_PROXY_URL: process.env.GOOD_PROXY_URL,
  },

};

module.exports = nextConfig;
