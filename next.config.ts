import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Disables image optimization for static exports
  },
};

export default nextConfig;