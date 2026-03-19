import { CardContent } from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';

const CASES = ['case1', 'case2', 'case3'] as const;

export function Portfolio() {
    const { t } = useTranslation();

    return (
        <section id="portfolio" aria-labelledby="portfolio-heading" className="bg-vb-light py-24">
            <div className="mx-auto max-w-7xl px-6">
                <h2
                    id="portfolio-heading"
                    className="mb-16 text-center text-3xl font-bold text-vb-darkest md:text-4xl"
                >
                    {t('portfolio.title')}
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {CASES.map((key) => (
                        <div
                            key={key}
                            className="rounded-xl border-0 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
                        >
                            <CardContent className="p-8">
                                <span className="mb-6 inline-block rounded-full bg-vb-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-vb-primary">
                                    {t(`portfolio.${key}.industry`)}
                                </span>
                                <p className="mb-4 text-3xl font-black leading-tight text-vb-accent">
                                    {t(`portfolio.${key}.metric`)}
                                </p>
                                <p className="text-sm leading-relaxed text-vb-muted">{t(`portfolio.${key}.desc`)}</p>
                            </CardContent>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
