'use client'

import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function ProgressBar() {
    const scaleX = useMotionValue(0)
    const smoothScaleX = useSpring(scaleX, { stiffness: 100, damping: 30, restDelta: 0.001 })

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.body.scrollHeight - window.innerHeight
            if (docHeight > 0) {
                scaleX.set(scrollTop / docHeight)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [scaleX])

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[200] origin-left"
            style={{ scaleX: smoothScaleX }}
        />
    )
}
