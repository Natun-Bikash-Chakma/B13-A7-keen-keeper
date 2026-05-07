/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/B13-A7-keen-keeper' : '',
  assetPrefix: isProd ? '/B13-A7-keen-keeper/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
