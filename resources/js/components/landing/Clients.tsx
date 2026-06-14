import { useTranslation } from '@/hooks/use-translation';

// Placeholder client wordmarks — swap for real client names/logos.
const CLIENTS = [
    'Northwind',
    'Lumen',
    'Vertex',
    'Atlas&Co',
    'Boreal',
    'Quanta',
    'Meridian',
    'Halo',
];

export function Clients() {
    const { t } = useTranslation();

    return (
        <section
            aria-label={t('clients.label')}
            className="border-y border-vb-light bg-white py-10"
        >
            <div className="mx-auto max-w-7xl px-6">
                <p className="mb-7 text-center font-mono text-xs font-semibold tracking-[0.2em] text-vb-muted uppercase">
                    {t('clients.label')}
                </p>

                <div className="vb-marquee-group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
                    <div className="vb-marquee flex w-max items-center gap-14">
                        {[...CLIENTS, ...CLIENTS].map((name, i) => (
                            <span
                                key={`${name}-${i}`}
                                aria-hidden={i >= CLIENTS.length}
                                className="font-display text-xl font-semibold whitespace-nowrap text-vb-darkest/35 transition-colors duration-300 hover:text-vb-primary md:text-2xl"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
