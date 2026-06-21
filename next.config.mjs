/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  basePath: '/B13-A7-keen-keeper',
  trailingSlash: true, // এই লাইনটি ৪MD বা পাথ মিস হওয়া সমস্যার সমাধান করবে
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
