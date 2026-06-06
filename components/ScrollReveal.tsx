'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface ScrollRevealProps {
    children: ReactNode
    className?: string
    delay?: number
    amount?: number
    margin?: string
}

const revealVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 34,
        filter: 'blur(6px)',
    },
    show: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
        },
    },
}

export default function ScrollReveal({
    children,
    className,
    delay = 0,
    amount = 0.45,
    margin = '0px 0px -20% 0px',
}: ScrollRevealProps) {
    const shouldReduceMotion = useReducedMotion()

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            variants={revealVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount, margin }}
            transition={{ delay }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
