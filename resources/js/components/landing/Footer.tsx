import { Link } from '@inertiajs/react';
import { useTranslation } from '@/hooks/use-translation';
import { openCookieSettings } from '@/lib/consent';
import type { LandingPageProps, Locale } from '@/types';

interface FooterProps {
    alternates: LandingPageProps['alternates'];
    locale: LandingPageProps['locale'];
}

const NAV_LINKS = [
    { key: 'nav.services', seg: 'services' },
    { key: 'nav.about', seg: 'about' },
    { key: 'nav.work', seg: 'work' },
    { key: 'nav.faq', seg: 'faq' },
    { key: 'nav.contact', seg: 'contact' },
] as const;

const SERVICE_LINKS = ['web', 'seo', 'ads', 'ai'] as const;

const LOCALES: Locale[] = ['pt', 'en', 'es'];

export function Footer({ alternates, locale }: FooterProps) {
    const { t } = useTranslation();

    return (
        <footer className="bg-vb-darkest text-vb-light" role="contentinfo">
            <div
                aria-hidden="true"
                className="h-1 w-full bg-gradient-to-r from-vb-primary via-vb-primary-bright to-vb-accent"
            />
            <div className="mx-auto max-w-7xl px-6 py-16">
                <div className="mb-12 grid grid-cols-2 gap-10 md:grid-cols-4">
                    {/* Brand column */}
                    <div className="col-span-2 md:col-span-1">
                        <Link
                            href={`/${locale}`}
                            className="mb-4 inline-flex items-baseline font-display text-3xl font-bold tracking-tight"
                            aria-label="Vivabyte home"
                        >
                            <span className="text-white">Viva</span>
                            <span className="text-vb-primary-bright">byte</span>
                        </Link>
                        <p className="max-w-xs text-sm leading-relaxed text-vb-muted">
                            {t('footer.tagline')}
                        </p>
                    </div>

                    {/* Services column */}
                    <div>
                        <p className="mb-4 text-sm font-semibold text-white">
                            {t('footer.services')}
                        </p>
                        <ul role="list" className="space-y-3">
                            {SERVICE_LINKS.map((key) => (
                                <li key={key}>
                                    <Link
                                        href={`/${locale}/services`}
                                        className="text-sm text-vb-muted transition-colors hover:text-white"
                                    >
                                        {t(`services.${key}.title`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation column */}
                    <nav aria-label="Footer navigation">
                        <p className="mb-4 text-sm font-semibold text-white">
                            {t('footer.company')}
                        </p>
                        <ul role="list" className="space-y-3">
                            {NAV_LINKS.map(({ key, seg }) => (
                                <li key={key}>
                                    <Link
                                        href={`/${locale}/${seg}`}
                                        className="text-sm text-vb-muted transition-colors hover:text-white"
                                    >
                                        {t(key)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Social + language column */}
                    <div>
                        <p className="mb-4 text-sm font-semibold text-white">
                            {t('footer.social')}
                        </p>
                        <div className="mb-8 flex gap-4">
                            <a
                                href="https://www.instagram.com/vivabyte"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Vivabyte on Instagram"
                                className="text-vb-muted transition-colors hover:text-white"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.linkedin.com/company/vivabyte-eu"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Vivabyte on LinkedIn"
                                className="text-vb-muted transition-colors hover:text-white"
                            >
                                <svg
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>

                        <nav aria-label="Language footer">
                            <div className="flex gap-3">
                                {LOCALES.map((lang) => (
                                    <a
                                        key={lang}
                                        href={alternates[lang]}
                                        hrefLang={lang}
                                        aria-current={
                                            lang === locale ? 'page' : undefined
                                        }
                                        className={[
                                            'text-xs font-semibold uppercase transition-colors',
                                            lang === locale
                                                ? 'text-white'
                                                : 'text-vb-muted hover:text-white',
                                        ].join(' ')}
                                    >
                                        {lang}
                                    </a>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-3 border-t border-white/10 pt-8 text-center sm:flex-row sm:justify-between">
                    <p className="text-xs text-vb-muted">
                        {t('footer.copyright')}
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href={`/${locale}/privacy`}
                            className="text-xs text-vb-muted transition-colors hover:text-white"
                        >
                            {t('footer.privacy')}
                        </Link>
                        <button
                            type="button"
                            onClick={openCookieSettings}
                            className="text-xs text-vb-muted transition-colors hover:text-white"
                        >
                            {t('footer.cookie_settings')}
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
