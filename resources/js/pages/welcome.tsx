import {
    Clients,
    ContactForm,
    Faq,
    FinalCta,
    Footer,
    Header,
    Hero,
    Portfolio,
    Process,
    SeoHead,
    Services,
    Testimonial,
    WhyUs,
} from '@/components/landing';
import type { LandingPageProps } from '@/types';

export default function Landing({
    locale,
    alternates,
    canonical,
}: LandingPageProps) {
    return (
        <>
            <SeoHead
                locale={locale}
                alternates={alternates}
                canonical={canonical}
            />

            <div className="flex min-h-screen flex-col">
                <Header locale={locale} alternates={alternates} />

                <main id="main-content">
                    <Hero />
                    <Clients />
                    <Services />
                    <Process />
                    <WhyUs />
                    <Portfolio />
                    <Testimonial />
                    <Faq />
                    <FinalCta />
                    <ContactForm />
                </main>

                <Footer locale={locale} alternates={alternates} />
            </div>
        </>
    );
}
