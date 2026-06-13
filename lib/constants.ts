import { IconType } from 'react-icons'
import {
    SiCss,
    SiHtml5,
    SiJavascript,
    SiN8N,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si'

export type ProjectActionIcon = 'mobile' | 'desktop' | 'external'
export type ProjectActionVariant = 'outline' | 'solid'

export interface ProjectAction {
    href: string
    label: string
    icon: ProjectActionIcon
    ariaLabel: string
    variant?: ProjectActionVariant
}

export interface Project {
    id: number
    kicker: string
    title: string
    result: string
    description: string
    mockupImage?: string
    actions: ProjectAction[]
}

export interface Skill {
    icon: string
    title: string
    description: string
    tags: string[]
}

export interface Service {
    title: string
    description: string
}

export interface SocialLink {
    label: string
    href: string
}

export interface Stat {
    icon: IconType
    label: string
}

export const heroTags = [
    'SEO',
    'Desempenho',
    'Acessibilidade',
    'Responsividade mobile',
    '90+ PageSpeed',
]

export const projects: Project[] = [

        {
        id: 1,
        kicker: 'Bebida Energética',
        title: 'Volt Energético',
        result: 'Landing Page para apresentar o produto, seus diferenciais e incentivar a compra.',
        description:
            'Landing page moderna, com designe chamativo e animações de entrada, saída e scroll. Foco em apresentar o produto, seus diferenciais e incentivar a compra.',
        mockupImage: '/images/projects/volt-mockup.webp',
        actions: [
            {
                href: '/images/projects/volt-design-mobile.pdf',
                label: 'Mobile',
                icon: 'mobile',
                ariaLabel: 'Abrir o design mobile do projeto Volt Energético em PDF em uma nova aba',
            },
            {
                href: '/images/projects/volt-design-desktop.pdf',
                label: 'Desktop',
                icon: 'desktop',
                ariaLabel: 'Abrir o design desktop do projeto Volt Energético em PDF em uma nova aba',
            },
            {
                href: 'https://volt-energetico.vercel.app/',
                label: 'Ver',
                icon: 'external',
                variant: 'solid',
                ariaLabel: 'Abrir o projeto Volt Energético em uma nova aba',
            },
        ],
    },
    {
        id: 2,
        kicker: 'Captação automotiva',
        title: 'Multimarcas',
        result: 'Interface focada em leads para transformar interesse em conversa pelo WhatsApp.',
        description:
            'Landing page automotiva com apresentação de estoque, filtros visuais, hierarquia direta e integração para contato rápido, mantendo performance e leitura simples em telas pequenas.',
        mockupImage: '/images/projects/multimarcas-mockup.webp',
        actions: [
            {
                href: '/images/projects/multimarcas-designe-mobile-pdf.pdf',
                label: 'Mobile',
                icon: 'mobile',
                ariaLabel: 'Abrir o design mobile do projeto Multimarcas em PDF em uma nova aba',
            },
            {
                href: '/images/projects/multimarcas-designe-desktop-pdf.pdf',
                label: 'Desktop',
                icon: 'desktop',
                ariaLabel: 'Abrir o design desktop do projeto Multimarcas em PDF em uma nova aba',
            },
            {
                href: 'https://lp-multimarcas.vercel.app/',
                label: 'Ver',
                icon: 'external',
                variant: 'solid',
                ariaLabel: 'Abrir o projeto Multimarcas em uma nova aba',
            },
        ],
    },
    {
        id: 4,
        kicker: 'Imobiliária premium',
        title: 'ImobPremium',
        result: 'Busca imobiliária elegante para imóveis de alto padrão em São Paulo.',
        description:
            'Plataforma imobiliária com curadoria de imóveis, filtros dinâmicos, integração com WhatsApp, blog de conteúdo e perfis de corretores especializados.',
        mockupImage: '/images/projects/imob-premium-mockup.webp',
        actions: [
            {
                href: '/images/projects/imob-premium-mobile.pdf',
                label: 'Mobile',
                icon: 'mobile',
                ariaLabel: 'Abrir o design mobile do projeto ImobPremium em PDF em uma nova aba',
            },
            {
                href: '/images/projects/imob-premium-desktop.pdf',
                label: 'Desktop',
                icon: 'desktop',
                ariaLabel: 'Abrir o design desktop do projeto ImobPremium em PDF em uma nova aba',
            },
            {
                href: 'https://imob-premium-delta.vercel.app/',
                label: 'Ver',
                icon: 'external',
                variant: 'solid',
                ariaLabel: 'Abrir o projeto ImobPremium em uma nova aba',
            },
        ],
    },
    {
        id: 5,
        kicker: 'Moda feminina',
        title: 'UHF Modas',
        result: 'Vitrine digital com apelo visual para destacar coleções e facilitar o contato.',
        description:
            'Landing page para moda feminina com foco em apresentação de peças, comunicação comercial clara e experiência responsiva para descoberta rápida em desktop e smartphone.',
        mockupImage: '/images/projects/uhf-moda-mockup.webp',
        actions: [
            {
                href: '/images/projects/uhf-modas-design-mobile.pdf',
                label: 'Mobile',
                icon: 'mobile',
                ariaLabel: 'Abrir o design mobile do projeto UHF Modas em PDF em uma nova aba',
            },
            {
                href: '/images/projects/uhf-modas-design-desktop.pdf',
                label: 'Desktop',
                icon: 'desktop',
                ariaLabel: 'Abrir o design desktop do projeto UHF Modas em PDF em uma nova aba',
            },
            {
                href: 'https://uhf-modas.vercel.app/',
                label: 'Ver',
                icon: 'external',
                variant: 'solid',
                ariaLabel: 'Abrir o projeto UHF Modas em uma nova aba',
            },
        ],
    },
        {
        id: 6,
        kicker: 'Landing page educacional',
        title: 'Óticas Vizz',
        result: 'Conteúdo técnico transformado em uma experiência clara para venda consultiva.',
        description:
            'Página didática sobre lentes de grau, tratamentos e índices de refração, com chatbot de inteligência artificial, CTAs por seção e layout responsivo para capturar contatos qualificados.',
        mockupImage: '/images/projects/site-vizz-mockup.webp',
        // Edite manualmente os botões deste projeto aqui.
        actions: [
            {
                href: '/images/projects/site-vizz-design-mobile.pdf',
                label: 'Mobile',
                icon: 'mobile',
                ariaLabel: 'Abrir o design mobile do projeto Óticas Vizz em PDF em uma nova aba',
            },
            {
                href: '/images/projects/site-vizz-design-desktop.pdf',
                label: 'Desktop',
                icon: 'desktop',
                ariaLabel: 'Abrir o design desktop do projeto Óticas Vizz em PDF em uma nova aba',
            },
            {
                href: 'https://www.oticasvizz.com.br/',
                label: 'Ver',
                icon: 'external',
                variant: 'solid',
                ariaLabel: 'Abrir o projeto Óticas Vizz em uma nova aba',
            },
        ],
    },    
]

export const skills: Skill[] = [
    {
        icon: '↗',
        title: 'Front-End',
        description:
            'Interfaces rápidas e interativas com foco em experiência do usuário e performance.',
        tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    },
    {
        icon: '●',
        title: 'Back-End',
        description:
            'APIs robustas e escaláveis com arquitetura limpa e integração de banco de dados.',
        tags: ['Node.js', 'PostgreSQL', 'REST API', 'Docker'],
    },
    {
        icon: '◎',
        title: 'UI/UX Design',
        description:
            'Prototipagem e design systems que traduzem objetivos de negócio em interfaces intuitivas.',
        tags: ['Figma', 'Prototipagem', 'Design System'],
    },
    {
        icon: '◌',
        title: 'Deploy',
        description:
            'Publicação, otimização e acompanhamento para manter páginas rápidas e estáveis.',
        tags: ['Vercel', 'GitHub Actions', 'Core Web Vitals'],
    },
]

export const services: Service[] = [
    {
        title: 'Landing pages',
        description:
            'Páginas comerciais com copy objetiva, hierarquia forte e foco em conversão.',
    },
    {
        title: 'Sistemas web',
        description:
            'Dashboards, plataformas internas e produtos digitais com estrutura escalável.',
    },
    {
        title: 'E-commerce',
        description:
            'Lojas virtuais responsivas com experiência clara para navegação e compra.',
    },
]

export const socialLinks: SocialLink[] = [
    { label: 'E-mail', href: 'mailto:dev.wilker@gmail.com' },
    { label: 'WhatsApp', href: 'https://wa.me/5511967173625' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wilker-martins-dev' },
    { label: 'GitHub', href: 'https://github.com/WilkerGw' },
]

export const stats: Stat[] = [
    { icon: SiHtml5, label: 'HTML' },
    { icon: SiCss, label: 'CSS' },
    { icon: SiJavascript, label: 'JavaScript' },
    { icon: SiTypescript, label: 'TypeScript' },
    { icon: SiNodedotjs, label: 'Node.js' },
    { icon: SiReact, label: 'React.js' },
    { icon: SiNextdotjs, label: 'Next.js' },
    { icon: SiTailwindcss, label: 'Tailwind CSS' },
    { icon: SiN8N, label: 'N8n' },
]

export const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: 'https://wa.me/5511967173625' },
]

export const marqueeItems = [
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'SEO',
    'Performance',
    'Responsivo',
]
