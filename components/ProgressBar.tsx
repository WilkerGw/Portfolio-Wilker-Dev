'use client'

import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'

export default function ProgressBar() {
    const shouldReduceMotion = useReducedMotion()
    const { scrollYProgress } = useScroll()
    const smoothScaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 })

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[200] origin-left"
            style={{ scaleX: shouldReduceMotion ? scrollYProgress : smoothScaleX }}
        />
    )
}
