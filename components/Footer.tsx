import {
    ArrowUp,
    Github,
    Linkedin,
    Mail,
    MessageCircle,
    type LucideIcon,
} from 'lucide-react'
import { socialLinks } from '@/lib/constants'

const socialIcons: Record<string, LucideIcon> = {
    'E-mail': Mail,
    WhatsApp: MessageCircle,
    LinkedIn: Linkedin,
    GitHub: Github,
}

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-line bg-surface px-5 py-10 md:px-10 lg:py-12">
            <div className="brand-pattern opacity-70" aria-hidden="true" />

            <div className="relative z-10 mx-auto grid max-w-7xl gap-8 md:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] md:items-end lg:grid-cols-[minmax(0,40rem)_minmax(18rem,26rem)] lg:justify-between">
                <div className="w-full max-w-2xl">
                    <span className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-accent">
                        Vamos tirar seu projeto do papel?
                    </span>

                    <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-title md:text-4xl lg:text-5xl">
                        Sites, sistemas e landing pages com visual limpo e performance alta.
                    </h2>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="https://wa.me/5511967173625"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-accent px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_16px_36px_rgba(103,150,81,0.22)] hover:-translate-y-0.5 hover:bg-title"
                        >
                            <MessageCircle size={18} />
                            Chamar no WhatsApp
                        </a>

                        <a
                            href="mailto:dev.wilker@gmail.com"
                            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-line bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-title hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                        >
                            <Mail size={18} />
                            Enviar e-mail
                        </a>
                    </div>
                </div>

                <div className="flex w-full min-w-0 flex-col gap-6 md:items-end">
                    <nav className="flex flex-wrap gap-2 md:justify-end" aria-label="Links sociais">
                        {socialLinks.map((link) => {
                            const Icon = socialIcons[link.label] ?? Mail

                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.label}
                                    title={link.label}
                                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-subtitle hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                                >
                                    <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                                </a>
                            )
                        })}
                    </nav>

                    <a
                        href="#home"
                        className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.12em] text-accent hover:text-title"
                        aria-label="Voltar ao inicio"
                    >
                        Voltar ao topo <ArrowUp size={16} />
                    </a>
                </div>
            </div>

            <div className="relative z-10 mx-auto mt-8 max-w-7xl border-t border-line pt-5">
                <p className="text-sm font-semibold text-body md:text-center">
                    &copy; {new Date().getFullYear()} Wilker Martins. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}
