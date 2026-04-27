'use client'

import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { services, marqueeItems } from '@/lib/constants'
import { ArrowUpRight } from 'lucide-react'

export default function ServicesSection() {
    const ref = useScrollReveal()

    return (
        <section id="services" className="bg-bg2 px-6 md:px-12 py-16 md:py-[100px]">
            <div className="max-w-7xl mx-auto">
                <p className="text-[10px] uppercase tracking-widest2 text-accent mb-4 font-mono">
                    Serviços
                </p>
                <h2 className="font-syne font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-12">
                    Como posso ajudar
                </h2>
            </div>

            {/* Marquee */}
            <div className="overflow-hidden border-y border-white/[0.07] py-3.5 mb-12 md:mb-14">
                <motion.div
                    className="flex w-max"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                    {[...marqueeItems, ...marqueeItems].map((item, i) => (
                        <span
                            key={i}
                            className="px-8 md:px-10 font-syne font-semibold text-[13px] uppercase tracking-wider text-muted flex items-center gap-4 md:gap-5 whitespace-nowrap"
                        >
                            {item}
                            <span className="text-accent text-[8px]">◆</span>
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Services List */}
            <div ref={ref as React.RefObject<HTMLDivElement>} className="reveal max-w-7xl mx-auto">
                <div className="border border-white/[0.07]">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className={`grid grid-cols-[40px_1fr] md:grid-cols-[60px_1fr_auto] gap-4 md:gap-8 items-center px-6 md:px-10 py-5 md:py-7 group hover:bg-white/[0.02] transition-colors cursor-pointer ${i < services.length - 1 ? 'border-b border-white/[0.07]' : ''
                                }`}
                        >
                            {/* Number */}
                            <span className="font-syne font-semibold text-[13px] text-muted group-hover:text-accent transition-colors">
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            {/* Info */}
                            <div>
                                <h3 className="font-syne text-[17px] md:text-lg font-bold mb-1 md:mb-1.5">
                                    {service.title}
                                </h3>
                                <p className="text-[13px] text-muted">{service.description}</p>
                            </div>

                            {/* Arrow */}
                            <span className="hidden md:block text-xl text-muted -rotate-45 group-hover:text-accent group-hover:rotate-0 transition-all duration-200">
                                <ArrowUpRight size={20} />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
