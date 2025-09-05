import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/background-video.mp4',
        destination: '/background-video.mp4',
        locale: false,
      },
    ]
  },
};

export default nextConfig;
