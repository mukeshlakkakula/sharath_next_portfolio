"use client"
import ProjectCard from "./ProjectCard"

interface Project {
    image: string
    title: string
    category: string
    aspectRatio: string
}

interface WorksSectionProps {
    projects: Project[]
}

export default function WorksSection({ projects }: WorksSectionProps) {
    return (
        <section id="works" className="max-w-6xl w-full mt-16 md:mt-24 space-y-8 md:space-y-16 scroll-mt-24">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-3 px-3 text-center md:text-left">
                <div className="space-y-1 md:space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">Portfolio</h2>
                    <p className="text-neutral-500 max-w-sm text-[10px] md:text-sm uppercase tracking-widest">Click to reveal details.</p>
                </div>
            </div>

            <div className="columns-2 lg:columns-3 gap-2 md:gap-8 space-y-2 md:space-y-8 px-3">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        category={project.category}
                        aspectRatio={project.aspectRatio}
                    />
                ))}
            </div>
        </section>
    )
}
