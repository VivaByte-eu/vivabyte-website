import { CheckCircleIcon } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

const TRUST_KEYS = ['why.trust1', 'why.trust2', 'why.trust3', 'why.trust4'] as const;

export function WhyUs() {
    const { t } = useTranslation();

    const stats = [
        { value: t('why.stat1.value'), label: t('why.stat1.label') },
        { value: t('why.stat2.value'), label: t('why.stat2.label') },
        { value: t('why.stat3.value'), label: t('why.stat3.label') },
    ];

    return (
        <section id="why-us" aria-labelledby="why-heading" className="bg-vb-darkest py-24 text-white">
            <div className="mx-auto max-w-7xl px-6">
                <h2 id="why-heading" className="mb-16 text-center text-3xl font-bold md:text-4xl">
                    {t('why.title')}
                </h2>

                <div className="mb-16 grid grid-cols-3 gap-8 text-center">
                    {stats.map(({ value, label }) => (
                        <div key={label}>
                            <p className="text-4xl font-black text-vb-accent md:text-5xl">{value}</p>
                            <p className="mt-2 text-sm font-medium text-vb-light">{label}</p>
                        </div>
                    ))}
                </div>

                <ul role="list" className="mx-auto grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
                    {TRUST_KEYS.map((key) => (
                        <li key={key} className="flex items-start gap-3">
                            <CheckCircleIcon
                                className="mt-0.5 h-5 w-5 shrink-0 text-vb-accent"
                                aria-hidden="true"
                            />
                            <span className="text-sm text-vb-light">{t(key)}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
