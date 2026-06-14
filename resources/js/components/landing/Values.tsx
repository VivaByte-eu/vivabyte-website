import { GitMergeIcon, HandshakeIcon, RocketIcon, SparklesIcon } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { Reveal } from './Reveal';

const VALUES: { key: string; Icon: LucideIcon }[] = [
    { key: '1', Icon: GitMergeIcon },
    { key: '2', Icon: SparklesIcon },
    { key: '3', Icon: RocketIcon },
    { key: '4', Icon: HandshakeIcon },
];

export function Values() {
    const { t } = useTranslation();

    return (
        <section aria-labelledby="values-heading" className="bg-vb-mist py-24">
            <div className="mx-auto max-w-7xl px-6">
                <Reveal className="mb-16 text-center">
                    <span className="font-mono text-xs font-semibold tracking-[0.2em] text-vb-primary uppercase">
                        {t('values.eyebrow')}
                    </span>
                    <h2
                        id="values-heading"
                        className="mt-3 font-display text-3xl font-bold text-vb-darkest md:text-5xl"
                    >
                        {t('values.title')}
                    </h2>
                </Reveal>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {VALUES.map(({ key, Icon }, i) => (
                        <Reveal key={key} delay={i * 90}>
                            <article className="flex h-full gap-5 rounded-2xl border border-vb-light bg-white p-7">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-vb-primary to-vb-primary-bright shadow-lg shadow-vb-primary/25">
                                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="font-display text-lg font-semibold text-vb-darkest">
                                        {t(`values.${key}.title`)}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-vb-muted">
                                        {t(`values.${key}.desc`)}
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
