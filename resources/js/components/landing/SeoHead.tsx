import { Head } from '@inertiajs/react';
import { useTranslation } from '@/hooks/use-translation';
import type { LandingPageProps } from '@/types';

const OG_LOCALE_MAP: Record<string, string> = {
    pt: 'pt_PT',
    en: 'en_US',
    es: 'es_ES',
};

const SERVICE_KEYS = ['web', 'seo', 'ads', 'social', 'ai', 'brand'] as const;
const FAQ_KEYS = ['1', '2', '3', '4', '5', '6'] as const;

export function SeoHead({ locale, alternates, canonical }: LandingPageProps) {
    const { t } = useTranslation();

    const siteUrl = canonical.replace(/\/(pt|en|es)$/, '');

    const organizationLd = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Vivabyte',
        url: siteUrl,
        image: `${siteUrl}/og-image.png`,
        description: t('meta.description'),
        priceRange: '$$',
        areaServed: 'Europe',
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            availableLanguage: ['Portuguese', 'English', 'Spanish'],
        },
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: t('services.title'),
            itemListElement: SERVICE_KEYS.map((key) => ({
                '@type': 'Offer',
                itemOffered: {
                    '@type': 'Service',
                    name: t(`services.${key}.title`),
                    description: t(`services.${key}.desc`),
                },
            })),
        },
        sameAs: [
            'https://www.instagram.com/vivabyte',
            'https://www.linkedin.com/company/vivabyte-eu',
        ],
    };

    const faqLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ_KEYS.map((n) => ({
            '@type': 'Question',
            name: t(`faq.q${n}`),
            acceptedAnswer: {
                '@type': 'Answer',
                text: t(`faq.a${n}`),
            },
        })),
    };

    return (
        <Head>
            <title>{t('meta.title')}</title>
            <meta name="description" content={t('meta.description')} />
            <meta name="theme-color" content="#6f209d" />
            <link rel="canonical" href={canonical} />

            {(Object.entries(alternates) as [string, string][]).map(
                ([lang, href]) => (
                    <link
                        key={lang}
                        rel="alternate"
                        hrefLang={lang}
                        href={href}
                    />
                ),
            )}
            <link
                rel="alternate"
                hrefLang="x-default"
                href={alternates['pt']}
            />

            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Vivabyte" />
            <meta property="og:title" content={t('meta.title')} />
            <meta property="og:description" content={t('meta.description')} />
            <meta
                property="og:locale"
                content={OG_LOCALE_MAP[locale] ?? 'pt_PT'}
            />
            <meta property="og:url" content={canonical} />
            <meta property="og:image" content={`${siteUrl}/og-image.png`} />
            <meta property="og:image:alt" content={t('meta.og_image_alt')} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={t('meta.title')} />
            <meta name="twitter:description" content={t('meta.description')} />
            <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />

            <script type="application/ld+json">
                {JSON.stringify(organizationLd)}
            </script>
            <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        </Head>
    );
}
