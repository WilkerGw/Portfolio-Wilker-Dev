'use client'

import { useEffect, useRef } from 'react'

export function useScrollReveal(options: IntersectionObserverInit = {}) {
    const ref = useRef<HTMLElement>(null)
    const { root = null, rootMargin = '0px 0px -60px 0px', threshold = 0.1 } = options

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-visible')
                    observer.unobserve(el)
                }
            },
            { root, rootMargin, threshold }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [root, rootMargin, threshold])

    return ref
}
