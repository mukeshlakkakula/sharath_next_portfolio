import ParticleWave from "./ParticleWave"

interface HeroProps {
    handleScroll: (e: any, id: string) => void
}

export default function HeroSection({ handleScroll }: HeroProps) {
    return (
        <section id="hero" className="flex flex-col items-center justify-center text-center min-h-screen px-4 py-20 w-full relative overflow-hidden bg-black">
            {/* 3D Particle Background */}
            <ParticleWave />
            <div className="space-y-4 md:space-y-8 max-w-4xl z-20">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse" />
                    <span className="text-[10px] md:text-sm text-neutral-400 font-medium tracking-widest uppercase">Crafting Unique Brand Identities</span>
                </div>

                {/* Main Title */}
                <h1 className="text-5xl sm:text-7xl md:text-[120px] font-black text-white leading-none tracking-tighter uppercase whitespace-normal sm:whitespace-nowrap">
                    UI/UX <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-purple-500">DESIGNER</span>
                </h1>

                {/* Description */}
                <p className="max-w-2xl mx-auto text-sm md:text-xl text-neutral-400 leading-relaxed font-light px-2 opacity-80">
                    Passionate about designing simple, usable, and meaningful digital experiences.
                    Merging cutting-edge aesthetics with high-performance functionality.
                </p>

                {/* CTA Button */}
                <div className="pt-4 md:pt-8 flex justify-center">
                    <a
                        href="#works"
                        onClick={(e) => handleScroll(e, "works")}
                        className="group relative px-8 py-3 md:px-12 md:py-4 rounded-full bg-white/5 border border-white/20 text-white font-bold tracking-widest uppercase text-xs md:text-sm hover:bg-white/10 hover:border-white/40 transition-all duration-500 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10">See Projects</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
