import { FinalCta, Hero, Services, SiteShell, Values } from '@/components/landing';
import type { LandingPageProps } from '@/types';

export default function Home(props: LandingPageProps) {
    return (
        <SiteShell {...props}>
            <Hero />
            <Services />
            <Values />
            <FinalCta />
        </SiteShell>
    );
}
