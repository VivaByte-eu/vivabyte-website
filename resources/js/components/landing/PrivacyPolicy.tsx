import { useTranslation } from '@/hooks/use-translation';
import { openCookieSettings } from '@/lib/consent';
import { Reveal } from './Reveal';

const SECTIONS = [
    'controller',
    'data',
    'analytics',
    'cookies',
    'legal',
    'storage',
    'retention',
    'rights',
    'complaints',
] as const;

/**
 * Renders a translated paragraph block; each line in the source string
 * (split on \n) becomes its own paragraph or bullet ("• " prefix).
 */
function Paragraphs({ text }: { text: string }) {
    return (
        <>
            {text.split('\n').map((line, i) =>
                line.startsWith('• ') ? (
                    <li key={i} className="ml-5 list-disc text-vb-darkest/80">
                        {line.slice(2)}
                    </li>
                ) : (
                    <p key={i} className="text-vb-darkest/80">
                        {line}
                    </p>
                ),
            )}
        </>
    );
}

export function PrivacyPolicy() {
    const { t } = useTranslation();

    return (
        <section className="bg-white">
            <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
                <Reveal>
                    <p className="mb-8 text-sm text-vb-darkest/60">
                        {t('privacy.updated')}
                    </p>

                    <div className="space-y-4 leading-relaxed">
                        <Paragraphs text={t('privacy.intro')} />
                    </div>

                    {SECTIONS.map((key) => (
                        <div key={key} className="mt-10">
                            <h2 className="mb-3 font-display text-2xl font-bold text-vb-darkest">
                                {t(`privacy.${key}.title`)}
                            </h2>
                            <div className="space-y-3 leading-relaxed">
                                <Paragraphs text={t(`privacy.${key}.body`)} />
                            </div>
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={openCookieSettings}
                        className="mt-10 inline-flex rounded-md bg-vb-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-vb-primary/90"
                    >
                        {t('privacy.manage_cookies')}
                    </button>
                </Reveal>
            </div>
        </section>
    );
}
