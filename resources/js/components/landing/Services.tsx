import {
    BotIcon,
    CodeIcon,
    PaletteIcon,
    SearchIcon,
    ShareIcon,
    TargetIcon,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { Reveal } from './Reveal';

const SERVICES: { key: string; Icon: LucideIcon }[] = [
    { key: 'web', Icon: CodeIcon },
    { key: 'seo', Icon: SearchIcon },
    { key: 'ads', Icon: TargetIcon },
    { key: 'social', Icon: ShareIcon },
    { key: 'ai', Icon: BotIcon },
    { key: 'brand', Icon: PaletteIcon },
];

export function Services({ showHeader = true }: { showHeader?: boolean }) {
    const { t } = useTranslation();

    return (
        <section
            id="services"
            aria-labelledby="services-heading"
            className="bg-white py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                {showHeader && (
                    <Reveal className="mb-16 text-center">
                        <span className="font-mono text-xs font-semibold tracking-[0.2em] text-vb-primary uppercase">
                            {t('services.eyebrow')}
                        </span>
                        <h2
                            id="services-heading"
                            className="mt-3 font-display text-3xl font-bold text-vb-darkest md:text-5xl"
                        >
                            {t('services.title')}
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-vb-muted">
                            {t('services.subtitle')}
                        </p>
                    </Reveal>
                )}

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map(({ key, Icon }, i) => (
                        <Reveal key={key} delay={i * 80}>
                            <article className="group relative h-full overflow-hidden rounded-2xl border border-vb-light bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-vb-primary/40 hover:shadow-xl hover:shadow-vb-primary/10">
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-vb-mist to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                />
                                <div className="relative">
                                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-vb-primary to-vb-primary-bright shadow-lg shadow-vb-primary/25 transition-transform duration-300 group-hover:scale-105">
                                        <Icon
                                            className="h-7 w-7 text-white"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <h3 className="font-display text-lg leading-snug font-semibold text-vb-darkest">
                                        {t(`services.${key}.title`)}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-vb-muted">
                                        {t(`services.${key}.desc`)}
                                    </p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
