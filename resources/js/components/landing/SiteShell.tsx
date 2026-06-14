import type { ReactNode } from 'react';
import type { LandingPageProps } from '@/types';
import { Footer } from './Footer';
import { Header } from './Header';
import { SeoHead } from './SeoHead';

interface SiteShellProps extends LandingPageProps {
    children: ReactNode;
}

/**
 * Shared chrome for every public page: SEO head, sticky header, and footer.
 */
export function SiteShell({ children, ...props }: SiteShellProps) {
    const { locale, alternates } = props;

    return (
        <>
            <SeoHead {...props} />

            <div className="flex min-h-screen flex-col">
                <Header locale={locale} alternates={alternates} />

                <main id="main-content" className="flex-1">
                    {children}
                </main>

                <Footer locale={locale} alternates={alternates} />
            </div>
        </>
    );
}
