'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { projects } from '@/lib/constants'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const MetricCircle = ({ value, label }: { value: number; label: string }) => {
    const size = 48;
    const strokeWidth = 3;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="relative flex items-center justify-center rounded-full" style={{ width: size, height: size }}>
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="currentColor"
                        stroke="none"
                        className="text-accent/5"
                    />
                    <circle
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        fill="transparent"
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        className="text-accent"
                        strokeLinecap="round"
                    />
                </svg>
                <span className="relative z-10 text-[12px] font-mono font-semibold text-accent">
                    {value}
                </span>
            </div>
            <span className="text-[9px] font-medium text-muted text-center leading-tight max-w-[60px] uppercase tracking-wider">
                {label}
            </span>
        </div>
    );
};

export default function ProjectsSection() {
    const ref = useScrollReveal()

    return (
        <section id="projects" className="px-6 md:px-12 py-20 md:py-[120px]">
            <div className="max-w-7xl mx-auto">
                <p className="text-[10px] uppercase tracking-widest2 text-accent mb-4 font-mono">
                    Projetos
                </p>
                <h2 className="font-syne font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-16">
                    Trabalhos selecionados
                </h2>

                <div
                    ref={ref as React.RefObject<HTMLDivElement>}
                    className="reveal grid grid-cols-12 gap-6 md:gap-8"
                >
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.link}
                            className={`${project.span} flex flex-col border border-white/[0.07] bg-bg2 relative overflow-hidden group hover:border-accent/30 hover:-translate-y-1 transition-all duration-500`}
                            target='_blank'
                        >
                            {/* Gradient Overlay for the whole card */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                            {/* Visual Thumbnail (Edge to Edge) */}
                            <div
                                className="w-full aspect-[4/3] md:aspect-[16/11] bg-bg relative overflow-hidden flex items-end justify-center group/img pt-8 px-6 md:pt-12 md:px-12 z-10"
                                style={{ backgroundImage: project.pattern }}
                            >
                                {/* Soft glow behind mockup */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-accent/10 blur-[100px] opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                {project.image ? (
                                    <>
                                        {/* Desktop Mockup */}
                                        <div className="relative w-full h-[95%] rounded-t-md md:rounded-t-xl border-t border-l border-r border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden group-hover/img:-translate-y-3 transition-transform duration-700 bg-[#0a0a0a]">
                                            {/* Browser Bar */}
                                            <div className="absolute top-0 w-full h-5 md:h-7 bg-[#1a1a1a] border-b border-white/5 flex items-center px-3 gap-1.5 z-10">
                                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/20" />
                                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/20" />
                                                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/20" />
                                            </div>
                                            <div className="absolute inset-0 mt-5 md:mt-7 bg-bg">
                                                <Image
                                                    src={project.image}
                                                    alt={`${project.title} Desktop`}
                                                    fill
                                                    className="object-cover object-top opacity-90 group-hover/img:opacity-100 transition-opacity duration-500"
                                                />
                                            </div>
                                        </div>

                                        {/* Mobile Version (Floating Device) */}
                                        {project.mobileImage && (
                                            <div className="absolute right-4 md:right-8 bottom-0 w-[24%] aspect-[9/19] rounded-t-[1rem] md:rounded-t-[1.5rem] border-t-4 border-l-4 border-r-4 border-[#1a1a1a] overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] z-20 group-hover/img:-translate-y-6 transition-transform duration-700 bg-bg">
                                                <Image
                                                    src={project.mobileImage}
                                                    alt={`${project.title} Mobile`}
                                                    fill
                                                    className="object-cover object-top"
                                                />
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <span className="font-syne text-lg font-bold text-white/[0.05] self-center pb-12">
                                        {project.title}
                                    </span>
                                )}
                            </div>

                            {/* Content Area */}
                            <div className="p-8 md:p-10 flex flex-col flex-1 relative z-10 border-t border-white/[0.07] bg-bg2">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="font-syne text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="text-[11px] tracking-widest text-muted font-mono bg-bg px-3 py-1 border border-white/[0.07]">
                                        {String(project.id).padStart(2, '0')}
                                    </span>
                                </div>

                                <p className="text-sm text-muted leading-[1.8] mb-8 flex-1">
                                    {project.description}
                                </p>

                                {/* Lighthouse Metrics */}
                                {project.metrics && (
                                    <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
                                        {project.metrics.map((metric) => (
                                            <MetricCircle key={metric.label} value={metric.value} label={metric.label} />
                                        ))}
                                    </div>
                                )}

                                {/* Footer */}
                                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/[0.07]">
                                    <div className="flex flex-wrap gap-3">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] uppercase tracking-wider text-muted font-mono flex items-center gap-1.5"
                                            >
                                                <span className="w-1 h-1 rounded-full bg-accent/50" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="flex items-center gap-1.5 text-accent text-[11px] uppercase tracking-wider font-mono group-hover:gap-3 transition-all whitespace-nowrap ml-4">
                                        Visitar <ArrowUpRight size={14} />
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
