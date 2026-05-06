"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import Footer from '../components/Footer'; export default function Stats() {
    const [data, setData] = useState([]);
    const router = useRouter(); useEffect(() => {
        const entries = JSON.parse(localStorage.getItem('timelineEntries')) || []; const counts = entries.reduce((acc, entry) => {
            const typeStr = entry.type || 'Other';
            const type = typeStr.charAt(0).toUpperCase() + typeStr.slice(1);
            acc[type] = (acc[type] || 0) + 1;
            return acc;
        }, {}); const chartData = Object.keys(counts).map(key => ({
            name: key,
            value: counts[key]
        })); setData(chartData.length > 0 ? chartData : []);
    }, []); const COLORS = ['#8B5CF6', '#14532D', '#22C55E', '#CBD5E1'];  // পার্সেন্টেজ দেখানোর জন্য লেবেল ফাংশন
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN); return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" className="text-[10px] font-bold">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    }; return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <div className="max-w-5xl mx-auto p-6 md:p-12 flex-grow w-full">        <button
                onClick={() => router.back()}
                className="flex items-center gap-2 text-slate-500 mb-8 hover:text-slate-800 transition-all font-medium"
            >
                <ArrowLeft size={18} /> Back
            </button>        <h1 className="text-3xl font-bold text-slate-900 mb-8">Friendship Analytics</h1>        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500 mb-6">By Interaction Type</p>          <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Tooltip />
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={110}
                                    paddingAngle={5}
                                    dataKey="value"
                                    labelLine={false}
                                    label={renderCustomizedLabel} // 🔥 পার্সেন্টেজ লেবেল এখানে যুক্ত করা হয়েছে
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                                    ))}
                                </Pie>
                                <Legend
                                    verticalAlign="bottom"
                                    iconType="circle"
                                    formatter={(value) => <span className="text-xs font-bold text-slate-500">{value}</span>}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
