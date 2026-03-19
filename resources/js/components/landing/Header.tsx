import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/use-translation';
import type { LandingPageProps, Locale } from '@/types';

interface HeaderProps {
    alternates: LandingPageProps['alternates'];
    locale: LandingPageProps['locale'];
}

const NAV_LINKS = [
    { key: 'nav.services', href: '#services' },
    { key: 'nav.why_us', href: '#why-us' },
    { key: 'nav.portfolio', href: '#portfolio' },
    { key: 'nav.faq', href: '#faq' },
    { key: 'nav.contact', href: '#contact' },
] as const;

const LOCALES: Locale[] = ['pt', 'en', 'es'];

export function Header({ alternates, locale }: HeaderProps) {
    const { t } = useTranslation();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-vb-light bg-white/95 backdrop-blur-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
                {/* Typographic logo */}
                <a href={`/${locale}`} className="flex shrink-0 items-baseline" aria-label="Vivabyte home">
                    <span className="text-2xl font-black tracking-tight text-vb-primary">viva</span>
                    <span className="text-2xl font-black tracking-tight text-vb-accent">byte</span>
                </a>

                {/* Desktop nav */}
                <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
                    {NAV_LINKS.map(({ key, href }) => (
                        <a
                            key={key}
                            href={href}
                            className="text-sm font-medium text-vb-darkest transition-colors hover:text-vb-primary"
                        >
                            {t(key)}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    {/* Language switcher */}
                    <nav aria-label="Language" className="flex gap-1">
                        {LOCALES.map((lang) => (
                            <a
                                key={lang}
                                href={alternates[lang]}
                                aria-current={lang === locale ? 'page' : undefined}
                                hrefLang={lang}
                                className={[
                                    'rounded px-2 py-1 text-xs font-bold uppercase transition-colors',
                                    lang === locale
                                        ? 'bg-vb-primary text-white'
                                        : 'text-vb-muted hover:text-vb-primary',
                                ].join(' ')}
                            >
                                {lang}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <Button
                        asChild
                        className="hidden bg-vb-accent text-white hover:bg-vb-accent/90 md:inline-flex"
                    >
                        <a href="#contact">{t('nav.cta')}</a>
                    </Button>

                    {/* Mobile menu toggle */}
                    <button
                        className="p-2 text-vb-darkest md:hidden"
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            {mobileOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {mobileOpen && (
                <div className="flex flex-col gap-4 border-t border-vb-light bg-white px-6 py-4 md:hidden">
                    {NAV_LINKS.map(({ key, href }) => (
                        <a
                            key={key}
                            href={href}
                            className="text-sm font-medium text-vb-darkest"
                            onClick={() => setMobileOpen(false)}
                        >
                            {t(key)}
                        </a>
                    ))}
                    <Button
                        asChild
                        className="w-full bg-vb-accent text-white hover:bg-vb-accent/90"
                    >
                        <a href="#contact" onClick={() => setMobileOpen(false)}>
                            {t('nav.cta')}
                        </a>
                    </Button>
                </div>
            )}
        </header>
    );
}
