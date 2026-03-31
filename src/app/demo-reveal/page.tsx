import ImageRevealLens from "@/components/ImageRevealLens"

export default function DemoPage() {
    return (
        <main className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
            <div className="max-w-xl w-full">
                <h1 className="text-4xl font-bold text-white mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Reveal Mask Effect
                </h1>

                {/* Placeholder images URLs or local paths would go here */}
                <div className="relative group rounded-3xl overflow-hidden border border-white/10 p-4 bg-white/5 backdrop-blur-sm shadow-2xl">
                    <ImageRevealLens
                        baseImage="/placeholder-stylized.png" // Point to actual assets later
                        revealImage="/placeholder-realistic.png" // Point to actual assets later
                        maskSize={300}
                    />
                </div>

                <p className="mt-8 text-neutral-400 text-center max-w-md mx-auto text-sm">
                    Hover over the portrait to reveal the deeper, highly detailed layer. Perfect for portfolios that want to show 'behind the scenes' or 'after' versions of creative work.
                </p>
            </div>
        </main>
    )
}
