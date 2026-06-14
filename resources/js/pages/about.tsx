import { AboutIntro, FinalCta, PageHeader, SiteShell, Values } from '@/components/landing';
import type { LandingPageProps } from '@/types';

export default function AboutPage(props: LandingPageProps) {
    return (
        <SiteShell {...props}>
            <PageHeader page="about" />
            <AboutIntro />
            <Values />
            <FinalCta />
        </SiteShell>
    );
}
