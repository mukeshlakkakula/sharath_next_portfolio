"use client"
import { useState } from "react"
import FluidBackground from "@/components/FluidBackground"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import ExperienceSection from "@/components/ExperienceSection"
import WorksSection from "@/components/WorksSection"
import SkillsSection from "@/components/SkillsSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
    { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "TypeScript", icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "Tailwind", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
    { name: "Framer", icon: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg" },
    { name: "Three.js", icon: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg" },
    { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  ]

  const experience = [
    {
      period: "2023 - Present",
      role: "Senior Frontend Developer",
      company: "Aether Technologies",
      desc: "Architecting high-performance design systems and leading 3D web experience development for Fortune 500 clients.",
    },
    {
      period: "2021 - 2023",
      role: "UX Engineer",
      company: "Neural Lab Studios",
      desc: "Designed and built complex visualization dashboards and advanced interactive interfaces for data-intensive applications.",
    },
    {
      period: "2019 - 2021",
      role: "Full-Stack Engineer",
      company: "Web Flow Dynamics",
      desc: "End-to-end development of scalable e-commerce platforms and modern JAMstack sites using Next.js and Headless CMS.",
    },
  ]

  const projects = [
    { image: "/images/project-shoe.png", title: "Aero Dynamic", category: "3D Modeling", aspectRatio: "aspect-square" },
    { image: "/images/project-arch.png", title: "Crystal Vault", category: "Visual Design", aspectRatio: "aspect-[3/4]" },
    { image: "/images/project-interior.png", title: "Luminary Home", category: "Interior Design", aspectRatio: "aspect-[3/4]" },
    { image: "/images/project-watch.png", title: "Precision Time", category: "Product Photography", aspectRatio: "aspect-square" },
    { image: "/images/project-skincare.png", title: "Pure Essence", category: "Skin Care Branding", aspectRatio: "aspect-[4/3]" },
    { image: "/images/project-saas.png", title: "Vortex Tech", category: "SaaS Dashboard", aspectRatio: "aspect-square" },
    { image: "/images/project-coffee.png", title: "Dark Roast", category: "Brand Identity", aspectRatio: "aspect-[3/4]" },
    { image: "/images/project-cosmetic.png", title: "Glow Lab", category: "Cosmetic Branding", aspectRatio: "aspect-[4/3]" },
    { image: "/images/reveal-base.png", title: "Origin Meta", category: "Web Experience", aspectRatio: "aspect-square" },
  ]

  return (
    <div className="relative min-h-screen bg-neutral-950 font-sans selection:bg-blue-500/30 overflow-x-hidden scroll-smooth transition-colors duration-500">
      <FluidBackground />

      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Navigation */}
        <nav className={`fixed top-0 w-full z-[70] flex items-center justify-between px-6 md:px-12 py-5 md:py-8 transition-all ${isMenuOpen ? "bg-neutral-950 border-none" : "backdrop-blur-xl bg-black/40 border-b border-white/5"}`}>
          <div className="text-xl md:text-2xl font-bold text-white tracking-tighter shrink-0 flex items-center gap-2 relative z-[80]">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center font-black text-sm">S</div>
            SHARATH<span className="text-blue-500">.</span>
          </div>

          <div className="hidden md:flex gap-10 text-xs font-bold text-neutral-400 uppercase tracking-[0.2em]">
            <a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-white transition-all hover:tracking-[0.3em]">About</a>
            <a href="#works" onClick={(e) => handleScroll(e, "works")} className="hover:text-white transition-all hover:tracking-[0.3em]">Works</a>
            <a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="hover:text-white transition-all hover:tracking-[0.3em]">Skills</a>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hover:text-white transition-all hover:tracking-[0.3em]">Contact</a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none transition-all group relative z-[80]">
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

          <div className={`fixed inset-0 bg-neutral-950 transition-all duration-500 md:hidden flex flex-col z-[60] pt-12 px-8 ${isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
            <div className="flex flex-col gap-4 mt-8">
              <span className="text-[10px] text-blue-500 font-bold tracking-[0.4em] uppercase opacity-50 mb-2">Internal Links</span>
              <a href="#hero" onClick={(e) => handleScroll(e, "hero")} className="text-2xl font-bold text-white hover:text-blue-500 transition-all uppercase tracking-tight">Home</a>
              <a href="#about" onClick={(e) => handleScroll(e, "about")} className="text-2xl font-bold text-white hover:text-blue-500 transition-all uppercase tracking-tight">About</a>
              <a href="#experience" onClick={(e) => handleScroll(e, "experience")} className="text-2xl font-bold text-white hover:text-blue-500 transition-all uppercase tracking-tight">Project Bio</a>
              <a href="#works" onClick={(e) => handleScroll(e, "works")} className="text-2xl font-bold text-white hover:text-blue-500 transition-all uppercase tracking-tight">Works</a>
              <a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="text-2xl font-bold text-white hover:text-blue-500 transition-all uppercase tracking-tight">Skills</a>
              <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-2xl font-bold text-white hover:text-blue-500 transition-all uppercase tracking-tight">Contact</a>
            </div>

            <div className="mt-auto pb-12 flex flex-col gap-6">
              <div className="h-px w-full bg-white/5" />
              <div className="flex justify-between items-center text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                <div className="flex gap-4">
                  <span className="hover:text-white transition-colors cursor-pointer">LinkedIn</span>
                  <span className="hover:text-white transition-colors cursor-pointer">Twitter</span>
                </div>
                <span className="opacity-30">© 2026</span>
              </div>
            </div>
          </div>
        </nav>

        <main className="w-full flex flex-col items-center mt-12">
          <HeroSection handleScroll={handleScroll} />
          <AboutSection handleScroll={handleScroll} />
          <ExperienceSection experience={experience} />
          <WorksSection projects={projects} />
          <SkillsSection skills={skills} />
          <ContactSection />
        </main>

        <footer className="px-6 md:px-8 py-12 md:py-16 flex flex-col items-center gap-6 md:gap-8 border-t border-white/5 w-full bg-black/20 backdrop-blur-sm">
          <p className="text-neutral-600 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium">Built with the latest technologies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 text-white font-bold">
            <img src="/next.svg" alt="Next.js" width={90} height={18} className="invert md:w-[100px]" />
            <div className="hidden sm:block h-6 w-px bg-white/10" />
            <p className="text-base md:text-lg">Tailwind CSS</p>
            <div className="hidden sm:block h-6 w-px bg-white/10" />
            <p className="text-base md:text-lg">Framer Motion</p>
          </div>
          <div className="mt-8 text-[10px] text-neutral-700 uppercase tracking-widest">
            © 2026 SHARATH PORTFOLIO
          </div>
        </footer>
      </div>
    </div>
  )
}
