import Link from 'next/link';

export default function FriendList({ friends, loading }) {
    // ডাটা লোড হওয়ার সময় এই Skeleton ডিজাইনটি দেখাবে
    if (loading) {
        return (
            <section className="max-w-6xl mx-auto py-12 px-4">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Your Friends</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center animate-pulse">
                            <div className="w-20 h-20 bg-slate-200 rounded-full mb-4"></div>
                            <div className="h-5 w-32 bg-slate-200 rounded mb-2"></div>
                            <div className="h-3 w-16 bg-slate-100 rounded mb-6"></div>
                            <div className="flex gap-2 mb-6">
                                <div className="h-6 w-12 bg-slate-100 rounded"></div>
                                <div className="h-6 w-12 bg-slate-100 rounded"></div>
                            </div>
                            <div className="w-full h-10 bg-slate-200 rounded-xl"></div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    // ডাটা চলে আসলে আসল লিস্ট দেখাবে
    return (
        <section className="max-w-6xl mx-auto py-12 px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Your Friends</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {friends.map((friend) => (
                    <Link href={`/friends/${friend.id}`} key={friend.id} className="group">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center transition-all hover:shadow-md hover:-translate-y-1">
                            <div className="w-20 h-20 mb-4 overflow-hidden rounded-full border-2 border-slate-100">
                                <img src={friend.picture} alt={friend.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="text-center mb-4">
                                <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-[#1a3d32]">{friend.name}</h3>
                                <p className="text-[11px] text-slate-400 mt-1">{friend.days_since_contact}d ago</p>
                            </div>
                            <div className="flex flex-wrap justify-center gap-2 mb-6">
                                {friend.tags.map((tag, index) => (
                                    <span key={index} className="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className={`w-full py-2 rounded-xl text-[11px] font-bold text-center capitalize tracking-wider
                                ${friend.status === 'overdue' ? 'bg-red-500 text-white' :
                                    friend.status === 'almost due' ? 'bg-orange-400 text-white' : 'bg-slate-800 text-white'}`}>
                                {friend.status.replace('-', ' ')}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
