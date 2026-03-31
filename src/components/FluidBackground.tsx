"use client"

import { useEffect, useRef } from "react"

export default function FluidBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let time = 0

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const draw = () => {
            time += 0.005
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Background color (match neutral-950)
            ctx.fillStyle = "#0a0a0a"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Draw diffuse white 'smoky' blobs
            const blobs = [
                { x: 0.2, y: 0.3, r: 600, color: "rgba(255, 255, 255, 0.07)", speed: 0.5 },
                { x: 0.8, y: 0.2, r: 800, color: "rgba(255, 255, 255, 0.05)", speed: 0.3 },
                { x: 0.5, y: 0.7, r: 700, color: "rgba(255, 255, 255, 0.04)", speed: 0.4 },
                { x: 0.1, y: 0.8, r: 500, color: "rgba(255, 255, 255, 0.06)", speed: 0.2 },
            ]

            blobs.forEach((blob, i) => {
                const x = canvas.width * (blob.x + Math.sin(time * blob.speed + i) * 0.1)
                const y = canvas.height * (blob.y + Math.cos(time * blob.speed * 0.8 + i) * 0.1)

                const gradient = ctx.createRadialGradient(x, y, 0, x, y, blob.r)
                gradient.addColorStop(0, blob.color)
                gradient.addColorStop(1, "transparent")

                ctx.fillStyle = gradient
                ctx.beginPath()
                ctx.arc(x, y, blob.r, 0, Math.PI * 2)
                ctx.fill()
            })

            // Add a subtle "grain" effect
            for (let i = 0; i < 50; i++) {
                const gx = Math.random() * canvas.width
                const gy = Math.random() * canvas.height
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.03})`
                ctx.fillRect(gx, gy, 1, 1)
            }

            animationFrameId = requestAnimationFrame(draw)
        }

        window.addEventListener("resize", resize)
        resize()
        draw()

        return () => {
            window.removeEventListener("resize", resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-100"
        />
    )
}
