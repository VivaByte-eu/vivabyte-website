import { CheckCircleIcon } from 'lucide-react';
import { useCountUp } from '@/hooks/use-count-up';
import { useTranslation } from '@/hooks/use-translation';
import { Reveal } from './Reveal';

const STAT_KEYS = ['stat1', 'stat2', 'stat3', 'stat4'] as const;
const TRUST_KEYS = [
    'why.trust1',
    'why.trust2',
    'why.trust3',
    'why.trust4',
] as const;

function Counter({
    value,
    suffix,
    label,
}: {
    value: number;
    suffix: string;
    label: string;
}) {
    const { ref, value: current } = useCountUp<HTMLDivElement>({
        target: value,
    });

    return (
        <div
            ref={ref}
            className="ring-vb-glass rounded-2xl border border-white/10 bg-white/5 px-6 py-8 text-center backdrop-blur-sm"
        >
            <p className="bg-gradient-to-r from-white to-vb-accent-bright bg-clip-text font-display text-4xl font-bold text-transparent md:text-5xl">
                {current}
                {suffix}
            </p>
            <p className="mt-2 text-sm font-medium text-vb-light">{label}</p>
        </div>
    );
}

export function WhyUs() {
    const { t } = useTranslation();

    return (
        <section
            id="why-us"
            aria-labelledby="why-heading"
            className="bg-vb-deep-gradient relative overflow-hidden py-24 text-white"
        >
            <div className="relative mx-auto max-w-7xl px-6">
                <Reveal className="mb-16 text-center">
                    <span className="font-mono text-xs font-semibold tracking-[0.2em] text-vb-accent-bright uppercase">
                        {t('why.eyebrow')}
                    </span>
                    <h2
                        id="why-heading"
                        className="mt-3 font-display text-3xl font-bold md:text-5xl"
                    >
                        {t('why.title')}
                    </h2>
                </Reveal>

                <div className="mb-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
                    {STAT_KEYS.map((key, i) => (
                        <Reveal key={key} delay={i * 90}>
                            <Counter
                                value={Number(t(`why.${key}.value`))}
                                suffix={t(`why.${key}.suffix`)}
                                label={t(`why.${key}.label`)}
                            />
                        </Reveal>
                    ))}
                </div>

                <Reveal>
                    <ul
                        role="list"
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2"
                    >
                        {TRUST_KEYS.map((key) => (
                            <li
                                key={key}
                                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                            >
                                <CheckCircleIcon
                                    className="mt-0.5 h-5 w-5 shrink-0 text-vb-accent-bright"
                                    aria-hidden="true"
                                />
                                <span className="text-sm text-vb-light">
                                    {t(key)}
                                </span>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>
        </section>
    );
}
