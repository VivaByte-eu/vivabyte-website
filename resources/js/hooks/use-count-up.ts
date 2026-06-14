import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
    /** Final value to count to. */
    target: number;
    /** Animation duration in milliseconds. */
    duration?: number;
}

/**
 * Counts from 0 up to `target` once the element scrolls into view.
 *
 * Returns a ref to attach to the element and the current display value.
 * SSR-safe and fully disabled under `prefers-reduced-motion` (jumps
 * straight to the target).
 */
export function useCountUp<T extends HTMLElement = HTMLDivElement>({
    target,
    duration = 1600,
}: UseCountUpOptions) {
    const ref = useRef<T | null>(null);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const el = ref.current;

        const prefersReduced =
            typeof window !== 'undefined' &&
            window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

        if (
            !el ||
            typeof IntersectionObserver === 'undefined' ||
            prefersReduced
        ) {
            // No animation available/wanted — show the final value immediately.
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setValue(target);

            return;
        }

        let frame = 0;
        let start = 0;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) {
                    return;
                }

                observer.disconnect();

                const step = (timestamp: number) => {
                    if (!start) {
                        start = timestamp;
                    }

                    const progress = Math.min(
                        (timestamp - start) / duration,
                        1,
                    );
                    // easeOutCubic for a confident, decelerating count
                    const eased = 1 - Math.pow(1 - progress, 3);
                    setValue(Math.round(eased * target));

                    if (progress < 1) {
                        frame = requestAnimationFrame(step);
                    }
                };

                frame = requestAnimationFrame(step);
            },
            { threshold: 0.4 },
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [target, duration]);

    return { ref, value };
}
