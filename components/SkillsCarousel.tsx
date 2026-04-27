'use client'

import { motion } from 'framer-motion'
import { marqueeItems } from '@/lib/constants'

export default function SkillsCarousel() {
    // Duplicate marqueeItems to ensure smooth infinite loop
    const displayItems = [...marqueeItems, ...marqueeItems, ...marqueeItems]

    return (
        <div className="w-full overflow-hidden py-8 border-y border-white/5 bg-bg/20 backdrop-blur-sm relative group">
            {/* Gradient Overlay Left */}
            <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-linear-to-r from-bg to-transparent pointer-events-none" />

            {/* Gradient Overlay Right */}
            <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-linear-to-l from-bg to-transparent pointer-events-none" />

            <motion.div
                className="flex whitespace-nowrap"
                animate={{
                    x: ['0%', '-50%'],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                {displayItems.map((item, index) => (
                    <div
                        key={`${item}-${index}`}
                        className="inline-flex items-center mx-8 group/item"
                    >
                        <span className="text-muted text-[10px] sm:text-[11px] font-mono tracking-widest3 mr-6 group-hover/item:text-accent transition-colors duration-300">
                            ◆
                        </span>
                        <span className="font-syne font-extrabold text-sm sm:text-lg lg:text-xl uppercase tracking-widest text-fg/40 group-hover/item:text-accent transition-all duration-300">
                            {item}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
