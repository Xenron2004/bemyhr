/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
  
  eslint: {
    ignoreDuringBuilds: true,
  },
images: {
    domains: ['images.pexels.com'],
  },

images: {
    unoptimized: true, // Disables the Image Optimization API for static sites
  },

};

export default nextConfig;
