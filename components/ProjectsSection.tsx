'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { Project, projects } from '@/lib/constants'

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 42 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
}

const childVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.62, ease: [0.16, 1, 0.3, 1] },
    },
}

function ProjectMetric({ value, label }: { value: number; label: string }) {
    return (
        <div className="rounded-2xl border border-line bg-white px-4 py-4 shadow-[0_12px_30px_rgba(103,150,81,0.06)]">
            <strong className="block text-3xl font-extrabold leading-none text-accent">{value}</strong>
            <span className="mt-2 block text-[11px] font-bold uppercase leading-4 tracking-[0.12em] text-subtitle">
                {label}
            </span>
        </div>
    )
}

function ProjectMockup({ project }: { project: Project }) {
    return (
        <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -left-6 top-10 h-28 w-28 rounded-full border-[18px] border-mint" aria-hidden="true" />
            <div className="absolute -right-5 bottom-12 h-36 w-36 rounded-[2rem] bg-mint rotate-12" aria-hidden="true" />

            <div
                className="relative overflow-hidden rounded-[2rem] border border-line p-4 shadow-[0_28px_80px_rgba(103,150,81,0.13)]"
                style={{ backgroundImage: project.pattern }}
            >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.45rem] border border-white bg-title shadow-[0_18px_46px_rgba(102,102,102,0.16)]">
                    <div className="absolute left-0 right-0 top-0 z-10 flex h-8 items-center gap-2 border-b border-white/10 bg-[#2d2d2d] px-4">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                    </div>
                    <Image
                        src={project.image}
                        alt={`Tela desktop do projeto ${project.title}`}
                        fill
                        sizes="(min-width: 1024px) 620px, 92vw"
                        className="object-cover object-top"
                    />
                </div>

                <div className="absolute bottom-0 right-7 w-[24%] min-w-[92px] translate-y-5 overflow-hidden rounded-t-[1.5rem] border-[6px] border-title bg-title shadow-[0_24px_50px_rgba(102,102,102,0.22)]">
                    <div className="relative aspect-[9/19]">
                        <Image
                            src={project.mobileImage}
                            alt={`Tela mobile do projeto ${project.title}`}
                            fill
                            sizes="160px"
                            className="object-cover object-top"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProjectShowcase({ project, index }: { project: Project; index: number }) {
    const hasLiveLink = project.link !== '#'

    return (
        <motion.section
            id={index === 0 ? 'projects' : `project-${project.id}`}
            variants={sectionVariants}
            initial={false}
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
            className="scroll-enter relative isolate overflow-hidden border-t border-line bg-bg px-5 py-20 md:px-10 md:py-28"
        >
            <div className="project-watermark opacity-80" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-mint/55 [clip-path:polygon(0_55%,100%_8%,100%_100%,0_100%)]" aria-hidden="true" />

            <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
                <motion.div
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
                    }}
                    className="max-w-2xl"
                >
                    <motion.div variants={childVariants} className="mb-6 flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-accent px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.14em] text-white">
                            Projeto {String(project.id).padStart(2, '0')}
                        </span>
                        <span className="text-[12px] font-extrabold uppercase tracking-[0.14em] text-accent">
                            {project.kicker}
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={childVariants}
                        className="font-display text-4xl font-extrabold leading-[1.08] text-title md:text-5xl lg:text-6xl"
                    >
                        {project.title}
                    </motion.h2>

                    <motion.p
                        variants={childVariants}
                        className="mt-5 text-xl font-extrabold leading-8 text-subtitle md:text-2xl"
                    >
                        {project.result}
                    </motion.p>

                    <motion.p variants={childVariants} className="mt-5 text-base font-medium leading-8 text-body">
                        {project.description}
                    </motion.p>

                    <motion.ul variants={childVariants} className="mt-7 grid gap-3 sm:grid-cols-3">
                        {project.highlights.map((highlight) => (
                            <li
                                key={highlight}
                                className="flex items-start gap-3 rounded-2xl border border-line bg-white/80 p-4 text-sm font-bold leading-6 text-title"
                            >
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                                {highlight}
                            </li>
                        ))}
                    </motion.ul>

                    <motion.div variants={childVariants} className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {project.metrics.map((metric) => (
                            <ProjectMetric key={metric.label} value={metric.value} label={metric.label} />
                        ))}
                    </motion.div>

                    <motion.div variants={childVariants} className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
                        {hasLiveLink ? (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_16px_36px_rgba(103,150,81,0.22)] hover:-translate-y-0.5 hover:bg-title"
                            >
                                Visitar projeto <ArrowUpRight size={18} />
                            </a>
                        ) : (
                            <span className="inline-flex min-h-14 items-center justify-center rounded-full border border-line bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-subtitle">
                                Projeto em evolução
                            </span>
                        )}

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-mint px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.1em] text-accent"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    variants={childVariants}
                    initial={false}
                    whileInView="show"
                    viewport={{ once: true, amount: 0.22 }}
                >
                    <ProjectMockup project={project} />
                </motion.div>
            </div>
        </motion.section>
    )
}

export default function ProjectsSection() {
    return (
        <>
            {projects.map((project, index) => (
                <ProjectShowcase key={project.id} project={project} index={index} />
            ))}
        </>
    )
}
