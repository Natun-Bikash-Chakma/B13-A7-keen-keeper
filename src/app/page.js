"use client";
import React, { useState, useEffect } from 'react';
import { PlusCircle } from 'lucide-react';
import FriendList from './components/FriendList';
import friendsData from './friends.json';
import Footer from './components/Footer';

export default function Banner() {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [dynamicStats, setDynamicStats] = useState({
    total: 0,
    onTrack: 0,
    needAttention: 0,
    interactions: 0
  });

  useEffect(() => {
    // ডাটা লোড এবং স্ট্যাটাস ক্যালকুলেশন
    const timer = setTimeout(() => {
      setFriends(friendsData);

      // ১. Total Friends
      const total = friendsData.length;

      // ২. On Track (যাদের স্ট্যাটাস overdue নয়)
      const onTrack = friendsData.filter(f => f.status !== 'overdue').length;

      // ৩. Need Attention (যাদের স্ট্যাটাস overdue)
      const needAttention = friendsData.filter(f => f.status === 'overdue').length;

      // ৪. Interactions (Timeline entries থেকে সংখ্যা নেওয়া)
      const timeline = JSON.parse(localStorage.getItem('timelineEntries')) || [];
      const interactions = timeline.length;

      setDynamicStats({
        total,
        onTrack,
        needAttention,
        interactions
      });

      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const statsCards = [
    { label: 'Total Friends', value: dynamicStats.total },
    { label: 'On Track', value: dynamicStats.onTrack },
    { label: 'Need Attention', value: dynamicStats.needAttention },
    { label: 'Interactions This Month', value: dynamicStats.interactions },
  ];

  return (
    <>
      <div className="bg-white min-h-screen">
        <section className="py-16 px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Friends to keep close in your life
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <button className="flex items-center gap-2 bg-[#1a3d32] text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-all">
              <PlusCircle size={20} />
              Add a Friend
            </button>
          </div>

          {/* ডাইনামিক সামারি কার্ড */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {statsCards.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 text-center">
                {isLoading ? (
                  <div className="h-10 w-12 bg-slate-100 animate-pulse mx-auto mb-2 rounded"></div>
                ) : (
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</h2>
                )}
                <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4">
          <hr className="border-t border-slate-200" />
        </div>

        <FriendList friends={friends} loading={isLoading} />
      </div>
      <Footer />
    </>
  );
}
// npm run build 