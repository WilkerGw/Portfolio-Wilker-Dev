'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { projects } from '@/lib/constants'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const MetricCircle = ({ value, label }: { value: number; label: string }) => {
    const size = 52;
    const strokeWidth = 3.5;
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
                        className="text-accent/10"
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
                <span className="relative z-10 text-[13px] font-mono font-semibold text-accent">
                    {value}
                </span>
            </div>
            <span className="text-[10px] font-medium text-muted text-center leading-tight max-w-[65px]">
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
                    className="reveal grid grid-cols-12 gap-4 md:gap-5"
                >
                    {projects.map((project) => (
                        <a
                            key={project.id}
                            href={project.link}
                            className={`${project.span} border border-white/[0.07] bg-bg2 p-8 md:p-10 relative overflow-hidden group hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 block`}
                            target='_blank'
                        >
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                            {/* Project Number */}
                            <span className="text-[11px] tracking-widest text-muted mb-8 block font-mono relative z-10">
                                {String(project.id).padStart(2, '0')}
                            </span>

                            {/* Visual Thumbnail */}
                            <div
                                className="w-full aspect-video bg-bg border border-white/[0.07] mb-8 relative overflow-hidden flex items-center justify-center group/img"
                                style={{ backgroundImage: project.pattern }}
                            >
                                {project.image ? (
                                    <>
                                        {/* Desktop Version (Background) */}
                                        <div className="absolute inset-0 w-full h-full">
                                            <Image
                                                src={project.image}
                                                alt={`${project.title} Desktop`}
                                                fill
                                                className="object-cover object-top opacity-40 group-hover/img:scale-105 group-hover/img:opacity-50 transition-all duration-700"
                                            />
                                        </div>

                                        {/* Mobile Version (Floating Device) */}
                                        {project.mobileImage && (
                                            <div className="absolute right-6 bottom-[-10%] w-[22%] aspect-9/19 rounded-[12px] border-[3px] border-white/10 overflow-hidden shadow-2xl z-20 group-hover/img:translate-y-[-10%] group-hover/img:scale-110 transition-all duration-500 bg-bg">
                                                <Image
                                                    src={project.mobileImage}
                                                    alt={`${project.title} Mobile`}
                                                    fill
                                                    className="object-cover object-top"
                                                />
                                            </div>
                                        )}

                                        {/* Subtle overlay to tie them together */}
                                        <div className="absolute inset-0 bg-linear-to-t from-bg2/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                                    </>
                                ) : (
                                    <span className="font-syne text-lg font-bold text-white/[0.05]">
                                        {project.title}
                                    </span>
                                )}
                            </div>

                            {/* Title */}
                            <h3 className="font-syne text-xl font-bold group-hover:text-accent transition-colors relative z-10">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[13px] text-muted leading-[1.7] mt-3 mb-7 relative z-10">
                                {project.description}
                            </p>

                            {/* Lighthouse Metrics */}
                            {project.metrics && (
                                <div className="grid grid-cols-2 gap-y-6 gap-x-2 sm:flex sm:flex-wrap sm:gap-5 mb-8 relative z-10">
                                    {project.metrics.map((metric) => (
                                        <MetricCircle key={metric.label} value={metric.value} label={metric.label} />
                                    ))}
                                </div>
                            )}

                            {/* Footer */}
                            <div className="flex items-center justify-between relative z-10">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[10px] uppercase tracking-wider text-muted font-mono"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <span className="flex items-center gap-1.5 text-accent text-[11px] uppercase tracking-wider font-mono group-hover:gap-3 transition-all">
                                    Ver projeto <ArrowUpRight size={14} />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
