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

export interface ProjectMetric {
    value: number
    label: string
}

export interface Project {
    id: number
    kicker: string
    title: string
    result: string
    description: string
    tags: string[]
    highlights: string[]
    metrics: ProjectMetric[]
    span: string
    link: string
    pattern: string
    image?: string
    mobileImage?: string
    mockupImage?: string
    mobileDesignPdf?: string
    desktopDesignPdf?: string
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
        kicker: 'Landing page educacional',
        title: 'Óticas Vizz',
        result: 'Conteúdo técnico transformado em uma experiência clara para venda consultiva.',
        description:
            'Página didática sobre lentes de grau, tratamentos e índices de refração, com chatbot de inteligência artificial, CTAs por seção e layout responsivo para capturar contatos qualificados.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Chatbot IA'],
        highlights: ['Arquitetura SEO', 'CTA por seção', 'Design responsivo'],
        metrics: [
            { value: 100, label: 'Desempenho' },
            { value: 100, label: 'Acessibilidade' },
            { value: 100, label: 'Boas práticas' },
            { value: 100, label: 'SEO' },
        ],
        span: 'col-span-12',
        link: 'https://www.oticasvizz.com.br/',
        pattern:
            'linear-gradient(135deg, rgba(103,150,81,0.12), rgba(103,150,81,0.02))',
        mockupImage: '/images/projects/site-vizz-mockup.webp',
        mobileDesignPdf: '/images/projects/site-vizz-design-mobile.pdf',
        desktopDesignPdf: '/images/projects/site-vizz-design-desktop.pdf',
    },
    {
        id: 2,
        kicker: 'Captação automotiva',
        title: 'Multimarcas',
        result: 'Interface focada em leads para transformar interesse em conversa pelo WhatsApp.',
        description:
            'Landing page automotiva com apresentação de estoque, filtros visuais, hierarquia direta e integração para contato rápido, mantendo performance e leitura simples em telas pequenas.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'WhatsApp'],
        highlights: ['Fluxo de lead', 'Estoque escaneável', 'Mobile first'],
        metrics: [
            { value: 100, label: 'Desempenho' },
            { value: 100, label: 'Acessibilidade' },
            { value: 100, label: 'Boas práticas' },
            { value: 100, label: 'SEO' },
        ],
        span: 'col-span-12',
        link: 'https://lp-multimarcas.vercel.app/',
        pattern:
            'linear-gradient(135deg, rgba(103,150,81,0.1), rgba(103,150,81,0.025))',
        image: '/images/projects/multimarcas-mockup.webp',
        mobileImage: '/images/projects/multimarcas-mockup.webp',
        mockupImage: '/images/projects/multimarcas-mockup.webp',
        mobileDesignPdf: '/images/projects/multimarcas-designe-mobile-pdf.pdf',
        desktopDesignPdf: '/images/projects/multimarcas-designe-desktop-pdf.pdf',
    },
    {
        id: 4,
        kicker: 'Imobiliária premium',
        title: 'ImobPremium',
        result: 'Busca imobiliária elegante para imóveis de alto padrão em São Paulo.',
        description:
            'Plataforma imobiliária com curadoria de imóveis, filtros dinâmicos, integração com WhatsApp, blog de conteúdo e perfis de corretores especializados.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'SEO'],
        highlights: ['Filtros dinâmicos', 'Blog integrado', 'Perfis de corretores'],
        metrics: [
            { value: 100, label: 'Desempenho' },
            { value: 100, label: 'Acessibilidade' },
            { value: 100, label: 'Boas práticas' },
            { value: 100, label: 'SEO' },
        ],
        span: 'col-span-12',
        link: 'https://imob-premium-delta.vercel.app/',
        pattern:
            'linear-gradient(135deg, rgba(103,150,81,0.095), rgba(103,150,81,0.02))',
        image: '/images/projects/imob-premium-desktop.webp',
        mobileImage: '/images/projects/imob-premium-mobile.webp',
        mockupImage: '/images/projects/imob-premium-mockup.webp',
        mobileDesignPdf: '/images/projects/imob-premium-mobile.pdf',
        desktopDesignPdf: '/images/projects/imob-premium-desktop.pdf',
    },
    {
        id: 5,
        kicker: 'Moda feminina',
        title: 'UHF Modas',
        result: 'Vitrine digital com apelo visual para destacar coleções e facilitar o contato.',
        description:
            'Landing page para moda feminina com foco em apresentação de peças, comunicação comercial clara e experiência responsiva para descoberta rápida em desktop e smartphone.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'UI/UX'],
        highlights: ['Vitrine visual', 'Contato direto', 'Design responsivo'],
        metrics: [
            { value: 100, label: 'Desempenho' },
            { value: 100, label: 'Acessibilidade' },
            { value: 100, label: 'Boas práticas' },
            { value: 100, label: 'SEO' },
        ],
        span: 'col-span-12',
        link: 'https://uhf-modas.vercel.app/',
        pattern:
            'linear-gradient(135deg, rgba(103,150,81,0.12), rgba(103,150,81,0.016))',
        mockupImage: '/images/projects/uhf-moda-mockup.webp',
        mobileDesignPdf: '/images/projects/uhf-modas-design-mobile.pdf',
        desktopDesignPdf: '/images/projects/uhf-modas-design-desktop.pdf',
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
