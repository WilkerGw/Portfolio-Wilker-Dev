'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/constants'
import Image from 'next/image'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-bg/80' : 'bg-gradient-to-b from-bg/95 to-transparent'
                }`}
        >
            {/* Logo */}
            <a href="#" className="flex shrink-0">
                <span className="font-syne text-[11px] uppercase tracking-wider text-muted font-mono">Wilker Martins</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="text-[11px] uppercase tracking-widest text-muted hover:text-fg transition-colors"
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="https://wa.me/5511967173625"
                    target='_blank'
                    className="bg-accent text-bg font-mono text-[11px] uppercase tracking-wider px-5 py-2.5 hover:bg-fg transition-colors font-medium"
                >
                    Fale comigo
                </a>
            </div>

            {/* Mobile Hamburger */}
            <button
                className="md:hidden text-fg"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 right-0 bg-bg/98 backdrop-blur-lg border-b border-white/7 md:hidden"
                    >
                        <div className="flex flex-col px-6 py-8 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-sm uppercase tracking-widest text-muted hover:text-fg transition-colors font-mono"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="https://wa.me/5511967173625"
                                target="_blank"
                                onClick={() => setMenuOpen(false)}
                                className="bg-accent text-bg font-mono text-[11px] uppercase tracking-wider px-5 py-3 hover:bg-fg transition-colors font-medium text-center mt-2"
                            >
                                Fale comigo
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
