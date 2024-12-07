import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000", // اگر پروژه روی پورتی دیگر است، آن را تغییر دهید
        pathname: "/api/get-images/**",
      },
    ],
  },
};

export default nextConfig;
