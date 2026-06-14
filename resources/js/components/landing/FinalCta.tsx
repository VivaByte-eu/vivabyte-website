import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { Reveal } from './Reveal';

export function FinalCta() {
    const { t } = useTranslation();

    return (
        <section
            aria-labelledby="final-cta-heading"
            className="bg-vb-deep py-24 text-white"
        >
            <div className="mx-auto max-w-4xl px-6">
                <Reveal>
                    <div className="vb-gradient-pan relative overflow-hidden rounded-3xl bg-gradient-to-br from-vb-primary via-vb-primary-bright to-vb-accent p-10 text-center shadow-2xl shadow-vb-primary/30 md:p-16">
                        <h2
                            id="final-cta-heading"
                            className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl"
                        >
                            {t('cta.title')}
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-white/85">
                            {t('cta.subtitle')}
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="group mt-8 cursor-pointer bg-white px-9 py-6 text-base font-semibold text-vb-deep shadow-lg transition-all duration-300 hover:bg-vb-deep hover:text-white"
                        >
                            <a href="#contact">
                                {t('cta.button')}
                                <ArrowRightIcon className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
