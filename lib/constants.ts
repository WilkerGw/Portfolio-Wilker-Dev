/* ═══════════════════════════════════════════
   DADOS ESTÁTICOS — Edite seus dados aqui
   ═══════════════════════════════════════════ */

// ─── Tipos ────────────────────────────────

export interface Project {
    id: number
    title: string
    description: string
    tags: string[]
    span: string
    link: string
    pattern: string // CSS background pattern
    image?: string // Caminho para a imagem de thumbnail
    mobileImage?: string // Caminho para a imagem versão mobile
    metrics?: { value: number; label: string }[] // Lighthouse metrics
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
    value: string
    label: string
}

// ─── Projetos ─────────────────────────────
// Para trocar: edite os campos abaixo com seus projetos reais.
// O campo "pattern" define o fundo visual do card via CSS.
// O campo "span" controla a largura na grid (col-span-7 ou col-span-5).

export const projects: Project[] = [
    {
        id: 1,
        title: 'Óticas Vizz',
        description:
            'Landing page didática sobre lentes de grau, seus tipos, tratamentos e índices de refração. A página também conta com um chatbot de inteligência artificial e botões de call actions em todas as seções.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        span: 'col-span-12 md:col-span-5',
        link: 'https://www.oticasvizz.com.br/',
        pattern:
            'radial-gradient(circle at 50% 50%, rgba(124,255,203,0.06) 0%, transparent 80%)',
        image: '/images/projects/site-vizz-desktop.webp',
        mobileImage: '/images/projects/site-vizz-mobile.webp',
        metrics: [
            { value: 100, label: 'Desempenho' },
            { value: 100, label: 'Acessibilidade' },
            { value: 100, label: 'Práticas recomendadas' },
            { value: 100, label: 'SEO' },
        ],
    },
    {
        id: 2,
        title: 'Multimarcas',
        description:
            'Landing page de alta conversão para o setor automotivo, focada em captura de leads e apresentação de estoque. Apresenta interface moderna com filtragem dinâmica e integração direta para contato via WhatsApp.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        span: 'col-span-12 md:col-span-7',
        link: 'https://lp-multimarcas.vercel.app/',
        pattern:
            'radial-gradient(circle at 30% 70%, rgba(124,255,203,0.04) 0%, transparent 60%)',
        image: '/images/projects/multimarcas-desktop.webp',
        mobileImage: '/images/projects/multimarcas-mobile.webp',
        metrics: [
            { value: 100, label: 'Desempenho' },
            { value: 100, label: 'Acessibilidade' },
            { value: 100, label: 'Práticas recomendadas' },
            { value: 100, label: 'SEO' },
        ],
    },
    {
        id: 3,
        title: 'Mind ERP',
        description:
            'Sistema de gestão especializado para setor óptico. O ERP centraliza o controle de estoque, PDV, agendamentos e prontuários de optometria, com geração automatizada de ordens de serviço e armazenamento seguro em nuvem.',
        tags: ['.NET', 'React', 'Supabase', 'Tailwind CSS'],
        span: 'col-span-12 md:col-span-7',
        link: '#',
        pattern:
            'radial-gradient(circle at 70% 30%, rgba(124,255,203,0.05) 0%, transparent 70%)',
        image: '/images/projects/mind-erp-desktop.webp',
        mobileImage: '/images/projects/mind-erp-mobile.webp',
        metrics: [
            { value: 96, label: 'Segurança' },
            { value: 100, label: 'Disponibilidade' },
            { value: 94, label: 'Uptime' },
            { value: 90, label: 'Eficiência' },
        ],
    },
    {
        id: 4,
        title: 'Loja Virtual Vizz',
        description:
            'E-commerce completo focado no varejo óptico, integrando catálogo de armações, filtros por marca e formato, e sistema de finalização de compra. A interface foi otimizada para uma jornada de compra fluida e segura.',
        tags: ['Nuvemshop', 'E-commerce', 'UX Design'],
        span: 'col-span-12 md:col-span-5',
        link: 'https://oticasvizz.lojavirtualnuvem.com.br/',
        pattern:
            'radial-gradient(circle at 10% 20%, rgba(124,255,203,0.04) 0%, transparent 50%)',
        image: '/images/projects/loja-virtual-vizz-desktop.webp',
        mobileImage: '/images/projects/loja-virtual-vizz-mobile.webp',
        metrics: [
            { value: 92, label: 'Conversão' },
            { value: 97, label: 'Mobile-first' },
            { value: 100, label: 'Segurança' },
            { value: 95, label: 'SEO' },
        ],
    },
    {
        id: 5,
        title: 'ImobPremium',
        description:
            'Plataforma imobiliária de alto padrão focada no mercado paulistano. O site reúne curadoria de mais de 1.200 imóveis, busca com filtros dinâmicos, integração com WhatsApp, blog de conteúdo e perfis de corretores especializados.',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        span: 'col-span-12 md:col-span-7',
        link: 'https://imob-premium-delta.vercel.app/',
        pattern:
            'radial-gradient(circle at 60% 40%, rgba(124,255,203,0.05) 0%, transparent 65%)',
        image: '/images/projects/imob-premium-desktop.webp',
        mobileImage: '/images/projects/imob-premium-mobile.webp',
        metrics: [
            { value: 100, label: 'Desempenho' },
            { value: 100, label: 'Acessibilidade' },
            { value: 100, label: 'Práticas recomendadas' },
            { value: 100, label: 'SEO' },
        ],
    },
]

// ─── Skills ───────────────────────────────

export const skills: Skill[] = [
    {
        icon: '⬡',
        title: 'Front-End',
        description:
            'Interfaces rápidas e interativas com foco em experiência do usuário e performance.',
        tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    },
    {
        icon: '◈',
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
        icon: '◎',
        title: 'DevOps & Deploy',
        description:
            'Pipeline de entrega contínua com monitoramento, testes automatizados e infraestrutura confiável.',
        tags: ['Vercel', 'AWS', 'GitHub Actions'],
    },
]

// ─── Serviços ─────────────────────────────

export const services: Service[] = [
    {
        title: 'Desenvolvimento de Sites',
        description:
            'Sites institucionais, landing pages e portfólios com design sob medida e performance otimizada.',
    },
    {
        title: 'Sistemas & Aplicações Web',
        description:
            'Dashboards, plataformas SaaS e ferramentas internas que resolvem problemas reais do seu negócio.',
    },
    {
        title: 'E-commerce',
        description:
            'Lojas virtuais com checkout integrado, gestão de estoque e experiência de compra premium.',
    },
]

// ─── Links Sociais ────────────────────────
// Atualize com seus links reais.

export const socialLinks: SocialLink[] = [
    { label: 'E-mail', href: 'mailto:dev.wilker@gmail.com' },
    { label: 'WhatsApp', href: 'https://wa.me/5511967173625' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/wilker-martins-dev' },
    { label: 'GitHub', href: 'https://github.com/WilkerGw' },
]

// ─── Stats ────────────────────────────────

export const stats: Stat[] = [
    { value: '+30', label: 'Projetos entregues' },
    { value: '5+', label: 'Anos de experiência' },
    { value: '100%', label: 'Comprometimento' },
    { value: '∞', label: 'Linhas de código' },
]

// ─── Navegação ────────────────────────────

export const navLinks = [
    { label: 'Sobre', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Serviços', href: '#services' },
    { label: 'Contato', href: '#contact' },
]

// ─── Marquee ──────────────────────────────

export const marqueeItems = [
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Tailwind CSS',
    'Figma',
    'Vercel',
    'Docker',
    'REST API',
]
