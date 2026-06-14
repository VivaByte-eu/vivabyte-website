import { useTranslation } from '@/hooks/use-translation';
import type { PageId } from '@/types';
import { Reveal } from './Reveal';

/**
 * Compact dark banner used at the top of every inner page.
 */
export function PageHeader({ page }: { page: Exclude<PageId, 'home'> }) {
    const { t } = useTranslation();

    return (
        <section className="bg-vb-deep-gradient relative overflow-hidden">
            <div
                aria-hidden="true"
                className="bg-vb-dots absolute inset-0 opacity-30 [mask-image:radial-gradient(70%_70%_at_50%_0%,black,transparent)]"
            />
            <div className="relative mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
                <Reveal>
                    <h1 className="font-display text-4xl font-bold tracking-tight text-balance text-white md:text-6xl">
                        {t(`page.${page}.title`)}
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
                        {t(`page.${page}.subtitle`)}
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
