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
import {
    projects,
    type Project,
    type ProjectAction as ProjectActionData,
    type ProjectActionIcon,
} from '@/lib/constants'

// O mesmo botão é reaproveitado em dois tamanhos: mobile e desktop.
type ActionSize = 'mobile' | 'desktop'

// Mapa que transforma o texto configurado no constants.ts em ícone real.
// Para editar o ícone manualmente, use: "mobile", "desktop" ou "external".
const actionIcons: Record<ProjectActionIcon, LucideIcon> = {
    mobile: Smartphone,
    desktop: Monitor,
    external: Globe2,
}

// Animação aplicada em cada seção completa quando ela entra na tela.
// O container fica visível desde o início para evitar "vão branco" durante o scroll.
const sectionVariants: Variants = {
    hidden: { opacity: 1, y: 20, scale: 0.995 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.62, ease: [0.16, 1, 0.3, 1] },
    },
}

// Animação aplicada nos elementos internos, criando entrada suave em cascata.
const childVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
    },
}

// Títulos ganham mais presença: entram de baixo, levemente comprimidos e desfocados.
// Ao sair da tela, voltam para o estado "hidden", criando a animação de saída.
const titleVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -14,
        y: 28,
        scale: 0.97,
        filter: 'blur(6px)',
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.86, ease: [0.16, 1, 0.3, 1] },
    },
}

// O grupo de botões controla o efeito em cascata dos botões internos.
const buttonGroupVariants: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08, delayChildren: 0.04 },
    },
}

// Cada botão aparece com deslocamento, escala e blur para a entrada ficar mais marcada.
const buttonVariants: Variants = {
    hidden: {
        opacity: 0,
        x: -18,
        y: 10,
        scale: 0.94,
        filter: 'blur(3px)',
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.68, ease: [0.16, 1, 0.3, 1] },
    },
}

// No desktop, os botões nunca ficam totalmente transparentes.
// Isso evita que eles "sumam" caso o estado de scroll fique entre entrada e saída.
const desktopButtonVariants: Variants = {
    hidden: {
        opacity: 1,
        x: -16,
        y: 10,
        scale: 0.97,
        filter: 'blur(2px)',
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.68, ease: [0.16, 1, 0.3, 1] },
    },
}

// A imagem principal entra com movimento amplo, rotação sutil e blur.
const mockupVariants: Variants = {
    hidden: {
        opacity: 0,
        x: 34,
        y: 24,
        rotate: -2,
        scale: 0.94,
        filter: 'blur(6px)',
    },
    show: {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: { duration: 0.96, ease: [0.16, 1, 0.3, 1] },
    },
}

// Retorna o mockup do projeto.
// Se algum projeto não tiver mockup cadastrado, usa uma imagem padrão do portfólio.
function getProjectMockup(project: Project) {
    return project.mockupImage ?? '/images/portfolio-mockup.webp'
}

// Ordena os projetos antes da renderização.
// A Multimarcas fica em primeiro porque o menu "Projetos" aponta para #projects.
function getOrderedProjects() {
    const featuredProject = projects.find((project) => project.title === 'Volt Energético')

    if (!featuredProject) {
        return projects
    }

    return [
        featuredProject,
        ...projects.filter((project) => project.id !== featuredProject.id),
    ]
}

// Botão reutilizável da seção.
// Os dados dele vêm manualmente do array "actions" em frontend/lib/constants.ts.
function ProjectAction({
    action,
    size,
}: {
    action: ProjectActionData
    size: ActionSize
}) {
    // A variante "solid" destaca a ação principal de visitar o projeto.
    const isSolid = action.variant === 'solid'

    // O tamanho muda espaçamentos, tipografia e ícones entre mobile e desktop.
    const isMobile = size === 'mobile'
    const Icon = actionIcons[action.icon]

    // Links principais usam seta; links secundários usam ícone de abrir em nova aba.
    const EndIcon = isSolid ? ChevronRight : ExternalLink

    // Classes separadas por tamanho deixam o JSX mais limpo.
    const sizeClasses = isMobile
        ? 'gap-3 rounded-[0.7rem] px-4 py-2 text-[10px] font-bold'
        : 'gap-4 rounded-[1rem] px-4 py-2 text-sm font-extrabold'

    // Classes separadas por variante evitam duplicar o componente para cada estilo.
    const variantClasses = isSolid
        ? 'bg-accent text-white shadow-[0_14px_30px_rgba(103,150,81,0.2)] hover:bg-title'
        : 'border border-title/55 bg-white/80 text-title shadow-[0_18px_38px_rgba(103,150,81,0.12)] backdrop-blur hover:border-accent hover:text-accent'

    return (
        <motion.a
            whileHover={{ scale: isSolid ? 1.04 : 1.03, y: -4 }}
            whileTap={{ scale: 0.96, y: 0 }}
            href={action.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={action.ariaLabel}
            className={`group inline-flex w-full items-center justify-between tracking-[0.08em] ${sizeClasses} ${variantClasses}`}
        >
            <span className={`inline-flex items-center ${isMobile ? 'gap-2' : 'gap-4'}`}>
                <Icon
                    className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} shrink-0`}
                    strokeWidth={isMobile ? 1.45 : 1.65}
                    aria-hidden="true"
                />
                <span>{action.label}</span>
            </span>
            <EndIcon
                className={`${isMobile ? 'h-4 w-4' : 'h-6 w-6'} shrink-0 transition-transform ${
                    isSolid
                        ? 'group-hover:translate-x-0.5'
                        : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                }`}
                strokeWidth={isMobile ? 1.65 : 1.8}
                aria-hidden="true"
            />
        </motion.a>
    )
}

// Estado visual para projetos sem ação principal cadastrada.
// Usa <span> em vez de <a>, porque não existe navegação para executar.
function ProjectStatus({ size }: { size: ActionSize }) {
    const isMobile = size === 'mobile'

    return (
        <motion.span
            className={`inline-flex w-full items-center justify-between border border-title/20 bg-white/70 uppercase tracking-[0.08em] text-subtitle backdrop-blur ${
                isMobile
                    ? 'min-h-11 gap-3 rounded-[0.7rem] px-4 text-[10px] font-bold'
                    : 'min-h-[72px] gap-4 rounded-[1.75rem] px-6 py-4 text-sm font-extrabold shadow-[0_18px_38px_rgba(103,150,81,0.08)] lg:px-5 lg:py-3'
            }`}
        >
            <span className={`inline-flex items-center ${isMobile ? 'gap-2' : 'gap-4'}`}>
                <Globe2
                    className={`${isMobile ? 'h-4 w-4' : 'h-5 w-5'} shrink-0`}
                    strokeWidth={isMobile ? 1.45 : 1.65}
                    aria-hidden="true"
                />
                <span>Em breve</span>
            </span>
            <ChevronRight
                className={`${isMobile ? 'h-4 w-4' : 'h-6 w-6'} shrink-0 opacity-35`}
                strokeWidth={isMobile ? 1.75 : 1.9}
                aria-hidden="true"
            />
        </motion.span>
    )
}

// Agrupa as ações de um projeto.
// A ordem dos botões segue exatamente a ordem cadastrada no constants.ts.
function ProjectActions({
    actions,
    size,
}: {
    actions: ProjectActionData[]
    size: ActionSize
}) {
    const hasActions = actions.length > 0

    // No mobile, os botões ficam em uma grade compacta.
    // Se você mudar a ordem no constants.ts, a ordem aqui muda junto.
    if (size === 'mobile') {
        return (
            <motion.div
                variants={childVariants}
                className="relative z-10 mx-auto mt-8 flex max-w-[306px] flex-col items-center gap-4"
                aria-label="Ações do projeto no mobile"
            >
                {hasActions ? (
                    <motion.div variants={buttonGroupVariants} className="grid w-full grid-cols-2 gap-4">
                        {actions.map((action) => (
                            <motion.div
                                variants={buttonVariants}
                                key={`${action.label}-${action.href}`}
                                className={action.variant === 'solid' ? 'col-span-2 mx-auto w-full max-w-40' : 'min-w-0'}
                            >
                                <ProjectAction action={action} size="mobile" />
                            </motion.div>
                        ))}
                    </motion.div>
                ) : (
                    <motion.div variants={buttonVariants} className="w-full max-w-40">
                        <ProjectStatus size="mobile" />
                    </motion.div>
                )}
            </motion.div>
        )
    }

    // No desktop, todas as ações ficam em coluna na lateral esquerda do card.
    return (
        <motion.div
            variants={buttonGroupVariants}
            className="relative z-30 mt-10 w-full flex-col gap-4 max-lg:hidden lg:mt-14 lg:flex lg:max-w-[220px]"
            aria-label="Ações do projeto"
        >
            {hasActions ? (
                actions.map((action) => (
                    <motion.div variants={desktopButtonVariants} key={`${action.label}-${action.href}`} className="w-full">
                        <ProjectAction action={action} size="desktop" />
                    </motion.div>
                ))
            ) : (
                <motion.div variants={desktopButtonVariants} className="w-full">
                    <ProjectStatus size="desktop" />
                </motion.div>
            )}
        </motion.div>
    )
}

// Cabeçalho compacto exibido no layout mobile/tablet.
// Ele resume categoria, título e resultado antes do mockup.
function MobileProjectCard({ project }: { project: Project }) {
    return (
        <motion.div
            variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
            }}
            className="relative mx-auto w-[calc(100%-3rem)] max-w-80 overflow-hidden rounded-lg bg-accent px-4 py-3 md:max-w-96 md:px-5 md:py-4"
        >
            <Image
                src="/images/logo.webp"
                alt=""
                width={220}
                height={220}
                className="absolute right-0 top-0 h-auto w-36 opacity-5 md:w-44"
            />
            <motion.span variants={childVariants} className="relative block text-[10px] font-medium leading-4 text-white md:text-xs">
                {project.kicker}
            </motion.span>
            <motion.h2
                variants={titleVariants}
                className="relative mt-1 font-display text-2xl font-extrabold leading-none text-[#b9ff91] md:text-4xl"
            >
                {project.title}
            </motion.h2>
            <motion.p variants={childVariants} className="relative mt-2 max-w-60 text-[11px] font-medium leading-4 text-white md:max-w-72 md:text-sm md:leading-5">
                {project.result}
            </motion.p>
        </motion.div>
    )
}

// Renderiza a imagem principal do projeto com next/image.
// Recebe className por fora para se adaptar ao layout mobile ou desktop.
function ProjectMockup({
    project,
    className,
}: {
    project: Project
    className: string
}) {
    return (
        <Image
            src={getProjectMockup(project)}
            alt={`Mockup do projeto ${project.title} em notebook e smartphone`}
            width={1000}
            height={662}
            sizes="(min-width: 1024px) 760px, (min-width: 768px) 480px, 92vw"
            className={className}
        />
    )
}

// Layout mobile-first: atende celulares e tablets.
// Fica visível até antes do breakpoint lg.
function MobileProjectLayout({ project }: { project: Project }) {
    return (
        <div className="relative z-10 px-4 pb-10 pt-4 md:px-6 md:pb-12 md:pt-6 lg:hidden">
            <MobileProjectCard project={project} />

            <motion.div
                variants={mockupVariants}
                whileHover={{ scale: 1.025, rotate: 0.35 }}
                className="relative z-10 mt-7 flex justify-center md:mt-10"
            >
                <ProjectMockup
                    project={project}
                    className="h-auto w-[108%] max-w-[390px] object-contain drop-shadow-[0_24px_38px_rgba(35,48,31,0.18)] md:max-w-[520px]"
                />
            </motion.div>

            <ProjectActions actions={project.actions} size="mobile" />
        </div>
    )
}

// Layout desktop: entra somente no breakpoint lg.
// Mantém o visual com topo verde, ações à esquerda e mockup grande à direita.
function DesktopProjectLayout({ project }: { project: Project }) {
    return (
        <div className="relative z-10 hidden gap-8 px-6 pb-8 pt-10 lg:grid lg:grid-cols-[360px_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:px-18 lg:py-16">
            <motion.div
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.09 } },
                }}
                className="order-1 flex min-w-0 flex-col lg:col-start-1 lg:row-start-1"
            >
                <motion.span variants={childVariants} className="max-w-2xl text-base leading-6 text-white">
                    {project.kicker}
                </motion.span>

                <motion.h2
                    variants={titleVariants}
                    className="mt-2 font-display text-6xl font-extrabold leading-[0.98] text-[#b9ff91] lg:text-[3rem]"
                >
                    {project.title}
                </motion.h2>

                <motion.p
                    variants={childVariants}
                    className="mt-4 max-w-2xl text-base leading-6 text-white"
                >
                    {project.description}
                </motion.p>

                <ProjectActions actions={project.actions} size="desktop" />
            </motion.div>

            <motion.div
                variants={mockupVariants}
                whileHover={{ scale: 1.025, rotate: 0.35 }}
                className="relative flex items-start justify-center lg:min-h-0 lg:items-end lg:justify-end "
            >
                <ProjectMockup
                    project={project}
                    className="relative z-10 h-auto w-[80%] object-contain drop-shadow-[0_30px_45px_rgba(35,48,31,0.22)]"
                />
            </motion.div>
        </div>
    )
}

// Estrutura visual completa de um projeto.
// Cada item do array "projects" vira uma seção independente usando este componente.
function ProjectShowcase({ project, isFirst }: { project: Project; isFirst: boolean }) {
    return (
        <motion.section
            // Só a primeira seção recebe id="projects" para funcionar com o link do menu.
            id={isFirst ? 'projects' : `project-${project.id}`}
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.18, margin: '0px 0px -6% 0px' }}
            className="relative isolate overflow-hidden bg-bg px-0 py-12 md:px-6 md:py-20 lg:px-10 lg:py-24"
        >
            <div className="relative mx-auto overflow-hidden rounded-none bg-white shadow-none md:max-w-[560px] md:rounded-[1.5rem] lg:max-w-7xl lg:rounded-[2.2rem] lg:shadow-[0_30px_90px_rgba(103,150,81,0.08)]">
                {/* Formas de fundo são decorativas; ficam fora da leitura por leitores de tela. */}
                <div
                    className="absolute inset-x-[-24%] bottom-0 h-[64%] bg-mint [clip-path:ellipse(78%_58%_at_50%_100%)] lg:hidden"
                    aria-hidden="true"
                />
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

                {/* Mobile-first: esta versão atende celular e tablet; o layout amplo entra só no lg. */}
                <MobileProjectLayout project={project} />
                <DesktopProjectLayout project={project} />
            </div>
        </motion.section>
    )
}

// Componente exportado para a página inicial.
// Ele ordena os dados e renderiza uma seção para cada projeto.
export default function ProjectsSection() {
    const orderedProjects = getOrderedProjects()

    return (
        <>
            {orderedProjects.map((project, index) => (
                <ProjectShowcase key={project.id} project={project} isFirst={index === 0} />
            ))}
        </>
    )
}
