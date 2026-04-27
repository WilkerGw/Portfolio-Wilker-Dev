'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { stats } from '@/lib/constants'
import Image from 'next/image'

export default function AboutSection() {
    const photoRef = useScrollReveal()
    const textRef = useScrollReveal()

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
                        Trabalho com{' '}
                        <span className="text-fg">React, Next.js e Node.js</span> no core,
                        mas a stack é consequência da necessidade — não o contrário. O que
                        me move é{' '}
                        <span className="text-fg">resolver problemas com código limpo</span>{' '}
                        e entregar interfaces que as pessoas realmente usam.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 border border-white/[0.07]">
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className={`bg-bg p-5 md:p-6 hover:bg-bg2 transition-colors ${i < 2 ? 'border-b border-white/[0.07]' : ''
                                    } ${i % 2 === 0 ? 'border-r border-white/[0.07]' : ''}`}
                            >
                                <span className="font-syne text-3xl md:text-4xl font-extrabold text-accent leading-none block mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-[11px] uppercase tracking-wider text-muted font-mono">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
