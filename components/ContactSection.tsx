'use client'

import { useState } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { socialLinks } from '@/lib/constants'
import { ArrowUpRight, Send } from 'lucide-react'

export default function ContactSection() {
    const leftRef = useScrollReveal()
    const rightRef = useScrollReveal()
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus('sending')

        const form = e.currentTarget
        const formData = new FormData(form)

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            })

            if (response.ok) {
                setStatus('sent')
                form.reset()
                setTimeout(() => setStatus('idle'), 4000)
            } else {
                setStatus('error')
                setTimeout(() => setStatus('idle'), 4000)
            }
        } catch {
            setStatus('error')
            setTimeout(() => setStatus('idle'), 4000)
        }
    }

    return (
        <section id="contact" className="hidden px-6 md:px-12 py-20 md:py-[120px] relative overflow-hidden">
            {/* Background Glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(124,255,203,0.04), transparent)',
                }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10 max-w-7xl mx-auto w-full">
                {/* Left Column */}
                <div ref={leftRef as React.RefObject<HTMLDivElement>} className="reveal">
                    <p className="text-[10px] uppercase tracking-widest2 text-accent mb-4 font-mono">
                        Contato
                    </p>
                    <h2 className="font-syne font-extrabold text-3xl md:text-4xl leading-[1.05] tracking-tight mb-6">
                        Vamos construir{' '}
                        <span className="text-accent">algo juntos</span>?
                    </h2>
                    <p className="text-sm leading-[1.8] text-muted mb-12">
                        Tem um projeto em mente ou quer discutir uma ideia? Me manda uma mensagem
                        — respondo rápido.
                    </p>

                    {/* Social Links */}
                    <div className="flex flex-col">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex justify-between items-center py-5 border-b border-white/[0.07] text-fg hover:text-accent hover:pl-3 transition-all duration-300 group"
                            >
                                <span className="font-syne text-lg font-semibold">{link.label}</span>
                                <ArrowUpRight
                                    size={18}
                                    className="text-muted group-hover:text-accent group-hover:rotate-45 transition-all"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Column — Form */}
                <div ref={rightRef as React.RefObject<HTMLDivElement>} className="reveal delay-2">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        {/* Web3Forms access key — substituir pela sua chave */}
                        <input type="hidden" name="access_key" value="SUA_CHAVE_WEB3FORMS_AQUI" />

                        <div>
                            <label htmlFor="name" className="text-[10px] uppercase tracking-widest2 text-muted mb-2 block font-mono">
                                Nome
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="Seu nome"
                                className="w-full bg-bg2 border border-white/[0.07] text-fg font-mono text-sm px-5 py-4 outline-none focus:border-accent/40 transition-colors placeholder:text-muted/50"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="text-[10px] uppercase tracking-widest2 text-muted mb-2 block font-mono">
                                E-mail
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="seu@email.com"
                                className="w-full bg-bg2 border border-white/[0.07] text-fg font-mono text-sm px-5 py-4 outline-none focus:border-accent/40 transition-colors placeholder:text-muted/50"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="text-[10px] uppercase tracking-widest2 text-muted mb-2 block font-mono">
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                placeholder="Conte sobre seu projeto..."
                                className="w-full bg-bg2 border border-white/[0.07] text-fg font-mono text-sm px-5 py-4 outline-none focus:border-accent/40 transition-colors placeholder:text-muted/50 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'sending'}
                            className="bg-accent text-bg font-mono text-[12px] uppercase tracking-wider font-medium px-8 py-[18px] hover:bg-fg hover:-translate-y-0.5 transition-all self-start mt-2 flex items-center gap-2 disabled:opacity-60"
                        >
                            {status === 'sending' ? (
                                'Enviando...'
                            ) : status === 'sent' ? (
                                'Mensagem enviada ✓'
                            ) : status === 'error' ? (
                                'Erro — tente novamente'
                            ) : (
                                <>
                                    Enviar mensagem <Send size={14} />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
