/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // এটি আপনার প্রোজেক্টকে স্ট্যাটিক HTML-এ রূপান্তর করবে
  basePath: '/B13-A7-keen-keeper', // আপনার GitHub রেপোজিটরির নাম
  images: {
    unoptimized: true, // স্ট্যাটিক এক্সপোর্টের জন্য ইমেজ অপ্টিমাইজেশন বন্ধ করতে হবে
  },
};

export default nextConfig;
