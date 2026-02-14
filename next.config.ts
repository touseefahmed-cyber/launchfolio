import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'images.iimg.live',
      },
    ],
  },
};

export default nextConfig;
