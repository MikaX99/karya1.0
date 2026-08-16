import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = "";
if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "karya1.0";
  repo = `/${repoName}`;
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: repo,
  assetPrefix: repo ? `${repo}/` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
