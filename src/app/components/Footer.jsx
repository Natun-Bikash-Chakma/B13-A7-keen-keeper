export default function Footer() {
    return (
        <footer className="bg-[#1a3d32] text-white py-16 px-4">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">

                <h2 className="text-4xl font-bold mb-4">KeenKeeper</h2>

                <p className="text-slate-300 max-w-lg mb-8 text-sm leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                <div className="mb-12">
                    <p className="text-[10px] font-bold mb-4 uppercase tracking-widest text-slate-400">Social Links</p>
                    <div className="flex gap-4">
                        {/* Youtube Icon (SVG) */}
                        <a href="#" className="bg-white p-2 rounded-full text-[#1a3d32] hover:bg-slate-200 transition-all">
                            <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
                        </a>
                        {/* Facebook Icon (SVG) */}
                        <a href="#" className="bg-white p-2 rounded-full text-[#1a3d32] hover:bg-slate-200 transition-all">
                            <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        {/* Twitter/X Icon (SVG) */}
                        <a href="#" className="bg-white p-2 rounded-full text-[#1a3d32] hover:bg-slate-200 transition-all">
                            <svg xmlns="http://w3.org" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </a>
                    </div>
                </div>

                <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-400 gap-4">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className="flex gap-6 font-medium">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
