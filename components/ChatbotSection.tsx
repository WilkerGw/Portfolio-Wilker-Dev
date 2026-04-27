'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { MessageSquare, Zap, Target, TrendingUp, DollarSign, ArrowRight } from 'lucide-react'

const messages = [
    { id: 1, text: "Olá! Como posso ajudar sua empresa hoje?", sender: "bot" },
    { id: 2, text: "Gostaria de saber como aumentar minhas vendas.", sender: "user" },
    { id: 3, text: "Com nossa automação, convertemos visitantes em leads qualificados 24/7. 🚀", sender: "bot" },
    { id: 4, text: "Isso reduz meus custos operacionais?", sender: "user" },
    { id: 5, text: "Sim! Em média 40% de redução com atendimento instantâneo.", sender: "bot" },
]

const benefits = [
    {
        title: "Suporte 24/7",
        description: "Atendimento instantâneo a qualquer hora, sem pausas.",
        icon: Zap,
        color: "var(--color-accent)"
    },
    {
        title: "Redução de Custos",
        description: "Automatize processos e foque no que importa.",
        icon: DollarSign,
        color: "#ff6b6b"
    },
    {
        title: "Qualificação de Leads",
        description: "Filtre os melhores clientes automaticamente.",
        icon: Target,
        color: "var(--color-accent)"
    },
    {
        title: "Vendas Automáticas",
        description: "O bot fecha negócios por você, sem demora.",
        icon: TrendingUp,
        color: "#7cffcb"
    }
]

export default function ChatbotSection() {
    const refLeft = useScrollReveal()
    const refRight = useScrollReveal()
    const [visibleMessages, setVisibleMessages] = useState<typeof messages>([])
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleMessages(prev => {
                if (index >= messages.length) {
                    setIndex(0)
                    return []
                }
                return [...prev, messages[index]]
            })
            setIndex(prev => prev + 1)
        }, 2500)

        return () => clearInterval(timer)
    }, [index])

    return (
        <section id="chatbot" className="bg-bg px-6 md:px-12 py-20 md:py-[120px] overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                {/* Left Column: Simulator */}
                <div ref={refLeft as any} className="reveal-left order-2 lg:order-1 relative flex justify-center">
                    <div className="relative w-full max-w-[280px] bg-bg2 rounded-[32px] border-[6px] border-white/5 aspect-[9/16] overflow-hidden shadow-2xl shadow-accent/5">
                        {/* Phone Header */}
                        <div className="bg-white/3 px-4 py-3 border-b border-white/5 flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                                <MessageSquare className="text-accent" size={15} />
                            </div>
                            <div>
                                <p className="text-[11px] font-bold font-syne leading-none">AI Assistant</p>
                                <div className="flex items-center gap-1 mt-0.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                    <p className="text-[9px] text-muted font-mono">Online agora</p>
                                </div>
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="p-3 flex flex-col gap-2.5">
                            <AnimatePresence mode="popLayout">
                                {visibleMessages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.8, y: 15, x: msg.sender === 'bot' ? -10 : 10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 250,
                                            damping: 25,
                                            mass: 0.8
                                        }}
                                        className={`max-w-[85%] px-3 py-2 rounded-2xl text-[10px] font-mono leading-relaxed ${msg.sender === 'bot'
                                            ? 'bg-white/5 text-fg self-start rounded-tl-none'
                                            : 'bg-accent text-bg self-end rounded-tr-none font-bold'
                                            }`}
                                    >
                                        {msg.text}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Glass decoration */}
                        <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-[26px]" />
                    </div>

                    {/* Abstract background elements */}
                    <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/10 blur-[60px] rounded-full" />
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent2/5 blur-[60px] rounded-full" />
                </div>

                {/* Right Column: Content */}
                <div ref={refRight as any} className="reveal-right order-1 lg:order-2">
                    <p className="text-[10px] uppercase tracking-widest2 text-accent mb-3 font-mono">
                        Evolução Digital
                    </p>
                    <h2 className="font-syne font-extrabold text-2xl md:text-4xl leading-tight tracking-tight mb-6">
                        Transforme visitantes <br /> em <span className="text-accent italic">faturamento real</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="group">
                                <div className="flex items-center gap-2.5 mb-1.5">
                                    <div className="p-1.5 rounded-lg bg-white/3 group-hover:bg-white/7 transition-colors">
                                        <benefit.icon size={16} style={{ color: benefit.color }} />
                                    </div>
                                    <h3 className="font-syne font-bold text-[13px] uppercase tracking-wider">{benefit.title}</h3>
                                </div>
                                <p className="text-[11px] text-muted leading-relaxed group-hover:text-fg/80 transition-colors pl-[34px]">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <a
                        href="https://wa.me/5511967173625?text=Olá! Gostaria de falar sobre chatbots para minha empresa."
                        target="_blank"
                        className="inline-flex items-center gap-3 bg-accent text-bg px-6 py-3 rounded-full font-syne font-bold text-sm hover:scale-105 hover:shadow-[0_0_30px_-5px_var(--color-accent)] transition-all group"
                    >
                        Falar com Especialista
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    )
}
