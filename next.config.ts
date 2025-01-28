iimport type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for modern routing
  experimental: {
    appDir: true, // Enables the /src/app directory routing if using the App Router
  },
  // Recommended optimizations
  reactStrictMode: true,
  swcMinify: true,
  // Static export option if needed
  output: process.env.EXPORT_STATIC ? "export" : undefined,
  // Optionally configure the base path or asset prefix
  basePath: "",
  trailingSlash: true,
};

export default nextConfig;
