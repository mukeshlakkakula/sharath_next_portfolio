"use client"

interface Skill {
    name: string
    icon: string
}

interface SkillsSectionProps {
    skills: Skill[]
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
    return (
        <section id="skills" className="max-w-6xl w-full mt-16 md:mt-24 space-y-10 md:space-y-20 px-3 scroll-mt-24">
            <div className="text-center space-y-1 md:space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight uppercase tracking-[0.2em]">Tech Stack</h2>
                <p className="text-neutral-500 max-w-md mx-auto text-[10px] md:text-sm uppercase tracking-widest">Mastering modern technologies.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 md:gap-4">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center justify-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-neutral-900/60 transition-all group">
                        <div className="w-6 h-6 md:w-10 md:h-10 relative mb-2 md:mb-3 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain filter invert" />
                        </div>
                        <span className="text-[8px] md:text-[10px] text-neutral-500 group-hover:text-white transition-colors uppercase tracking-widest">{skill.name}</span>
                    </div>
                ))}
            </div>

            {/* Bottom Bar Styling */}
            <div className="pt-12 md:pt-20 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left pb-12 md:pb-12">
                <div className="space-y-1 md:space-y-4 px-4 md:px-0">
                    <h4 className="text-white font-bold text-xs md:text-base uppercase tracking-widest">Front-End Paradigms</h4>
                    <p className="text-[10px] md:text-sm text-neutral-500 uppercase leading-relaxed">Next.js & Type-Safe UI Architecture.</p>
                </div>
                <div className="space-y-1 md:space-y-4 px-4 md:px-0">
                    <h4 className="text-white font-bold text-xs md:text-base uppercase tracking-widest">Aesthetics & Motion</h4>
                    <p className="text-[10px] md:text-sm text-neutral-500 uppercase leading-relaxed">Fluent designs with GSAP Engineering.</p>
                </div>
                <div className="space-y-1 md:space-y-4 px-4 md:px-0">
                    <h4 className="text-white font-bold text-xs md:text-base uppercase tracking-widest">Full-Stack Scale</h4>
                    <p className="text-[10px] md:text-sm text-neutral-500 uppercase leading-relaxed">AWS & Node.js Backend Ecosystems.</p>
                </div>
            </div>
        </section>
    )
}
