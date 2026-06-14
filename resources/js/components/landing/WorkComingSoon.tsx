import { ArrowRightIcon, ConstructionIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { Reveal } from './Reveal';

export function WorkComingSoon({ locale }: { locale: string }) {
    const { t } = useTranslation();

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-2xl px-6 text-center">
                <Reveal>
                    <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-vb-light text-vb-primary">
                        <ConstructionIcon className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-vb-darkest md:text-3xl">
                        {t('work.soon.title')}
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-vb-muted">{t('work.soon.body')}</p>
                    <Button
                        asChild
                        size="lg"
                        className="group mt-8 cursor-pointer rounded-full bg-gradient-to-br from-vb-accent-bright to-vb-accent px-8 py-6 font-semibold text-vb-deep shadow-lg shadow-vb-accent/25 transition-all duration-300 hover:shadow-xl"
                    >
                        <a href={`/${locale}/contact`}>
                            {t('work.soon.cta')}
                            <ArrowRightIcon className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </Button>
                </Reveal>
            </div>
        </section>
    );
}
