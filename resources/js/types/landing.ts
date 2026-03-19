export type Locale = 'pt' | 'en' | 'es';

export interface LandingPageProps {
    locale: Locale;
    alternates: Record<Locale, string>;
    canonical: string;
}

export interface SharedProps extends Record<string, unknown> {
    name: string;
    auth: { user: Record<string, unknown> | null };
    sidebarOpen: boolean;
    locale: Locale;
    translations: Record<string, string>;
    flash?: { type: 'success' | 'error'; message: string };
}
