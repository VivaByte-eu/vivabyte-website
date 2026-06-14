import { PageHeader, SiteShell, WorkComingSoon } from '@/components/landing';
import type { LandingPageProps } from '@/types';

export default function WorkPage(props: LandingPageProps) {
    return (
        <SiteShell {...props}>
            <PageHeader page="work" />
            <WorkComingSoon locale={props.locale} />
        </SiteShell>
    );
}
