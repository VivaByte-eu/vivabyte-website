import { ContactForm, Faq, Footer, Header, Hero, Portfolio, SeoHead, Services, WhyUs } from '@/components/landing';
import type { LandingPageProps } from '@/types';

export default function Landing({ locale, alternates, canonical }: LandingPageProps) {
    return (
        <>
            <SeoHead locale={locale} alternates={alternates} canonical={canonical} />

            <div className="flex min-h-screen flex-col">
                <Header locale={locale} alternates={alternates} />

                <main id="main-content">
                    <Hero />
                    <Services />
                    <WhyUs />
                    <Portfolio />
                    <Faq />
                    <ContactForm />
                </main>

                <Footer locale={locale} alternates={alternates} />
            </div>
        </>
    );
}
