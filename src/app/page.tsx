"use client"
import { useState } from "react"
import Image from "next/image"
import ImageRevealLens from "@/components/ImageRevealLens"
import ProjectCard from "@/components/ProjectCard"
import FluidBackground from "@/components/FluidBackground"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Small offset for fixed header
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

  return (
    <div className="relative min-h-screen bg-neutral-950 font-sans selection:bg-blue-500/30 overflow-x-hidden scroll-smooth">
      {/* Background (Fixed/z-0) */}
      <FluidBackground />

      {/* Content (Above Background) */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-[70] flex items-center justify-between px-6 md:px-12 py-5 md:py-8 backdrop-blur-xl bg-black/40 border-b border-white/5 transition-all">
          <div className="text-xl md:text-2xl font-bold text-white tracking-tighter shrink-0 flex items-center gap-2 relative z-[80]">
            <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center font-black text-sm">S</div>
            SHARATH<span className="text-blue-500">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 text-xs font-bold text-neutral-400 uppercase tracking-[0.2em]">
            <a href="#works" onClick={(e) => handleScroll(e, "works")} className="hover:text-white transition-all hover:tracking-[0.3em]">Works</a>
            <a href="#about" onClick={(e) => handleScroll(e, "about")} className="hover:text-white transition-all hover:tracking-[0.3em]">About</a>
            <a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="hover:text-white transition-all hover:tracking-[0.3em]">Skills</a>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hover:text-white transition-all hover:tracking-[0.3em]">Contact</a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none transition-all group relative z-[80]"
          >
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>

          {/* Mobile Overlay Menu */}
          <div className={`fixed inset-0 bg-black/98 backdrop-blur-3xl transition-all duration-500 md:hidden flex flex-col items-center justify-center gap-8 z-[60] pt-24 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
            <a href="#works" onClick={(e) => handleScroll(e, "works")} className="text-3xl font-black text-white hover:text-blue-500 transition-all uppercase tracking-tighter italic">Works</a>
            <a href="#about" onClick={(e) => handleScroll(e, "about")} className="text-3xl font-black text-white hover:text-blue-500 transition-all uppercase tracking-tighter italic">About</a>
            <a href="#skills" onClick={(e) => handleScroll(e, "skills")} className="text-3xl font-black text-white hover:text-blue-500 transition-all uppercase tracking-tighter italic">Skills</a>
            <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-3xl font-black text-white hover:text-blue-500 transition-all uppercase tracking-tighter italic">Contact</a>

            <div className="absolute bottom-12 flex gap-8 opacity-20">
              <span className="text-[10px] text-white tracking-[0.4em] uppercase font-bold">LinkedIn</span>
              <span className="text-[10px] text-white tracking-[0.4em] uppercase font-bold">Twitter</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="flex-col flex items-center justify-center pt-20 md:pt-32 pb-12 md:pb-40 px-3 md:px-10 w-full">
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

            {/* Left Side: Content */}
            <div className="flex flex-col gap-4 md:gap-8 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-[1.1] md:leading-[1.0] tracking-tight">
                DESIGNING <br />THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 underline decoration-blue-500/30 underline-offset-8 uppercase">Core</span>
              </h1>
              <p className="max-w-xl text-sm md:text-xl text-neutral-400 leading-relaxed font-light px-2 md:px-0">
                I build immersive, high-performance web experiences that merge aesthetics with functionality.
                Hover to see the transformation details.
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

          {/* Experience Section */}
          <section id="about" className="max-w-6xl w-full mt-16 md:mt-32 space-y-8 md:space-y-20 px-3 scroll-mt-24">
            <div className="space-y-2 md:space-y-4 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight uppercase">Career Journey</h2>
              <div className="h-1 w-12 md:w-20 bg-blue-500 mx-auto md:mx-0" />
            </div>

            <div className="space-y-8 md:space-y-12">
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

          {/* Pinterest Style Masonry Works Section */}
          <section id="works" className="max-w-6xl w-full mt-16 md:mt-24 space-y-8 md:space-y-16 scroll-mt-24">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-3 px-3 text-center md:text-left">
              <div className="space-y-1 md:space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight uppercase">Portfolio</h2>
                <p className="text-neutral-500 max-w-sm text-[10px] md:text-sm uppercase tracking-widest">Hover projects to reveal details.</p>
              </div>
            </div>

            <div className="columns-2 lg:columns-3 gap-4 md:gap-8 space-y-4 md:space-y-8 px-3">
              <ProjectCard image="/images/project-shoe.png" title="Aero Dynamic" category="3D Modeling" aspectRatio="aspect-square" />
              <ProjectCard image="/images/project-arch.png" title="Crystal Vault" category="Visual Design" aspectRatio="aspect-[3/4]" />
              <ProjectCard image="/images/project-interior.png" title="Luminary Home" category="Interior Design" aspectRatio="aspect-[3/4]" />
              <ProjectCard image="/images/project-watch.png" title="Precision Time" category="Product Photography" aspectRatio="aspect-square" />
              <ProjectCard image="/images/project-skincare.png" title="Pure Essence" category="Skin Care Branding" aspectRatio="aspect-[4/3]" />
              <ProjectCard image="/images/project-saas.png" title="Vortex Tech" category="SaaS Dashboard" aspectRatio="aspect-square" />
              <ProjectCard image="/images/project-coffee.png" title="Dark Roast" category="Brand Identity" aspectRatio="aspect-[3/4]" />
              <ProjectCard image="/images/project-cosmetic.png" title="Glow Lab" category="Cosmetic Branding" aspectRatio="aspect-[4/3]" />
              <ProjectCard image="/images/reveal-base.png" title="Origin Meta" category="Web Experience" aspectRatio="aspect-square" />
            </div>
          </section>

          {/* Skills Section */}
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
            <div className="pt-12 md:pt-20 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left pb-12 md:pb-40">
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

          {/* Contact Section */}
          <section id="contact" className="max-w-5xl w-full mt-16 md:mt-24 py-8 md:py-20 px-3 scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
              <div className="space-y-6 md:space-y-12 text-center lg:text-left items-center lg:items-start flex flex-col">
                <div className="space-y-3 md:space-y-6 px-4 md:px-0">
                  <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase whitespace-nowrap">Let's <span className="text-blue-500 italic">Connect</span></h2>
                  <p className="text-neutral-400 text-sm md:text-lg max-w-sm leading-relaxed uppercase tracking-widest">
                    Build something extraordinary.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="text-xs text-neutral-600 uppercase tracking-widest font-bold">Email me</div>
                  <a href="mailto:hello@sharath.dev" className="text-xl md:text-2xl text-white hover:text-blue-500 transition-colors break-all">hello@sharath.dev</a>
                </div>

                <div className="flex gap-4 md:gap-6">
                  <a href="#" className="p-3 md:p-4 rounded-full bg-white/5 border border-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all group">
                    <svg className="w-5 h-5 text-neutral-500 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                  </a>
                  <a href="#" className="p-3 md:p-4 rounded-full bg-white/5 border border-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all group">
                    <svg className="w-5 h-5 text-neutral-500 group-hover:text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.599 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                  </a>
                </div>
              </div>

              <div className="p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-3xl space-y-6 md:space-y-8 w-full font-bold">
                <form className="space-y-4 md:space-y-6 uppercase tracking-widest text-[10px]">
                  <div className="space-y-2">
                    <label className="text-[10px] text-neutral-500 uppercase tracking-widest pl-2">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-neutral-700" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-neutral-500 uppercase tracking-widest pl-2">Your Email</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-neutral-700" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] text-neutral-500 uppercase tracking-widest pl-2">Message</label>
                    <textarea rows={4} placeholder="What can I help you with?" className="w-full bg-white/5 border border-white/5 rounded-xl md:rounded-2xl px-5 py-3 md:px-6 md:py-4 text-sm md:text-base text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-neutral-700 resize-none" />
                  </div>
                  <button type="submit" className="w-full py-4 md:py-5 rounded-xl md:rounded-2xl bg-white text-black font-bold text-sm md:text-base uppercase tracking-widest hover:bg-neutral-200 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-white/5 mt-2">
                    SEND MESSAGE ↗
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        {/* Footer / Logos */}
        <footer className="px-6 md:px-8 py-12 md:py-16 flex flex-col items-center gap-6 md:gap-8 border-t border-white/5 w-full bg-black/20 backdrop-blur-sm">
          <p className="text-neutral-600 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-medium">Built with the latest technologies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            <Image src="/next.svg" alt="Next.js" width={90} height={18} className="invert md:w-[100px]" />
            <div className="hidden sm:block h-6 w-px bg-white/10" />
            <p className="text-white font-bold text-base md:text-lg">Tailwind CSS</p>
            <div className="hidden sm:block h-6 w-px bg-white/10" />
            <p className="text-white font-bold text-base md:text-lg">Framer Motion</p>
          </div>
          <div className="mt-8 text-[10px] text-neutral-700 uppercase tracking-widest">© 2026 SHARATH PORTFOLIO</div>        </footer>
      </div>
    </div>
  )
}
