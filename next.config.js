/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    qualities: [75, 100],
  },
  // GitHub Pages serves from a subdirectory, so we need to handle asset paths
  basePath: process.env.NODE_ENV === 'production' ? '/Genesis' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Genesis' : '',
}

module.exports = nextConfig
