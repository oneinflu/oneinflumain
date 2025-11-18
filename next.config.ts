import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export to generate the `out/` folder
  output: "export",
  // Using Next Image in a static export requires disabling optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
