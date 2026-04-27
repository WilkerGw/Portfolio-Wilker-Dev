'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Monitor, Smartphone, Tablet, Expand } from 'lucide-react'

const devices = [
    { src: '/images/laptop.webp', label: 'Desktop', res: '1920x1080', Icon: Monitor },
    { src: '/images/phone.webp', label: 'Mobile', res: '375x812', Icon: Smartphone },
    { src: '/images/tablet.webp', label: 'Tablet', res: '768x1024', Icon: Tablet },
]

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % devices.length)
        }, 4000)
        return () => clearInterval(timer)
    }, [])

    const getPosition = (index: number) => {
        const diff = (index - currentIndex + devices.length) % devices.length
        if (diff === 0) return 'center'
        if (diff === 1) return 'right'
        if (diff === 2) return 'left'
        return 'hidden'
    }

    const variants = {
        center: {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            zIndex: 30,
            filter: 'blur(0px)',
            rotateY: 0,
            rotateX: 0,
        },
        left: {
            x: isMobile ? '-30%' : '-40%',
            y: isMobile ? -10 : -20,
            scale: isMobile ? 0.8 : 0.75,
            opacity: 0.4,
            zIndex: 10,
            filter: 'blur(4px)',
            rotateY: isMobile ? 15 : 25,
            rotateX: 5,
        },
        right: {
            x: isMobile ? '30%' : '40%',
            y: isMobile ? -10 : -20,
            scale: isMobile ? 0.8 : 0.75,
            opacity: 0.4,
            zIndex: 10,
            filter: 'blur(4px)',
            rotateY: isMobile ? -15 : -25,
            rotateX: 5,
        },
    }

    const ActiveIcon = devices[currentIndex].Icon

    return (
        <div className="relative w-full max-w-[600px] h-[240px] sm:h-[300px] md:h-auto md:aspect-[4/3] flex items-center justify-center perspective-[1000px] mt-4 lg:mt-0">
            {/* Responsiveness Indicator Badges */}
            <motion.div 
                className="absolute top-0 right-4 md:-right-8 bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-3 flex flex-col items-center gap-2 z-40 hidden sm:flex"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
            >
                <div className="text-[10px] text-muted font-mono uppercase tracking-widest flex items-center gap-1.5 mb-1">
                    <Expand className="w-3 h-3" />
                    Auto-Scale
                </div>
                {devices.map((dev, i) => (
                    <div 
                        key={dev.label}
                        className={`w-full flex items-center justify-between gap-4 px-2 py-1.5 rounded-lg transition-colors duration-300 ${i === currentIndex ? 'bg-accent/10 text-accent border border-accent/20' : 'text-muted/50 border border-transparent'}`}
                    >
                        <dev.Icon className="w-3.5 h-3.5" />
                        <span className="text-[9px] font-mono">{dev.res}</span>
                    </div>
                ))}
            </motion.div>

            {devices.map((device, index) => {
                const position = getPosition(index)
                return (
                    <motion.div
                        key={device.src}
                        className="absolute w-full h-full max-w-[220px] sm:max-w-[300px] md:max-w-[450px] max-h-[160px] sm:max-h-[220px] md:max-h-[350px] transform-style-3d"
                        initial={false}
                        animate={position}
                        variants={variants}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Image
                            src={device.src}
                            alt={`Responsive ${device.label} layout view`}
                            fill
                            className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            priority={index === 0}
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                )
            })}

            {/* Bottom Responsive Badge */}
            <motion.div 
                className="absolute -bottom-2 sm:-bottom-4 md:bottom-0 left-1/2 -translate-x-1/2 bg-fg/40 border border-white/10 backdrop-blur-md rounded-full px-4 sm:px-5 py-2 sm:py-2.5 flex items-center gap-2 sm:gap-3 shadow-2xl z-40 whitespace-nowrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
            >
                <div className="flex items-center gap-1.5 sm:gap-2 text-accent">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ActiveIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                        </motion.div>
                    </AnimatePresence>
                    <AnimatePresence mode="wait">
                        <motion.span 
                            key={currentIndex}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="text-[10px] sm:text-[11px] font-mono tracking-wider font-medium"
                        >
                            {devices[currentIndex].label}
                        </motion.span>
                    </AnimatePresence>
                </div>
                <div className="w-[1px] h-3 bg-white/20" />
                <span className="text-[9px] sm:text-[10px] text-muted font-mono tracking-widest uppercase">100% Responsivo</span>
            </motion.div>
        </div>
    )
}
