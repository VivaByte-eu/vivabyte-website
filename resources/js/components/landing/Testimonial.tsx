import { useTranslation } from '@/hooks/use-translation';
import { Reveal } from './Reveal';

export function Testimonial() {
    const { t } = useTranslation();

    return (
        <section
            aria-labelledby="testimonial-heading"
            className="bg-vb-mist py-24"
        >
            <div className="mx-auto max-w-3xl px-6 text-center">
                <Reveal>
                    <span
                        id="testimonial-heading"
                        className="font-mono text-xs font-semibold tracking-[0.2em] text-vb-primary uppercase"
                    >
                        {t('testimonial.eyebrow')}
                    </span>

                    {/* Decorative quote mark */}
                    <p
                        aria-hidden="true"
                        className="mt-4 font-display text-6xl leading-none text-vb-primary/20"
                    >
                        &ldquo;
                    </p>

                    <blockquote className="-mt-4 font-display text-2xl leading-snug font-medium text-vb-darkest md:text-3xl">
                        {t('testimonial.quote')}
                    </blockquote>

                    <figcaption className="mt-8 flex flex-col items-center gap-1">
                        <span
                            className="h-px w-10 bg-vb-accent"
                            aria-hidden="true"
                        />
                        <span className="mt-3 font-semibold text-vb-darkest">
                            {t('testimonial.author')}
                        </span>
                        <span className="text-sm text-vb-muted">
                            {t('testimonial.role')}
                        </span>
                    </figcaption>
                </Reveal>
            </div>
        </section>
    );
}
