import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Since we are using a custom domain (openclawtechnology.com) at the root, 
  // we don't need a basePath. If it were at username.github.io/repo-name, 
  // we would need basePath: '/ai-review-v2'.
};

export default nextConfig;
