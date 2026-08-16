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
  // Security headers — aktif saat hosting dengan Node.js server (Vercel/Netlify)
  // GitHub Pages pakai meta-tag fallback di layout.tsx
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",       value: "nosniff" },
          { key: "X-Frame-Options",               value: "DENY" },
          { key: "X-XSS-Protection",              value: "1; mode=block" },
          { key: "Referrer-Policy",               value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",            value: "geolocation=(), microphone=(), camera=(), payment=()" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self'",
              "frame-src https://www.google.com https://maps.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;

