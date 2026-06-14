import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { useTranslation } from '@/hooks/use-translation';
import { Reveal } from './Reveal';

const FAQ_KEYS = ['1', '2', '3', '4', '5', '6'] as const;

export function Faq() {
    const { t } = useTranslation();
    const [openItem, setOpenItem] = useState<string | null>(null);

    return (
        <section
            id="faq"
            aria-labelledby="faq-heading"
            className="bg-white py-24"
        >
            <div className="mx-auto max-w-3xl px-6">
                <Reveal className="mb-16 text-center">
                    <span className="font-mono text-xs font-semibold tracking-[0.2em] text-vb-primary uppercase">
                        {t('faq.eyebrow')}
                    </span>
                    <h2
                        id="faq-heading"
                        className="mt-3 font-display text-3xl font-bold text-vb-darkest md:text-5xl"
                    >
                        {t('faq.title')}
                    </h2>
                </Reveal>

                <div className="space-y-3" role="list">
                    {FAQ_KEYS.map((n) => {
                        const isOpen = openItem === n;

                        return (
                            <Collapsible
                                key={n}
                                open={isOpen}
                                onOpenChange={(open) =>
                                    setOpenItem(open ? n : null)
                                }
                            >
                                <div
                                    className={[
                                        'overflow-hidden rounded-2xl border bg-white transition-colors duration-200',
                                        isOpen
                                            ? 'border-vb-primary/40 shadow-md shadow-vb-primary/5'
                                            : 'border-vb-light',
                                    ].join(' ')}
                                    role="listitem"
                                >
                                    <CollapsibleTrigger
                                        className="flex w-full cursor-pointer items-center justify-between px-6 py-4 text-left font-semibold text-vb-darkest transition-colors hover:bg-vb-mist focus-visible:ring-2 focus-visible:ring-vb-primary focus-visible:outline-none"
                                        aria-expanded={isOpen}
                                    >
                                        <span>{t(`faq.q${n}`)}</span>
                                        <ChevronDownIcon
                                            className={[
                                                'h-5 w-5 shrink-0 text-vb-muted transition-transform duration-200',
                                                isOpen ? 'rotate-180' : '',
                                            ].join(' ')}
                                            aria-hidden="true"
                                        />
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <p className="px-6 pt-1 pb-5 text-sm leading-relaxed text-vb-muted">
                                            {t(`faq.a${n}`)}
                                        </p>
                                    </CollapsibleContent>
                                </div>
                            </Collapsible>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
