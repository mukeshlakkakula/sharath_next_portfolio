"use client"
import ImageRevealLens from "./ImageRevealLens"

interface AboutProps {
    handleScroll: (e: any, id: string) => void
}

export default function AboutSection({ handleScroll }: AboutProps) {
    return (
        <section id="about" className="flex flex-col items-center justify-center py-12 md:py-12 px-3 md:px-10 w-full scroll-mt-24 border-t border-white/5">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                {/* Left Side: Content */}
                <div className="flex flex-col gap-4 md:gap-8 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start">
                    <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[1.1] md:leading-[1.0] tracking-tight whitespace-nowrap">
                        DESIGNING <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 underline decoration-blue-500/30 underline-offset-8 uppercase">THE CORE</span>
                    </h2>
                    <p className="max-w-xl text-sm md:text-xl text-neutral-400 leading-relaxed font-light px-2 md:px-0">
                        I build immersive, high-performance web experiences that merge aesthetics with functionality.
                        Every pixel is crafted with precision to deliver value and impact.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full sm:w-auto justify-center lg:justify-start px-2 md:px-0">
                        <a href="#works" onClick={(e) => handleScroll(e, "works")} className="h-12 md:h-16 px-8 md:px-10 rounded-full bg-white text-black font-bold flex items-center justify-center hover:bg-neutral-200 transition-all shadow-lg hover:scale-105 active:scale-95 duration-300 text-xs md:text-base">
                            View My Process
                        </a>
                        <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="h-12 md:h-16 px-8 md:px-10 rounded-full bg-neutral-900/50 text-white border border-white/10 flex items-center justify-center hover:bg-neutral-800 transition-all backdrop-blur-md text-xs md:text-base">
                            Let's Talk
                        </a>
                    </div>
                </div>

                {/* Right Side: The Reveal Lens (Focal Point) */}
                <div className="relative order-1 lg:order-2 group w-full max-w-[280px] sm:max-w-sm mx-auto lg:max-w-none lg:mx-0">
                    <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl md:blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-1000" />
                    <div className="relative p-1.5 md:p-2 rounded-[1.5rem] md:rounded-[2.5rem] mt-2 bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden ring-1 ring-white/5">
                        <ImageRevealLens
                            baseImage="/images/reveal-base2.png"
                            revealImage="/images/reveal-hidden1.png"
                            maskSize={200}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
