import { ArrowRightIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import { Reveal } from './Reveal';

export function Hero() {
    const { t, locale } = useTranslation();

    // Honor reduced-motion: show the poster image instead of autoplaying video.
    const [motionOk, setMotionOk] = useState(true);
    useEffect(() => {
        // Sync with the OS motion preference after mount (avoids SSR/hydration mismatch).
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMotionOk(
            !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
        );
    }, []);

    return (
        <section
            id="hero"
            aria-labelledby="hero-heading"
            className="relative flex min-h-[92vh] items-center overflow-hidden bg-vb-deep text-white"
        >
            {/* Background video / poster */}
            <div aria-hidden="true" className="absolute inset-0">
                {motionOk ? (
                    <video
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/hero-poster.jpg"
                        aria-label={t('hero.video_label')}
                    >
                        <source src="/hero.webm" type="video/webm" />
                        <source src="/hero.mp4" type="video/mp4" />
                    </video>
                ) : (
                    <img
                        src="/hero-poster.jpg"
                        alt=""
                        className="h-full w-full object-cover"
                    />
                )}
            </div>

            {/* Violet wash for legibility + brand tint over the footage */}
            <div
                aria-hidden="true"
                className="vb-gradient-pan absolute inset-0 bg-gradient-to-br from-vb-deep/95 via-vb-darkest/85 to-vb-primary/70"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,transparent,rgba(21,10,38,0.65))]"
            />

            <div className="relative mx-auto w-full max-w-5xl px-6 py-28 text-center">
                <Reveal>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-vb-accent-bright opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-vb-accent-bright" />
                        </span>
                        {t('hero.eyebrow')}
                    </span>
                </Reveal>

                <Reveal delay={80}>
                    <h1
                        id="hero-heading"
                        className="mx-auto mt-7 max-w-4xl font-display text-5xl leading-[1.04] font-bold tracking-tight text-balance md:text-7xl"
                    >
                        {t('hero.headline')}
                    </h1>
                </Reveal>

                <Reveal delay={160}>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl">
                        {t('hero.subheadline')}
                    </p>
                </Reveal>

                <Reveal delay={240}>
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Button
                            asChild
                            size="lg"
                            className="group cursor-pointer bg-vb-accent px-9 py-6 text-base font-semibold text-vb-deep shadow-lg shadow-vb-accent/30 transition-all duration-300 hover:bg-vb-accent-bright hover:shadow-xl hover:shadow-vb-accent/40"
                        >
                            <a href={`/${locale}/contact`}>
                                {t('hero.cta_primary')}
                                <ArrowRightIcon className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="cursor-pointer border-white/30 bg-white/5 px-9 py-6 text-base font-semibold text-white backdrop-blur transition-colors duration-300 hover:border-white hover:bg-white hover:text-vb-deep"
                        >
                            <a href={`/${locale}/work`}>{t('hero.cta_secondary')}</a>
                        </Button>
                    </div>
                </Reveal>
            </div>

            {/* Scroll cue */}
            <a
                href={`/${locale}/services`}
                aria-label={t('hero.scroll')}
                className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/60 transition-colors hover:text-white md:flex"
            >
                <span className="font-mono text-[11px] font-medium tracking-widest uppercase">
                    {t('hero.scroll')}
                </span>
                <span className="vb-bob flex h-9 w-5 items-start justify-center rounded-full border border-white/30 p-1">
                    <span className="h-2 w-1 rounded-full bg-white/70" />
                </span>
            </a>
        </section>
    );
}
