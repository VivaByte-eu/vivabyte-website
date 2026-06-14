import { useTranslation } from '@/hooks/use-translation';
import { Reveal } from './Reveal';

export function AboutIntro() {
    const { t } = useTranslation();

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-3xl px-6">
                <Reveal>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-vb-darkest md:text-4xl">
                        {t('about.intro.title')}
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-vb-muted">
                        {t('about.intro.body1')}
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-vb-muted">
                        {t('about.intro.body2')}
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
