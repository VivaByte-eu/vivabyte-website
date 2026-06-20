import { PageHeader, PrivacyPolicy, SiteShell } from '@/components/landing';
import type { LandingPageProps } from '@/types';

export default function PrivacyPage(props: LandingPageProps) {
    return (
        <SiteShell {...props}>
            <PageHeader page="privacy" />
            <PrivacyPolicy />
        </SiteShell>
    );
}
