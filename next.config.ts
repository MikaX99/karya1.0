import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/karya1.0",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
