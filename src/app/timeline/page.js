"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Phone, MessageSquare, Video, ArrowLeft, Clock, Filter, Search, ArrowUpDown } from 'lucide-react';
import Footer from '../components/Footer';

export default function Timeline() {
    const [entries, setEntries] = useState([]);
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState(''); // 🔥 Search state
    const [sortOrder, setSortOrder] = useState('newest'); // 🔥 Sort state
    const router = useRouter();

    useEffect(() => {
        const loadData = () => {
            const saved = JSON.parse(localStorage.getItem('timelineEntries')) || [];
            setEntries(saved);
        };

        loadData();
        window.addEventListener('focus', loadData);
        return () => window.removeEventListener('focus', loadData);
    }, []);

    // 🔥 Search, Filter, and Sort Logic
    const processedEntries = entries
        .filter(entry => {
            const matchesFilter = filter === 'all' ? true : entry.type === filter;
            const matchesSearch = entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                entry.type.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesFilter && matchesSearch;
        })
        .sort((a, b) => {
            return sortOrder === 'newest' ? b.id - a.id : a.id - b.id;
        });

    const getIcon = (type) => {
        const iconClass = "w-5 h-5 text-slate-600";
        if (type === 'call') return <Phone className={iconClass} />;
        if (type === 'text') return <MessageSquare className={iconClass} />;
        if (type === 'video') return <Video className={iconClass} />;
        return <Clock className={iconClass} />;
    };

    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <div className="max-w-4xl mx-auto p-6 md:p-12 grow w-full">

                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-slate-500 mb-8 hover:text-slate-800 transition-all font-medium"
                >
                    <ArrowLeft size={18} /> Back
                </button>

                <h1 className="text-3xl font-bold text-slate-900 mb-8">Timeline</h1>

                {/* 🔥 Search & Controls Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

                    {/* Search Input */}
                    <div className="relative col-span-1 md:col-span-1">
                        <input
                            type="text"
                            placeholder="Search by name or type..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
                        />
                        <Search className="absolute left-3 top-2.5 text-slate-400" size={16} />
                    </div>

                    {/* Filter Dropdown */}
                    <div className="relative">
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="w-full appearance-none bg-white border border-slate-200 text-slate-600 py-2 pl-10 pr-4 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer text-sm shadow-sm"
                        >
                            <option value="all">All Types</option>
                            <option value="call">Calls</option>
                            <option value="text">Texts</option>
                            <option value="video">Videos</option>
                        </select>
                        <Filter className="absolute left-3 top-2.5 text-slate-400" size={16} />
                    </div>

                    {/* Sort Dropdown */}
                    <div className="relative">
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                            className="w-full appearance-none bg-white border border-slate-200 text-slate-600 py-2 pl-10 pr-4 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer text-sm shadow-sm"
                        >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                        <ArrowUpDown className="absolute left-3 top-2.5 text-slate-400" size={16} />
                    </div>
                </div>

                <div className="space-y-3">
                    {processedEntries.length === 0 ? (
                        <div className="bg-white p-12 text-center rounded-xl border border-slate-100 shadow-sm">
                            <p className="text-slate-400 font-medium">No matches found for your search or filter.</p>
                        </div>
                    ) : (
                        processedEntries.map((item) => (
                            <div key={item.id} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-5 hover:shadow-md transition-all">
                                <div className="p-2 bg-slate-50 rounded-lg shrink-0">
                                    {getIcon(item.type)}
                                </div>
                                <div>
                                    <h3 className="text-slate-700 font-medium text-[15px]">{item.title}</h3>
                                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mt-0.5">
                                        {item.date} • {item.time || "N/A"}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
