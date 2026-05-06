
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { Bell, Archive, Trash2, Phone, MessageSquare, Video, ArrowLeft } from 'lucide-react';
// ২ ধাপ পেছনে গিয়ে src ফোল্ডারের components-এ ঢুকতে হবে
import Footer from '../../components/Footer';
import toast, { Toaster } from 'react-hot-toast';

export default function FriendDetailsClient({ friend }) {
    const router = useRouter();

    const handleAction = (type) => {
        const now = new Date();
        const today = now.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        const currentTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

        const newEntry = {
            id: Date.now(),
            title: `${type} with ${friend.name}`,
            date: today,
            time: currentTime,
            type: type.toLowerCase()
        };

        const existingEntries = JSON.parse(localStorage.getItem('timelineEntries')) || [];
        localStorage.setItem('timelineEntries', JSON.stringify([newEntry, ...existingEntries]));

        toast.success(`${type} added to timeline!`, {
            icon: '✅',
            style: { borderRadius: '10px', background: '#333', color: '#fff' }
        });
    };

    return (
        <div className="bg-slate-50 min-h-screen flex flex-col">
            <Toaster position="top-right" />

            <div className="max-w-6xl mx-auto p-4 md:p-12 flex-grow w-full">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-slate-500 mb-8 hover:text-slate-800 transition-all"
                >
                    <ArrowLeft size={18} /> Back
                </button>

                <h1 className="text-3xl font-bold mb-8 text-slate-900">Friend Details</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-4 space-y-4">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                            <img src={friend.picture} className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-slate-50" alt={friend.name} />
                            <h1 className="text-2xl font-bold text-slate-900">{friend.name}</h1>

                            <div className="my-3 space-y-2">
                                <span className={`block px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider 
                  ${friend.status === 'overdue' ? 'bg-red-500 text-white' : 'bg-slate-800 text-white'}`}>
                                    {friend.status.replace('-', ' ')}
                                </span>
                                <div className="flex gap-2 justify-center">
                                    {friend.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase rounded-md">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-slate-500 text-sm italic mb-2">"{friend.bio}"</p>
                            <p className="text-slate-400 text-xs font-medium">Preferred: {friend.email}</p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden divide-y divide-slate-100">
                            <button className="w-full flex items-center justify-center gap-3 py-4 text-sm font-semibold text-slate-600 hover:bg-slate-50"><Bell size={18} /> Snooze 2 Weeks</button>
                            <button className="w-full flex items-center justify-center gap-3 py-4 text-sm font-semibold text-slate-600 hover:bg-slate-50"><Archive size={18} /> Archive</button>
                            <button className="w-full flex items-center justify-center gap-3 py-4 text-sm font-semibold text-red-500 hover:bg-red-50"><Trash2 size={18} /> Delete</button>
                        </div>
                    </div>

                    <div className="lg:col-span-8 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <StatCard label="Days Since Contact" value={friend.days_since_contact} />
                            <StatCard label="Goal (Days)" value={friend.goal} />
                            <StatCard label="Next Due" value={friend.next_due_date} isDate />
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center">
                            <div>
                                <p className="text-sm font-bold text-slate-900 mb-1">Relationship Goal</p>
                                <p className="text-slate-500 text-sm">Connect every <span className="font-bold text-slate-900">{friend.goal} days</span></p>
                            </div>
                            <button className="px-4 py-2 border border-slate-200 rounded-md text-xs font-bold text-slate-600 hover:bg-slate-50">Edit</button>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <p className="text-sm font-bold text-slate-900 mb-6">Quick Check-In</p>
                            <div className="grid grid-cols-3 gap-4">
                                <CheckInButton icon={<Phone size={20} />} label="Call" onClick={() => handleAction('Call')} />
                                <CheckInButton icon={<MessageSquare size={20} />} label="Text" onClick={() => handleAction('Text')} />
                                <CheckInButton icon={<Video size={20} />} label="Video" onClick={() => handleAction('Video')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

function StatCard({ label, value, isDate }) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
            <p className={`${isDate ? 'text-lg' : 'text-3xl'} font-bold text-slate-900 mb-1`}>{value}</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">{label}</p>
        </div>
    );
}

function CheckInButton({ icon, label, onClick }) {
    return (
        <button onClick={onClick} className="flex flex-col items-center gap-3 py-6 rounded-xl border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all text-slate-600">
            {icon}
            <span className="text-xs font-bold">{label}</span>
        </button>
    );
}
