"use client"

export default function ContactSection() {
    return (
        <section id="contact" className="max-w-5xl w-full py-8 md:py-20 px-3 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
                <div className="space-y-6 md:space-y-12 text-center lg:text-left items-center lg:items-start flex flex-col">
                    <div className="space-y-3 md:space-y-6 px-4 md:px-0">
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase whitespace-nowrap">Let's <span className="text-blue-500 italic">Connect</span></h2>
                        <p className="text-neutral-400 text-sm md:text-lg max-w-sm leading-relaxed uppercase tracking-widest">
                            Build something extraordinary.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="text-xs text-neutral-600 uppercase tracking-widest font-bold">Email me</div>
                        <a href="mailto:hello@sharath.dev" className="text-xl md:text-2xl text-white hover:text-blue-500 transition-colors break-all">hello@sharath.dev</a>
                    </div>

                    <div className="flex gap-4 md:gap-6">
                        <a href="#" className="p-3 md:p-4 rounded-full bg-white/5 border border-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all group">
                            <svg className="w-5 h-5 text-neutral-500 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                        </a>
                        <a href="#" className="p-3 md:p-4 rounded-full bg-white/5 border border-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all group">
                            <svg className="w-5 h-5 text-neutral-500 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.599 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                        </a>
                    </div>
                </div>

                <div className="p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl space-y-6 md:space-y-8 w-full font-bold">
                    <form className="space-y-4 md:space-y-6 uppercase tracking-widest text-[10px]">
                        <div className="space-y-2">
                            <label className="text-[10px] text-neutral-500 uppercase tracking-widest pl-2">Your Name</label>
                            <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-neutral-700" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] text-neutral-500 uppercase tracking-widest pl-2">Your Email</label>
                            <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-neutral-700" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] text-neutral-500 uppercase tracking-widest pl-2">Message</label>
                            <textarea rows={4} placeholder="What can I help you with?" className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-neutral-700 resize-none" />
                        </div>
                        <button type="submit" className="w-full py-4 md:py-5 rounded-xl md:rounded-2xl bg-white text-black font-bold text-sm md:text-base uppercase tracking-widest hover:bg-neutral-200 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-white/5 mt-2">
                            SEND MESSAGE ↗
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
