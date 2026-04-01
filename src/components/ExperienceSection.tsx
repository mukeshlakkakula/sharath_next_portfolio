"use client"

interface Experience {
    period: string
    role: string
    company: string
    desc: string
}

interface ExperienceSectionProps {
    experience: Experience[]
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
    return (
        <section id="experience" className="max-w-6xl w-full mt-8 md:mt-12 space-y-8 md:space-y-20 px-3 scroll-mt-24 items-center flex flex-col">
            <div className="w-full space-y-2 md:space-y-4 text-center md:text-left">
                <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight uppercase">Career Journey</h2>
                <div className="h-1 w-12 md:w-20 bg-blue-500 mx-auto md:mx-0" />
            </div>

            <div className="w-full space-y-8 md:space-y-12">
                {experience.map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start group">
                        <div className="w-full md:w-48 text-neutral-500 font-mono text-[10px] md:text-sm pt-1 uppercase tracking-widest">{item.period}</div>
                        <div className="flex-1 space-y-2 md:space-y-3 pb-8 md:pb-12 border-b border-white/5 last:border-0 w-full text-left">
                            <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors uppercase tracking-tight">{item.role}</h3>
                            <p className="text-blue-500/80 font-medium text-xs md:text-base">{item.company}</p>
                            <p className="text-neutral-400 max-w-2xl leading-relaxed text-xs md:text-base">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
