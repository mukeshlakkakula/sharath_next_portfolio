"use client"

import Image from "next/image"

interface ProjectCardProps {
    image: string
    title: string
    category: string
    aspectRatio?: string
}

export default function ProjectCard({
    image,
    title,
    category,
    aspectRatio = "aspect-square",
}: ProjectCardProps) {
    return (
        <div className="group relative w-full overflow-hidden rounded-[2.5rem] bg-neutral-900 border border-white/5 transition-all duration-500 hover:border-blue-500/20">
            <div className={`relative w-full ${aspectRatio} overflow-hidden`}>
                {/* Grayscale Image that becomes colored on hover */}
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] scale-100 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                    priority
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            </div>

            {/* Floating Info (Optional, but looks premium) */}
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex flex-col gap-0.5 md:gap-1">
                    <span className="text-[8px] md:text-[10px] text-blue-400 font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{category}</span>
                    <h3 className="text-lg md:text-2xl font-bold text-white leading-tight">{title}</h3>
                </div>
            </div>
        </div>
    )
}
