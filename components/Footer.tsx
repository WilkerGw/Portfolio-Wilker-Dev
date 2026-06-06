import { ArrowUp, Mail, MessageCircle } from 'lucide-react'
import { socialLinks } from '@/lib/constants'
import ScrollReveal from './ScrollReveal'

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-line bg-surface px-5 py-14 md:px-10">
            <div className="brand-pattern opacity-70" aria-hidden="true" />

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
                <ScrollReveal className="max-w-2xl">
                    <span className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-accent">
                        Vamos tirar seu projeto do papel?
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-title md:text-5xl">
                        Sites, sistemas e landing pages com visual limpo e performance alta.
                    </h2>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
                </ScrollReveal>

                <ScrollReveal className="flex flex-col gap-6 md:items-end" delay={0.12}>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full border border-line bg-white px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.12em] text-subtitle hover:border-accent hover:text-accent"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3 text-sm font-semibold text-body md:items-end">
                        <p>© {new Date().getFullYear()} Wilker Martins. Todos os direitos reservados.</p>
                        <a
                            href="#home"
                            className="inline-flex items-center gap-2 font-extrabold uppercase tracking-[0.12em] text-accent hover:text-title"
                            aria-label="Voltar ao início"
                        >
                            Voltar ao topo <ArrowUp size={16} />
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </footer>
    )
}
