'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
    const dotRef = useRef<HTMLDivElement>(null)
    const ringRef = useRef<HTMLDivElement>(null)
    const [hovering, setHovering] = useState(false)
    const coords = useRef({ mx: -100, my: -100, rx: -100, ry: -100 })

    useEffect(() => {
        let animationFrameId: number;

        const moveCursor = (e: MouseEvent) => {
            coords.current.mx = e.clientX
            coords.current.my = e.clientY
            // Inicializa a posição do anel instantaneamente no primeiro movimento
            if (coords.current.rx === -100) {
                coords.current.rx = e.clientX
                coords.current.ry = e.clientY
            }
        }

        const animate = () => {
            const c = coords.current;
            c.rx += (c.mx - c.rx) * 0.3
            c.ry += (c.my - c.ry) * 0.3

            if (dotRef.current) {
                dotRef.current.style.transform = `translate(${c.mx - 4}px, ${c.my - 4}px)`
            }
            if (ringRef.current) {
                ringRef.current.style.transform = `translate(${c.rx - (hovering ? 30 : 18)}px, ${c.ry - (hovering ? 30 : 18)}px)`
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        const handlePointerOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('a, button, [role="button"]')) {
                setHovering(true)
            }
        }

        const handlePointerOut = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (target.closest('a, button, [role="button"]')) {
                setHovering(false)
            }
        }

        document.addEventListener('mousemove', moveCursor)
        document.addEventListener('mouseover', handlePointerOver)
        document.addEventListener('mouseout', handlePointerOut)
        animate()

        return () => {
            document.removeEventListener('mousemove', moveCursor)
            document.removeEventListener('mouseover', handlePointerOver)
            document.removeEventListener('mouseout', handlePointerOut)
            cancelAnimationFrame(animationFrameId)
        }
    }, [hovering])

    return (
        <div className="hidden md:block">
            <div
                ref={dotRef}
                className="fixed top-0 left-0 z-[9999] pointer-events-none w-2 h-2 rounded-full bg-accent"
                style={{ willChange: 'transform' }}
            />
            <div
                ref={ringRef}
                className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full border transition-all duration-100"
                style={{
                    width: hovering ? 60 : 36,
                    height: hovering ? 60 : 36,
                    borderColor: hovering ? 'rgba(124,255,203,0.4)' : 'rgba(124,255,203,0.25)',
                    backgroundColor: hovering ? 'rgba(124,255,203,0.06)' : 'transparent',
                    willChange: 'transform',
                }}
            />
        </div>
    )
}
