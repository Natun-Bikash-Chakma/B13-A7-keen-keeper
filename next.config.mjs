/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  
  /* 
    GitHub Pages-এ প্রজেক্টটি আপলোড (Deploy) করার সময় 
    নিচের ৩টি লাইনের শুরুর ডাবল স্ল্যাশ (//) কেটে দিয়ে অন করে দিবেন।
    লোকাল কম্পিউটারে রান করার সময় এগুলো বন্ধ রাখাই ভালো।
  */
  // output: 'export',
  // basePath: '/B13-A7-keen-keeper',
  // assetPrefix: '/B13-A7-keen-keeper',
};

export default nextConfig;
