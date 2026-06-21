/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  basePath: '/B13-A7-keen-keeper',
  assetPrefix: '/B13-A7-keen-keeper/', // এই লাইনটি আপনার Tailwind CSS এর আসল পাথ নিশ্চিত করবে
  trailingSlash: true, 
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
