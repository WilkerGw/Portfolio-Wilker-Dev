'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import SkillsCarousel from './SkillsCarousel'
import HeroCarousel from './HeroCarousel'

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
}

const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    })
    const blobY = useTransform(scrollYProgress, [0, 1], [0, 200])
    const blobX = useTransform(scrollYProgress, [0, 1], [0, -80])

    return (
        <section
            ref={sectionRef}
            className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 pb-32 md:pb-24 relative overflow-hidden"
        >
            {/* Grid Background */}
            <div
                className="absolute inset-0 opacity-50 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
                    backgroundSize: '60px 60px',
                    maskImage: 'radial-gradient(ellipse 80% 60% at 50% 100%, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 100%, black 40%, transparent 100%)',
                }}
            />

            {/* Glow Blob */}
            <motion.div
                className="absolute -top-20 -right-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(124,255,203,0.08) 0%, transparent 70%)',
                    y: blobY,
                    x: blobX,
                }}
                animate={{ x: [0, -40], y: [0, 60] }}
                transition={{ repeat: Infinity, repeatType: 'mirror', duration: 8, ease: 'easeInOut' }}
            />

            {/* Content & Carousel Wrapper */}
            <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between lg:gap-8">

                {/* Content Left */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex-1 w-full max-w-2xl"
                >
                    {/* Tag */}
                    <motion.p
                        variants={item}
                        className="text-[11px] uppercase tracking-widest2 text-accent mb-5 font-mono"
                    >
                        ↳ Disponível para projetos — 2026
                    </motion.p>

                    {/* Name */}
                    <motion.h1
                        variants={item}
                        className="font-syne font-extrabold leading-[0.85]"
                        style={{ fontSize: 'clamp(40px, 7vw, 85px)' }}
                    >
                        <span className="block italic">WILKER</span>
                        <span
                            className="block text-transparent"
                            style={{ WebkitTextStroke: '1px rgba(240,237,232,0.3)' }}
                        >
                            MARTINS
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={item}
                        className="max-w-[460px] text-sm leading-[1.8] text-muted mt-4 mb-8"
                    >
                        Transformo ideias em experiências digitais que funcionam. Código limpo,
                        design intencional e soluções que geram resultado.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div variants={item} className="flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="bg-accent text-bg font-mono text-[11px] uppercase tracking-wider font-medium px-7 py-3.5 hover:bg-fg transition-colors"
                        >
                            Ver projetos
                        </a>
                        <a
                            href="#contact"
                            className="border border-white/10 text-muted font-mono text-[11px] uppercase tracking-wider px-7 py-3.5 hover:text-fg hover:border-white/20 transition-colors"
                        >
                            Fale comigo
                        </a>
                    </motion.div>
                </motion.div>

                {/* Carousel Right/Bottom */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1 w-full flex justify-center lg:justify-end mt-8 lg:mt-0 pb-8 lg:pb-0"
                >
                    <HeroCarousel />
                </motion.div>
            </div>

            {/* Scroll Hint */}
            <div className="absolute bottom-24 right-6 md:right-12 hidden md:flex flex-col items-center gap-3">
                <span className="text-[10px] uppercase tracking-widest text-muted font-mono" style={{ writingMode: 'vertical-rl' }}>
                    Scroll
                </span>
                <motion.div
                    className="w-[1px] h-8 bg-accent origin-top"
                    animate={{ scaleY: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
            </div>

            {/* Bottom Carousel */}
            <div className="absolute bottom-0 left-0 w-full z-20">
                <SkillsCarousel />
            </div>
        </section>
    )
}
