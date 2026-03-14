import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Separate build caches for dev/build to avoid cache clobbering.
  ...(process.env.NEXT_DIST_DIR ? { distDir: process.env.NEXT_DIST_DIR } : {}),
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(process.cwd()),
};

export default nextConfig;
