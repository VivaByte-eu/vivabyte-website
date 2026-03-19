import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';

export function Hero() {
    const { t } = useTranslation();

    return (
        <section id="hero" aria-labelledby="hero-heading" className="flex min-h-[90vh] items-center bg-vb-light">
            <div className="mx-auto max-w-7xl px-6 py-24 text-center">
                <h1
                    id="hero-heading"
                    className="mx-auto max-w-4xl text-5xl leading-[1.08] font-black text-vb-darkest md:text-7xl"
                >
                    {t('hero.headline')}
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-vb-muted md:text-2xl">
                    {t('hero.subheadline')}
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button
                        asChild
                        size="lg"
                        className="bg-vb-accent px-10 py-6 text-base font-semibold text-white hover:bg-vb-accent/90"
                    >
                        <a href="#contact">{t('hero.cta_primary')}</a>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="border-vb-primary px-10 py-6 text-base font-semibold text-vb-primary transition-colors hover:bg-vb-primary hover:text-white"
                    >
                        <a href="#portfolio">{t('hero.cta_secondary')}</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
