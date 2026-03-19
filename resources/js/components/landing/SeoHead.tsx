import { Head } from '@inertiajs/react';
import { useTranslation } from '@/hooks/use-translation';
import type { LandingPageProps } from '@/types';

const OG_LOCALE_MAP: Record<string, string> = {
    pt: 'pt_PT',
    en: 'en_US',
    es: 'es_ES',
};

export function SeoHead({ locale, alternates, canonical }: LandingPageProps) {
    const { t } = useTranslation();

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Vivabyte',
        url: canonical.replace(/\/(pt|en|es)$/, ''),
        description: t('meta.description'),
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            availableLanguage: ['Portuguese', 'English', 'Spanish'],
        },
        sameAs: ['https://www.instagram.com/vivabyte', 'https://www.linkedin.com/company/vivabyte'],
    };

    return (
        <Head>
            <title>{t('meta.title')}</title>
            <meta name="description" content={t('meta.description')} />
            <link rel="canonical" href={canonical} />

            {(Object.entries(alternates) as [string, string][]).map(([lang, href]) => (
                <link key={lang} rel="alternate" hrefLang={lang} href={href} />
            ))}
            <link rel="alternate" hrefLang="x-default" href={alternates['pt']} />

            <meta property="og:type" content="website" />
            <meta property="og:title" content={t('meta.title')} />
            <meta property="og:description" content={t('meta.description')} />
            <meta property="og:locale" content={OG_LOCALE_MAP[locale] ?? 'pt_PT'} />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content="/og-image.png" />
            <meta property="og:image:alt" content={t('meta.og_image_alt')} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={t('meta.title')} />
            <meta name="twitter:description" content={t('meta.description')} />

            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Head>
    );
}
