/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}", // যদি app ডিরেক্টরি বাইরে থাকে
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],

    theme: {
        extend: {},
    },
    plugins: [],
};
