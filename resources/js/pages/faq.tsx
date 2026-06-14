import { Faq, FinalCta, PageHeader, SiteShell } from '@/components/landing';
import type { LandingPageProps } from '@/types';

export default function FaqPage(props: LandingPageProps) {
    return (
        <SiteShell {...props}>
            <PageHeader page="faq" />
            <Faq showHeader={false} />
            <FinalCta />
        </SiteShell>
    );
}
