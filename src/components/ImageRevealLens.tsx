"use client"

import { useState, useRef, type MouseEvent } from "react"
import Image from "next/image"

interface ImageRevealProps {
    baseImage: string
    revealImage: string
    alt?: string
    maskSize?: number
    grayscaleBase?: boolean
    aspectRatio?: string
}

export default function ImageRevealLens({
    baseImage,
    revealImage,
    alt = "Project reveal effect",
    maskSize = 130,
    grayscaleBase = false,
    aspectRatio = "aspect-square"
}: ImageRevealProps) {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        })
    }

    // Sharper radial gradient for "open" reveal effect
    const maskGradient = `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, black ${maskSize / 2}px, transparent ${maskSize / 2 + 2}px)`

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onMouseMove={handleMouseMove}
            className={`relative w-full ${aspectRatio} overflow-hidden rounded-[2rem] bg-neutral-950 group cursor-none border border-white/5`}
        >
            {/* Background Image - Option to be grayscale */}
            <Image
                src={baseImage}
                alt={alt}
                fill
                className={`object-cover transition-all duration-700 ${grayscaleBase ? 'grayscale opacity-100 group-hover:opacity-40' : 'opacity-100 group-hover:opacity-40'}`}
                priority
            />

            {/* Foreground (Realistic/Color) Image - Masked to follow cursor */}
            <div
                className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                style={{
                    opacity: isVisible ? 1 : 0,
                    backgroundImage: `url('${revealImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    WebkitMaskImage: maskGradient,
                    maskImage: maskGradient,
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                }}
            />

            {/* Subtle Overlay Label */}
            <div className="absolute top-6 right-6 pointer-events-none">
                <div className="opacity-[0.2] group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full text-white text-[10px] font-bold uppercase tracking-wider">
                        REVEAL COLOR
                    </div>
                </div>
            </div>

            {/* Interactive Hint: Blinkable Zoom Button */}
            {!isVisible && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-fade-in">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-2xl relative">
                            {/* Inner Pulsing Ring */}
                            <div className="absolute inset-0 rounded-full border border-blue-500/50 animate-ping opacity-20" />

                            {/* Zoom Icon (magnifying glass) */}
                            <svg className="w-6 h-6 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                        </div>
                        <span className="text-white/60 text-[10px] font-black uppercase tracking-[0.3em] bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm shadow-xl">
                            Reveal Color
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}
