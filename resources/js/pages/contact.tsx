import { ContactForm, PageHeader, SiteShell } from '@/components/landing';
import type { LandingPageProps } from '@/types';

export default function ContactPage(props: LandingPageProps) {
    return (
        <SiteShell {...props}>
            <PageHeader page="contact" />
            <ContactForm showHeader={false} />
        </SiteShell>
    );
}
