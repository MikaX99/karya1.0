import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === "true" || Boolean(process.env.GITHUB_ACTIONS);

let repo = "";
if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "karya1.0";
  repo = `/${repoName}`;
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: repo,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: repo,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
