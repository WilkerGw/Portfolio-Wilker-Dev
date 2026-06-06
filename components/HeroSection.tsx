'use client'

import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'framer-motion'
import { ArrowRight, CheckCircle2, Gauge, MessageCircle, MousePointerClick, Smartphone } from 'lucide-react'
import { heroTags } from '@/lib/constants'

const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.18,
        },
    },
}

const item: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
    },
}

const floatingLabels = [
    { label: 'SEO', className: 'right-19 top-[34%]', mobileClassName: 'right-1 top-[38%]' },
    { label: 'Desempenho', className: 'left-[9%] top-[14%]', mobileClassName: 'left-[9%] top-[14%]' },
    { label: 'Acessibilidade', className: 'right-[7%] top-[14%]', mobileClassName: 'right-[7%] top-[14%]' },
    { label: 'Responsividade mobile', className: '-left-0 top-[32%]', mobileClassName: '-left-5 top-[35%]' },
]

const marqueeGroups = Array.from({ length: 6 }, (_, index) => index)

export default function HeroSection() {
    const shouldReduceMotion = useReducedMotion()
    const { scrollYProgress } = useScroll()
    const heroVisualY = useTransform(scrollYProgress, [0, 0.22], [0, 38])
    const heroVisualScale = useTransform(scrollYProgress, [0, 0.22], [1, 0.97])

    return (
        <section
            id="home"
            className="relative h-auto flex items-start overflow-hidden bg-bg px-5 py-20 lg:py-16"
        >

            <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-4 lg:grid-cols-[1.02fr_0.98fr]">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="w-full min-w-0 max-w-[calc(100vw-2.5rem)] md:max-w-3xl text-center lg:text-start"
                >
                    <motion.div
                        variants={item}
                        className="inline-flex max-w-full items-start gap-2 rounded-full py-1 text-[.8rem] font-medium leading-5 tracking-[0.04em] text-accent "
                    >
                        <CheckCircle2 size={15} />
                        <span className="min-w-0 text-[.8rem]">Desenvolvedor web full stack</span>
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className="font-display my-2 text-4xl font-extrabold leading-[1] text-title lg:text-5xl"
                    >
                        Wilker Martins
                        <span className="block mt-2 text-accent font-bold">sites que viram resultado.</span>
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="my-4 max-w-2xl font-medium leading-6 text-subtitle text-[.8rem]"
                    >
                        Landing pages, sites intitucionais, chatbots de IA para transformar visitantes em contatos qualificados.
                    </motion.p>

                    <motion.div variants={item} className="my-2 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#projects"
                            className="inline-flex min-h-14 w-full max-w-[350px] items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-sm font-medium tracking-[0.12em] text-white shadow-[0_16px_36px_rgba(103,150,81,0.25)] hover:-translate-y-0.5 hover:bg-title lg:w-auto lg:max-w-none"
                        >
                            Ver projetos <ArrowRight size={18} />
                        </a>
                        <a
                            href="https://wa.me/5511967173625"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-14 w-full max-w-[350px] items-center justify-center gap-3 rounded-full border border-line bg-white px-8 py-4 text-sm font-medium tracking-[0.12em] text-title hover:-translate-y-0.5 hover:border-accent hover:text-accent lg:w-auto lg:max-w-none"
                        >
                            Falar comigo <MessageCircle size={18} />
                        </a>
                    </motion.div>

                    <motion.div variants={item} className="mt-8 grid grid-cols-3 gap-2 sm:gap-3 text-start">
                        {[
                            { icon: Gauge, title: '90+ PageSpeed', text: 'Páginas rápidas' },
                            { icon: Smartphone, title: 'Mobile first', text: 'Fluxo fluido no celular' },
                            { icon: MousePointerClick, title: 'SEO', text: 'Conversão sem ruído' },
                        ].map((stat) => (
                            <div key={stat.title} className="lg:flex lg:items-center min-w-0 rounded-2xl border border-line bg-white/80 p-3 sm:p-4">
                                <stat.icon className="mb-2 mx-auto lg:mb-0 lg:mr-2 h-5 w-5 text-accent" aria-hidden="true" />
                                <div className="text-center lg:text-start">
                                    <strong className="block text-[.8rem] font-extrabold leading-tight text-title">{stat.title}</strong>
                                    <span className="block text-[.8rem] font-medium leading-snug text-body">{stat.text}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        y: shouldReduceMotion ? 0 : heroVisualY,
                        scale: shouldReduceMotion ? 1 : heroVisualScale,
                    }}
                    className="lg:ml-30 relative mx-auto w-full min-w-0 max-w-[560px]"
                >
                    <div className="absolute left-8 right-8 top-0 h-24 rounded-full blur-2xl" aria-hidden="true" />
                    <div className="relative min-h-[520px] rounded-[2rem]">
                        <Image 
                        src="/images/logo.webp" 
                        alt="Logo, Wilker Martins" 
                        className="absolute w-full h-auto object-cover object-center opacity-8"
                        width={560}
                        height={560}
                        />
                        <Image
                            src="/images/wilker/02.webp"
                            alt="Wilker Martins, desenvolvedor web"
                            fill
                            priority
                            sizes="(min-width: 1024px) 520px, 90vw"
                            className="object-contain object-center w-1 h-auto"
                        />

                        <div className="pointer-events-none absolute inset-0 z-10 md:hidden" aria-hidden="true">
                            {floatingLabels.map((tag) => (
                                <span
                                    key={tag.label}
                                    className={`absolute ${tag.mobileClassName} max-w-[118px] rounded-2xl border border-line bg-white/80 px-2.5 py-1.5 text-center text-[8px] font-extrabold uppercase leading-tight text-accent shadow-[0_12px_28px_rgba(103,150,81,0.1)]`}
                                >
                                    {tag.label}
                                </span>
                            ))}
                        </div>

                        <div className="absolute flex flex-col items-center w-full lg:w-[70%] bottom-0 left-1/2 -translate-x-1/2 rounded-3xl bg-white/80 border border-line px-5 py-3 shadow-[0_28px_80px_rgba(103,150,81,0.14)] backdrop-blur">
                           <h1 className="text-[.8rem] lg:text-md uppercase font-bold text-title">Sites otimizados para Google Ads e SEO</h1>
                            <Image
                                src="/images/google-notas.webp"
                                alt="Wilker Martins, desenvolvedor web"
                                width={500}
                                height={500}
                                className='object-contain object-center h-auto w-80'
                            />
                        </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
                        {floatingLabels.map((tag, index) => (
                            <motion.span
                                key={tag.label}
                                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ delay: 0.55 + index * 0.12, duration: 0.6 }}
                                className={`absolute ${tag.className} whitespace-nowrap rounded-2xl border border-line px-4 py-2 text-[.8rem] font-bold uppercase text-accent shadow-[0_16px_40px_rgba(103,150,81,0.13)]`}
                            >
                                {tag.label}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 z-10 border-y border-line bg-white/88 py-3 backdrop-blur">
                <div className="mx-auto max-w-7xl overflow-hidden px-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] md:px-10">
                    <span className="sr-only">{heroTags.join(', ')}</span>
                    <motion.div
                        aria-hidden="true"
                        className="flex w-max"
                        animate={shouldReduceMotion ? undefined : { x: ['0%', `${-100 / marqueeGroups.length}%`] }}
                        transition={shouldReduceMotion ? undefined : { duration: 24, ease: 'linear', repeat: Infinity }}
                    >
                        {marqueeGroups.map((groupIndex) => (
                            <div key={groupIndex} className="flex shrink-0 gap-4 pr-4">
                                {heroTags.map((tag) => (
                                    <span
                                        key={`${groupIndex}-${tag}`}
                                        className="whitespace-nowrap rounded-full bg-mint px-4 py-2 text-[.7rem] font-medium tracking-[0.12em] text-accent"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
