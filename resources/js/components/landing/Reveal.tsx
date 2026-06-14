import { useEffect, useRef, useState } from 'react';
import type { ElementType, ReactNode } from 'react';

interface RevealProps {
    children: ReactNode;
    /** Stagger delay in milliseconds before the fade-up runs. */
    delay?: number;
    /** Element to render. Defaults to a div. */
    as?: ElementType;
    className?: string;
}

/**
 * Lightweight scroll-reveal wrapper.
 *
 * Uses a single IntersectionObserver per instance to add the `is-visible`
 * class once the element enters the viewport, triggering the `vb-fade-up`
 * animation defined in app.css. SSR-safe (renders visible when no observer
 * is available) and fully disabled under `prefers-reduced-motion`.
 */
export function Reveal({
    children,
    delay = 0,
    as: Tag = 'div',
    className = '',
}: RevealProps) {
    const ref = useRef<HTMLElement | null>(null);

    // When no observer exists (SSR / older runtimes), start visible.
    const [visible, setVisible] = useState(
        () => typeof IntersectionObserver === 'undefined',
    );

    useEffect(() => {
        const el = ref.current;

        if (!el || typeof IntersectionObserver === 'undefined') {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -10% 0px' },
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            className={['vb-reveal', visible ? 'is-visible' : '', className]
                .filter(Boolean)
                .join(' ')}
            style={delay ? { animationDelay: `${delay}ms` } : undefined}
        >
            {children}
        </Tag>
    );
}
