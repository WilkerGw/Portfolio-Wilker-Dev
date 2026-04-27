import { ArrowUp } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="border-t border-white/[0.07] px-6 md:px-12 py-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-muted font-mono tracking-wider">
                    © {new Date().getFullYear()} Wilker Martins. Todos os direitos reservados.
                </p>

                <a
                    href="#"
                    className="flex items-center gap-2 text-[11px] text-muted font-mono tracking-wider uppercase hover:text-accent transition-colors"
                    aria-label="Voltar ao topo"
                >
                    Voltar ao topo <ArrowUp size={14} />
                </a>
            </div>
        </footer>
    )
}
