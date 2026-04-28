'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { stats } from '@/lib/constants'
import Image from 'next/image'

import { motion } from 'framer-motion'

export default function AboutSection() {
    const photoRef = useScrollReveal()
    const textRef = useScrollReveal()

    // Variantes para animação de entrada em cascata
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section id="about" className="px-6 md:px-12 py-16 md:py-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">
                {/* Photo Placeholder */}
                <div
                    ref={photoRef as React.RefObject<HTMLDivElement>}
                    className="reveal-left relative group"
                >
                    <div className="aspect-square md:aspect-[4/5] w-full max-w-[420px] mx-auto bg-bg2 border border-white/[0.07] flex items-center justify-center overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
                        <span className="hidden font-syne text-[80px] font-extrabold text-accent/15 select-none relative z-10">
                            WM
                        </span>
                        <Image src="/images/wilker.webp" alt="Wilker Martins" fill className="object-cover" />
                    </div>
                    <div className="absolute top-4 -right-4 w-full h-full border border-accent/20 pointer-events-none group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
                </div>

                {/* Text */}
                <div ref={textRef as React.RefObject<HTMLDivElement>} className="reveal">
                    <p className="text-[10px] uppercase tracking-widest2 text-accent mb-4 font-mono">
                        Sobre
                    </p>
                    <h2 className="font-syne font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">
                        Construindo a web com propósito
                    </h2>
                    <p className="text-sm leading-[1.9] text-muted mb-8">
                        Possuo projetos desenvolvidos que variam de landing pages a sistemas web com banco de dados.
                    </p>

                    {/* Stats Grid - 3x3 for 9 items */}
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-3 border border-white/[0.07]"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                whileHover={{ 
                                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                                    transition: { duration: 0.2 }
                                }}
                                className={`bg-bg p-4 md:p-6 flex flex-col items-center justify-center text-center group transition-colors relative overflow-hidden ${
                                    i < 6 ? 'border-b border-white/[0.07]' : ''
                                } ${(i + 1) % 3 !== 0 ? 'border-r border-white/[0.07]' : ''}`}
                            >
                                {/* Background glow effect on hover */}
                                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-300" />
                                
                                <div className="text-accent mb-3 block relative z-10">
                                    <motion.div 
                                        animate={{ 
                                            scale: [1, 1.08, 1],
                                            filter: [
                                                'drop-shadow(0 0 0px rgba(20, 241, 149, 0))',
                                                'drop-shadow(0 0 12px rgba(20, 241, 149, 0.4))',
                                                'drop-shadow(0 0 0px rgba(20, 241, 149, 0))'
                                            ],
                                            color: ['#14f195', '#ffffff', '#14f195']
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: i * 0.3
                                        }}
                                        whileHover={{ 
                                            scale: 1.15,
                                            transition: { duration: 0.2 }
                                        }}
                                        className="w-fit h-fit mx-auto flex items-center justify-center"
                                    >
                                        <stat.icon className="w-7 h-7 md:w-9 md:h-9" />
                                    </motion.div>
                                </div>
                                <span className="text-[9px] md:text-[10px] uppercase tracking-wider text-muted font-mono relative z-10 group-hover:text-white transition-colors duration-300">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
