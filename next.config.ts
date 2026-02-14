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
      {
        protocol: 'https',
        hostname: 'www.amiinu.com',
      },
      {
        protocol: 'https',
        hostname: 'betainos-cms.s3.eu-north-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'www.arvai.app',
      },
      {
        protocol: 'https',
        hostname: 'alno.ai',
      },
    ],
  },
};

export default nextConfig;
