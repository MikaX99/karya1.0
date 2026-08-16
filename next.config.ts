import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const basePath = isGithubActions ? "/karya1.0" : (process.env.BASE_PATH || "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error"] } : false,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  // NOTE: headers() tidak bekerja dengan output:"export" (GitHub Pages).
  // Security headers sudah diterapkan via <meta> tags di src/app/layout.tsx.
  // Jika pindah ke Vercel/Netlify, tambahkan kembali headers() di sini.
};

export default nextConfig;

