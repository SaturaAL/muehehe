import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "i.pinimg.com" },
      { hostname: "res.cloudinary.com" },
      { hostname: "2t1spqwz9htcwxf3.public.blob.vercel-storage.com" },
    ],
  },
  allowedDevOrigins: ["192.168.100.4"],
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
      allowedOrigins: ["localhost:3000", "192.168.100.4:3000"],
    },
  },
};

export default nextConfig;