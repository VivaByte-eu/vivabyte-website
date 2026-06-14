import { ArrowUpRightIcon } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { Reveal } from './Reveal';

const CASES = ['case1', 'case2', 'case3'] as const;

export function Portfolio() {
    const { t } = useTranslation();

    return (
        <section
            id="work"
            aria-labelledby="work-heading"
            className="bg-white py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <Reveal className="mb-16 text-center">
                    <span className="font-mono text-xs font-semibold tracking-[0.2em] text-vb-primary uppercase">
                        {t('portfolio.eyebrow')}
                    </span>
                    <h2
                        id="work-heading"
                        className="mt-3 font-display text-3xl font-bold text-vb-darkest md:text-5xl"
                    >
                        {t('portfolio.title')}
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-vb-muted">
                        {t('portfolio.subtitle')}
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {CASES.map((key, i) => (
                        <Reveal key={key} delay={i * 100}>
                            <article className="group relative h-full overflow-hidden rounded-2xl border border-vb-light bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-vb-primary/10">
                                <span
                                    aria-hidden="true"
                                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-vb-primary to-vb-accent transition-transform duration-300 group-hover:scale-x-100"
                                />
                                <div className="flex items-start justify-between">
                                    <span className="inline-block rounded-full bg-vb-light px-3 py-1 text-xs font-semibold tracking-wide text-vb-primary uppercase">
                                        {t(`portfolio.${key}.industry`)}
                                    </span>
                                    <ArrowUpRightIcon
                                        className="h-5 w-5 text-vb-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-vb-primary"
                                        aria-hidden="true"
                                    />
                                </div>
                                <p className="mt-6 bg-gradient-to-r from-vb-primary to-vb-accent bg-clip-text font-display text-3xl leading-tight font-bold text-transparent">
                                    {t(`portfolio.${key}.metric`)}
                                </p>
                                <p className="mt-4 text-sm leading-relaxed text-vb-muted">
                                    {t(`portfolio.${key}.desc`)}
                                </p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
