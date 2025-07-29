/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com", // YouTube's image CDN
        pathname: "/vi/**", // Allows all video thumbnails
      },
      {
        protocol: "https",
        hostname: "img.youtube.com", // Alternative domain
      },
    ],
  },
  // Other config options...
};

module.exports = nextConfig;