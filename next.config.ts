import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to plain static files in `out/` so any static host can serve the site.
  output: "export",
  // Static hosts have no image-optimization server; images are served as-is.
  images: { unoptimized: true },
};

export default nextConfig;
