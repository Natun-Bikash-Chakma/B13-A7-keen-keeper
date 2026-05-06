/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // যদি প্রোডাকশন (Build) হয় তবেই basePath ব্যবহার করবে
  basePath: isProd ? '/B13-A7-keen-keeper' : '', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
