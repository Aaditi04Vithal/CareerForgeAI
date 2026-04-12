import type { NextConfig } from "next";

const nextConfig = {
  serverExternalPackages: ["@prisma/client", "prisma"],
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
};

export default nextConfig;
