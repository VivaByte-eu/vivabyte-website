import { Link, usePage } from '@inertiajs/react';
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from '@/hooks/use-translation';
import { cn } from '@/lib/utils';
import type { LandingPageProps, Locale } from '@/types';
import { Flag, LOCALE_NAMES } from './Flags';

interface HeaderProps {
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

const LOCALES: Locale[] = ['pt', 'en', 'es'];

// Shared gold CTA — a gradient keeps it luminous on white instead of muddy brown.
const CTA_CLASS =
    'cursor-pointer rounded-full bg-gradient-to-br from-vb-accent-bright to-vb-accent font-semibold text-vb-deep shadow-sm shadow-vb-accent/25 transition-all duration-300 hover:from-vb-accent-bright hover:to-vb-accent-bright hover:shadow-md';

function LanguageSwitcher({
    locale,
    alternates,
}: {
    locale: Locale;
    alternates: LandingPageProps['alternates'];
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="group flex cursor-pointer items-center gap-2 rounded-full border border-vb-light bg-white px-3 py-1.5 text-sm font-medium text-vb-darkest transition-colors hover:border-vb-primary/40 hover:bg-vb-mist focus-visible:ring-2 focus-visible:ring-vb-primary focus-visible:outline-none">
                <Flag locale={locale} />
                <span className="uppercase">{locale}</span>
                <ChevronDownIcon className="h-4 w-4 text-vb-muted transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                className="min-w-44 border-vb-light bg-white text-vb-darkest shadow-lg shadow-vb-primary/10"
            >
                {LOCALES.map((lang) => (
                    <DropdownMenuItem
                        key={lang}
                        asChild
                        className={cn(
                            'cursor-pointer gap-3 focus:bg-vb-mist focus:text-vb-primary',
                            lang === locale ? 'font-semibold text-vb-primary' : 'text-vb-darkest',
                        )}
                    >
                        <Link
                            href={alternates[lang]}
                            hrefLang={lang}
                            aria-current={lang === locale ? 'page' : undefined}
                            className="flex items-center"
                        >
                            <Flag locale={lang} />
                            <span>{LOCALE_NAMES[lang]}</span>
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export function Header({ alternates, locale }: HeaderProps) {
    const { t } = useTranslation();
    const { url } = usePage();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const currentPath = url.split('?')[0];
    const isActive = (seg: string) => currentPath === `/${locale}/${seg}`;

    return (
        <header
            className={cn(
                'sticky top-0 z-50 border-b bg-white transition-shadow duration-300',
                scrolled ? 'border-vb-light/70 shadow-sm shadow-vb-primary/5' : 'border-transparent',
            )}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
                {/* Logo — mix-blend-multiply drops the white image background onto the white bar */}
                <Link href={`/${locale}`} className="flex shrink-0 items-center" aria-label="Vivabyte home">
                    <img
                        src="/vivabyte_logo_Alpha.webp"
                        alt="Vivabyte"
                        className="h-11 w-auto mix-blend-multiply"
                    />
                </Link>

                {/* Desktop nav — centered */}
                <nav aria-label="Primary" className="hidden md:flex md:flex-1 md:items-center md:justify-center md:gap-9">
                    {NAV_LINKS.map(({ key, seg }) => {
                        const active = isActive(seg);

                        return (
                            <Link
                                key={key}
                                href={`/${locale}/${seg}`}
                                aria-current={active ? 'page' : undefined}
                                className={cn(
                                    'group relative text-sm font-medium transition-colors',
                                    active ? 'text-vb-primary' : 'text-vb-darkest hover:text-vb-primary',
                                )}
                            >
                                {t(key)}
                                <span
                                    aria-hidden="true"
                                    className={cn(
                                        'absolute -bottom-1.5 left-0 h-0.5 w-full origin-left rounded-full bg-vb-accent transition-transform duration-300',
                                        active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
                                    )}
                                />
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                    <LanguageSwitcher locale={locale} alternates={alternates} />

                    {/* Desktop CTA */}
                    <Button asChild className={cn('hidden px-5 md:inline-flex', CTA_CLASS)}>
                        <Link href={`/${locale}/contact`}>{t('nav.cta')}</Link>
                    </Button>

                    {/* Mobile menu toggle */}
                    <button
                        className="cursor-pointer rounded-md p-2 text-vb-darkest transition-colors hover:bg-vb-light/60 md:hidden"
                        aria-label="Toggle menu"
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((v) => !v)}
                    >
                        {mobileOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {mobileOpen && (
                <div className="flex flex-col gap-1 border-t border-vb-light bg-white px-6 py-4 md:hidden">
                    {NAV_LINKS.map(({ key, seg }) => (
                        <Link
                            key={key}
                            href={`/${locale}/${seg}`}
                            aria-current={isActive(seg) ? 'page' : undefined}
                            className={cn(
                                'rounded-lg px-2 py-2.5 text-sm font-medium transition-colors hover:bg-vb-mist hover:text-vb-primary',
                                isActive(seg) ? 'bg-vb-mist text-vb-primary' : 'text-vb-darkest',
                            )}
                            onClick={() => setMobileOpen(false)}
                        >
                            {t(key)}
                        </Link>
                    ))}
                    <Button asChild className={cn('mt-3 w-full', CTA_CLASS)}>
                        <Link href={`/${locale}/contact`} onClick={() => setMobileOpen(false)}>
                            {t('nav.cta')}
                        </Link>
                    </Button>
                </div>
            )}
        </header>
    );
}
