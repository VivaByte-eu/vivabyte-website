import { FinalCta, PageHeader, Process, Services, SiteShell } from '@/components/landing';
import type { LandingPageProps } from '@/types';

export default function ServicesPage(props: LandingPageProps) {
    return (
        <SiteShell {...props}>
            <PageHeader page="services" />
            <Services showHeader={false} />
            <Process />
            <FinalCta />
        </SiteShell>
    );
}
