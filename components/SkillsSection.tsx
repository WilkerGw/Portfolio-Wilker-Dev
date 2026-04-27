'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { skills } from '@/lib/constants'

export default function SkillsSection() {
    const ref = useScrollReveal()

    return (
        <section id="skills" className="bg-bg2 px-6 md:px-12 py-20 md:py-[120px]">
            <div className="max-w-7xl mx-auto">
                <p className="text-[10px] uppercase tracking-widest2 text-accent mb-4 font-mono">
                    Habilidades
                </p>
                <h2 className="font-syne font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-16">
                    O que eu domino
                </h2>

                <div
                    ref={ref as React.RefObject<HTMLDivElement>}
                    className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.07] border border-white/[0.07]"
                >
                    {skills.map((skill, i) => (
                        <div
                            key={i}
                            className="bg-bg2 p-8 md:p-10 relative overflow-hidden hover:bg-white/[0.03] transition-colors group"
                        >
                            {/* Hover Bar */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                            {/* Icon */}
                            <span className="text-2xl mb-5 block text-accent/60">{skill.icon}</span>

                            {/* Title */}
                            <h3 className="font-syne text-xl font-bold mb-3">{skill.title}</h3>

                            {/* Description */}
                            <p className="text-[13px] leading-[1.7] text-muted mb-6">
                                {skill.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {skill.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] uppercase tracking-wider text-muted border border-white/[0.07] px-2.5 py-1.5 group-hover:border-accent/20 group-hover:text-accent transition-all font-mono"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
