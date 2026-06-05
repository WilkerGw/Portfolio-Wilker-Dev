'use client'

import Image from 'next/image'
import { motion, type Variants } from 'framer-motion'
import {
    ChevronRight,
    ExternalLink,
    Globe2,
    Monitor,
    Smartphone,
    type LucideIcon,
} from 'lucide-react'
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

function ProjectAction({
    href,
    label,
    icon: Icon,
    variant = 'outline',
    ariaLabel,
}: {
    href: string
    label: string
    icon: LucideIcon
    variant?: 'outline' | 'solid'
    ariaLabel: string
}) {
    const isSolid = variant === 'solid'

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className={`group inline-flex min-h-[72px] w-full items-center justify-between gap-4 rounded-[1.75rem] px-6 py-4 lg:px-4 lg:py-2 text-sm font-extrabold uppercase tracking-[0.08em] shadow-[0_18px_38px_rgba(103,150,81,0.12)] ${
                isSolid
                    ? 'bg-accent text-white hover:-translate-y-0.5 hover:bg-title'
                    : 'border border-title/35 bg-white/70 text-title backdrop-blur hover:-translate-y-0.5 hover:border-accent hover:text-accent'
            }`}
        >
            <span className="inline-flex items-center gap-4">
                <Icon className="h-5 w-5 shrink-0" strokeWidth={1.65} aria-hidden="true" />
                <span>{label}</span>
            </span>
            {isSolid ? (
                <ChevronRight
                    className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-1"
                    strokeWidth={1.9}
                    aria-hidden="true"
                />
            ) : (
                <ExternalLink
                    className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.8}
                    aria-hidden="true"
                />
            )}
        </a>
    )
}

function ProjectStatusAction({ label }: { label: string }) {
    return (
        <span className="inline-flex min-h-[72px] w-full items-center justify-between gap-4 rounded-[1.75rem] border border-title/20 bg-white/60 px-6 py-4 text-sm font-extrabold uppercase tracking-[0.08em] text-subtitle shadow-[0_18px_38px_rgba(103,150,81,0.08)] sm:max-w-[344px]">
            <span className="inline-flex items-center gap-4">
                <Globe2 className="h-6 w-6 shrink-0" strokeWidth={1.65} aria-hidden="true" />
                <span>{label}</span>
            </span>
            <ChevronRight className="h-6 w-6 shrink-0 opacity-35" strokeWidth={1.9} aria-hidden="true" />
        </span>
    )
}

function ProjectMobileAction({
    href,
    label,
    icon: Icon,
    variant = 'outline',
    ariaLabel,
}: {
    href: string
    label: string
    icon: LucideIcon
    variant?: 'outline' | 'solid'
    ariaLabel: string
}) {
    const isSolid = variant === 'solid'

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className={`group inline-flex min-h-11 items-center justify-between gap-3 rounded-[0.7rem] px-4 text-[10px] font-bold uppercase tracking-[0.08em] ${
                isSolid
                    ? 'w-full max-w-32 bg-accent text-white shadow-[0_14px_30px_rgba(103,150,81,0.2)] hover:-translate-y-0.5 hover:bg-title'
                    : 'w-full border border-title/55 bg-white/80 text-title backdrop-blur hover:-translate-y-0.5 hover:border-accent hover:text-accent'
            }`}
        >
            <span className="inline-flex items-center gap-2">
                <Icon className="h-4 w-4 shrink-0" strokeWidth={1.45} aria-hidden="true" />
                <span>{label}</span>
            </span>
            {isSolid ? (
                <ChevronRight
                    className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                />
            ) : (
                <ExternalLink
                    className="h-6 w-6 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.65}
                    aria-hidden="true"
                />
            )}
        </a>
    )
}

function ProjectMobileStatusAction({ label }: { label: string }) {
    return (
        <span className="inline-flex min-h-11 w-full max-w-40 items-center justify-between gap-3 rounded-[0.7rem] border border-title/20 bg-white/70 px-4 text-[10px] font-bold uppercase tracking-[0.08em] text-subtitle backdrop-blur">
            <span className="inline-flex items-center gap-2">
                <Globe2 className="h-4 w-4 shrink-0" strokeWidth={1.45} aria-hidden="true" />
                <span>{label}</span>
            </span>
            <ChevronRight className="h-6 w-6 shrink-0 opacity-35" strokeWidth={1.75} aria-hidden="true" />
        </span>
    )
}

function ProjectShowcase({ project, isFirst }: { project: Project; isFirst: boolean }) {
    const hasLiveLink = project.link !== '#'
    const mockupImage = project.mockupImage ?? project.image ?? '/images/portfolio-mockup.webp'
    const pdfActions = [
        project.mobileDesignPdf
            ? {
                  href: project.mobileDesignPdf,
                  label: 'Mobile',
                  icon: Smartphone,
                  ariaLabel: `Abrir o design mobile do projeto ${project.title} em PDF em uma nova aba`,
              }
            : null,
        project.desktopDesignPdf
            ? {
                  href: project.desktopDesignPdf,
                  label: 'Desktop',
                  icon: Monitor,
                  ariaLabel: `Abrir o design desktop do projeto ${project.title} em PDF em uma nova aba`,
              }
            : null,
    ].filter(Boolean) as Array<{
        href: string
        label: string
        icon: LucideIcon
        ariaLabel: string
    }>

    return (
        <motion.section
            id={isFirst ? 'projects' : `project-${project.id}`}
            variants={sectionVariants}
            initial={false}
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
            className="scroll-enter relative isolate overflow-hidden bg-bg px-0 py-12 sm:px-5 md:px-10 md:py-24"
        >
            <div className="relative mx-auto overflow-hidden rounded-none bg-white shadow-none  lg:max-w-7xl lg:rounded-[2.2rem] lg:shadow-[0_30px_90px_rgba(103,150,81,0.08)]">
                <div
                    className="absolute inset-x-[-24%] bottom-0 h-[64%] bg-mint [clip-path:ellipse(78%_58%_at_50%_100%)] lg:hidden"
                    aria-hidden="true"
                />
                {/* Mobile layout */}
                <div className="relative z-10 px-4 pb-10 pt-4 lg:hidden">
                    <motion.div
                        variants={{
                            hidden: {},
                            show: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
                        }}
                        className="relative mx-auto w-[calc(100%-3rem)] max-w-80 overflow-hidden rounded-lg bg-accent px-4 py-3"
                    >
                        <Image
                            src="/images/logo.webp"
                            alt=""
                            width={220}
                            height={220}
                            className="absolute right-0 top-0 h-auto w-36 opacity-5"
                        />
                        <motion.span variants={childVariants} className="relative block text-[10px] font-medium leading-4 text-white">
                            {project.kicker}
                        </motion.span>
                        <motion.h2
                            variants={childVariants}
                            className="relative mt-1 font-display text-2xl font-extrabold leading-none text-[#b9ff91]"
                        >
                            {project.title}
                        </motion.h2>
                        <motion.p variants={childVariants} className="relative mt-2 max-w-60 text-[11px] font-medium leading-4 text-white">
                            {project.result}
                        </motion.p>
                    </motion.div>

                    <motion.div variants={childVariants} className="relative z-10 mt-7 flex justify-center">
                        <Image
                            src={mockupImage}
                            alt={`Mockup do projeto ${project.title} em notebook e smartphone`}
                            width={900}
                            height={562}
                            sizes="(max-width: 1023px) 390px"
                            className="h-auto w-[108%] object-contain drop-shadow-[0_24px_38px_rgba(35,48,31,0.18)]"
                        />
                    </motion.div>

                    <motion.div
                        variants={childVariants}
                        className="relative z-10 mx-auto mt-8 flex max-w-[306px] flex-col items-center gap-4"
                        aria-label={`Ações do projeto ${project.title} no mobile`}
                    >
                        {pdfActions.length > 0 ? (
                            <div className={`grid w-full gap-4 ${pdfActions.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                                {pdfActions.map((action) => (
                                    <ProjectMobileAction
                                        key={action.label}
                                        href={action.href}
                                        label={action.label}
                                        icon={action.icon}
                                        ariaLabel={action.ariaLabel}
                                    />
                                ))}
                            </div>
                        ) : null}

                        {hasLiveLink ? (
                            <ProjectMobileAction
                                href={project.link}
                                label="Ver"
                                icon={Globe2}
                                variant="solid"
                                ariaLabel={`Abrir o projeto ${project.title} em uma nova aba`}
                            />
                        ) : (
                            <ProjectMobileStatusAction label="Em breve" />
                        )}
                    </motion.div>
                </div>
                        
                <div
                    className="absolute inset-x-0 top-0 hidden h-[46%] min-h-[320px] rounded-[2.2rem] bg-accent lg:block"
                    aria-hidden="true"
                >
                    <Image
                        src="/images/logo.webp"
                        alt=""
                        width={700}
                        height={700}
                        className="absolute bottom-0 right-0 h-auto w-72 object-cover opacity-10 md:w-80 lg:w-160"
                    />
                </div>
                <div
                    className="absolute inset-x-[-24%] bottom-0 hidden h-[58%] bg-mint [clip-path:ellipse(72%_52%_at_54%_100%)] lg:block"
                    aria-hidden="true"
                />
                <div className="relative z-10 hidden min-h-[720px] gap-8 px-6 pb-8 pt-10 sm:px-8 lg:grid lg:grid-cols-[360px_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:px-14 lg:pb-12 lg:pt-12">
                    <motion.div
                        variants={{
                            hidden: {},
                            show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
                        }}
                        className="order-1 flex min-w-0 flex-col lg:col-start-1 lg:row-start-1"
                    >
                        <motion.span variants={childVariants} className="max-w-2xl text-[1rem] leading-6 text-white">
                            {project.kicker}
                        </motion.span>

                        <motion.h2
                            variants={childVariants}
                            className="font-display font-extrabold leading-[0.98] text-[#b9ff91] text-6xl lg:text-[4rem]"
                        >
                            {project.title}
                        </motion.h2>

                        <motion.p
                            variants={childVariants}
                            className="mt-4 max-w-2xl text-[1rem] leading-6 text-white"
                        >
                            {project.description}
                        </motion.p>

                        <motion.div
                            variants={childVariants}
                            className="mt-10 hidden flex-col gap-4 lg:mt-24 lg:flex"
                            aria-label={`Ações do projeto ${project.title}`}
                        >
                            {pdfActions.map((action) => (
                                <ProjectAction
                                    key={action.label}
                                    href={action.href}
                                    label={action.label}
                                    icon={action.icon}
                                    ariaLabel={action.ariaLabel}
                                />
                            ))}

                            {hasLiveLink ? (
                                <ProjectAction
                                    href={project.link}
                                    label="Ver"
                                    icon={Globe2}
                                    variant="solid"
                                    ariaLabel={`Abrir o projeto ${project.title} em uma nova aba`}
                                />
                            ) : (
                                <ProjectStatusAction label="Em breve" />
                            )}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={childVariants}
                        className="relative flex items-start justify-center lg:min-h-0 lg:items-end lg:justify-end lg:pt-48"
                    >
                        <Image
                            src={mockupImage}
                            alt={`Mockup do projeto ${project.title} em notebook e smartphone`}
                            width={900}
                            height={562}
                            sizes="(min-width: 1024px) 760px, 92vw"
                            className="relative z-10 h-auto w-[70%] object-contain drop-shadow-[0_30px_45px_rgba(35,48,31,0.22)]"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export default function ProjectsSection() {
    const multimarcasProject = projects.find((project) => project.title === 'Multimarcas')
    const orderedProjects = multimarcasProject
        ? [multimarcasProject, ...projects.filter((project) => project.title !== 'Multimarcas')]
        : projects

    return (
        <>
            {orderedProjects.map((project, index) => (
                <ProjectShowcase key={project.id} project={project} isFirst={index === 0} />
            ))}
        </>
    )
}
