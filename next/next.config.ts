import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// next.config.js
module.exports = {
  allowedDevOrigins: [process.env.NEXT_PUBLIC_LOCAL_WIN_IP],
}