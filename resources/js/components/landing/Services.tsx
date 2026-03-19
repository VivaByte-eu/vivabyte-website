import { CodeIcon, SearchIcon, ShareIcon, TargetIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from '@/hooks/use-translation';

const SERVICES = [
    { key: 'seo', Icon: SearchIcon },
    { key: 'ads', Icon: TargetIcon },
    { key: 'social', Icon: ShareIcon },
    { key: 'web', Icon: CodeIcon },
] as const;

export function Services() {
    const { t } = useTranslation();

    return (
        <section id="services" aria-labelledby="services-heading" className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                <h2
                    id="services-heading"
                    className="mb-16 text-center text-3xl font-bold text-vb-darkest md:text-4xl"
                >
                    {t('services.title')}
                </h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {SERVICES.map(({ key, Icon }) => (
                        <Card
                            key={key}
                            className="group border border-vb-light transition-all duration-300 hover:border-vb-primary hover:shadow-lg"
                        >
                            <CardHeader>
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-vb-light transition-colors duration-300 group-hover:bg-vb-primary">
                                    <Icon
                                        className="h-6 w-6 text-vb-primary transition-colors duration-300 group-hover:text-white"
                                        aria-hidden="true"
                                    />
                                </div>
                                <CardTitle className="text-lg leading-snug text-vb-darkest">
                                    {t(`services.${key}.title`)}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm leading-relaxed text-vb-muted">{t(`services.${key}.desc`)}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
