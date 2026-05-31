'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/constants'
import Image from 'next/image'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 24)
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
                scrolled
                    ? 'border-line/80 bg-white/92 shadow-[0_10px_40px_rgba(103,150,81,0.08)] backdrop-blur-xl'
                    : 'border-transparent bg-white/70 backdrop-blur-sm'
            }`}
        >
            <nav className="relative mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 lg:px-0">
                <a href="#home" className="group flex flex-col leading-none" aria-label="Voltar ao início">
                    <Image src="/images/logo.webp" alt="Logo" width={62} height={62}/>
                    
                </a>

                <div className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => {
                        const external = link.href.startsWith('http')

                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                target={external ? '_blank' : undefined}
                                rel={external ? 'noopener noreferrer' : undefined}
                                className="text-[12px] font-bold uppercase tracking-[0.16em] text-subtitle hover:text-accent"
                            >
                                {link.label}
                            </a>
                        )
                    })}

                    <a
                        href="https://wa.me/5511967173625"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-accent px-6 py-3 text-[12px] font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_12px_26px_rgba(103,150,81,0.24)] hover:-translate-y-0.5 hover:bg-title"
                    >
                        Orçamento
                    </a>
                </div>

                <button
                    type="button"
                    className="absolute right-5 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-title shadow-[0_10px_24px_rgba(103,150,81,0.1)] lg:hidden"
                    onClick={() => setMenuOpen((value) => !value)}
                    aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                >
                    {menuOpen ? <X size={21} /> : <Menu size={21} />}
                </button>
            </nav>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.22 }}
                        className="border-t border-line bg-white px-5 py-5 lg:hidden"
                    >
                        <div className="mx-auto flex max-w-7xl flex-col gap-2">
                            {navLinks.map((link) => {
                                const external = link.href.startsWith('http')

                                return (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target={external ? '_blank' : undefined}
                                        rel={external ? 'noopener noreferrer' : undefined}
                                        onClick={() => setMenuOpen(false)}
                                        className="rounded-full px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-subtitle hover:bg-mint hover:text-accent"
                                    >
                                        {link.label}
                                    </a>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
