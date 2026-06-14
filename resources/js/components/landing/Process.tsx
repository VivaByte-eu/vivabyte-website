import { useTranslation } from '@/hooks/use-translation';
import { Reveal } from './Reveal';

const STEPS = ['step1', 'step2', 'step3', 'step4'] as const;

export function Process() {
    const { t } = useTranslation();

    return (
        <section
            id="process"
            aria-labelledby="process-heading"
            className="bg-vb-mist py-24"
        >
            <div className="mx-auto max-w-7xl px-6">
                <Reveal className="mb-16 text-center">
                    <span className="font-mono text-xs font-semibold tracking-[0.2em] text-vb-primary uppercase">
                        {t('process.eyebrow')}
                    </span>
                    <h2
                        id="process-heading"
                        className="mt-3 font-display text-3xl font-bold text-vb-darkest md:text-5xl"
                    >
                        {t('process.title')}
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-vb-muted">
                        {t('process.subtitle')}
                    </p>
                </Reveal>

                <ol
                    role="list"
                    className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {/* Connecting line on desktop */}
                    <div
                        aria-hidden="true"
                        className="absolute top-7 right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-vb-primary/30 to-transparent lg:block"
                    />
                    {STEPS.map((step, i) => (
                        <Reveal
                            as="li"
                            key={step}
                            delay={i * 110}
                            className="relative"
                        >
                            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-vb-primary to-vb-primary-bright font-display text-xl font-bold text-white shadow-lg shadow-vb-primary/25">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <h3 className="mt-5 font-display text-lg font-semibold text-vb-darkest">
                                    {t(`process.${step}.title`)}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-vb-muted">
                                    {t(`process.${step}.desc`)}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </ol>
            </div>
        </section>
    );
}
