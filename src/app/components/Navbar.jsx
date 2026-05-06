"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Clock, BarChart3 } from 'lucide-react';

const Navbar = () => {
    const pathname = usePathname();

    // স্টাইল ফাংশন: একটিভ পেজ অনুযায়ী ক্লাস পরিবর্তন করবে
    const getNavLinkClass = (path) => {
        const isActive = pathname === path;
        const baseClass = "flex items-center space-x-2 px-4 py-2 rounded-md transition duration-300 font-medium";
        return isActive
            ? `${baseClass} bg-[#1B4332] text-white`
            : `${baseClass} text-gray-500 hover:text-gray-800 hover:bg-gray-50`;
    };

    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100">
            {/* Logo Section */}
            <div className="flex items-center">
                <Link href="/" className="text-xl font-bold text-[#0F3D2E]">
                    KeenKeeper
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center space-x-4">

                {/* Home Link: শুধুমাত্র হোম পেজে থাকলে দেখাবে */}
                {pathname === '/' && (
                    <Link href="/" className={getNavLinkClass('/')}>
                        <Home size={18} />
                        <span>Home</span>
                    </Link>
                )}

                {/* Timeline Link */}
                <Link href="/timeline" className={getNavLinkClass('/timeline')}>
                    <Clock size={18} />
                    <span>Timeline</span>
                </Link>

                {/* Stats Link */}
                <Link href="/stats" className={getNavLinkClass('/stats')}>
                    <BarChart3 size={18} />
                    <span>Stats</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
