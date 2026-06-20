import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { useTranslation } from '@/hooks/use-translation';
import {
    getStoredConsent,
    onOpenCookieSettings,
    setConsent,
} from '@/lib/consent';

/**
 * GDPR / ePrivacy consent banner.
 *
 * - Shown until the visitor makes a choice (or when re-opened via the footer).
 * - "Accept" and "Reject" are equally available, one click each.
 * - Analytics (PostHog) stays off until the visitor opts in.
 */
export function CookieConsent({ locale }: { locale: string }) {
    const { t } = useTranslation();
    const [visible, setVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [analytics, setAnalytics] = useState(false);

    useEffect(() => {
        // Read consent only after mount: localStorage is client-only, and
        // reading it during render/SSR would cause a hydration mismatch for
        // returning visitors.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setVisible(getStoredConsent() === null);

        return onOpenCookieSettings(() => {
            setAnalytics(getStoredConsent() === 'granted');
            setShowDetails(true);
            setVisible(true);
        });
    }, []);

    function decide(value: 'granted' | 'denied') {
        setConsent(value);
        setVisible(false);
        setShowDetails(false);
    }

    if (!visible) {
        return null;
    }

    return (
        <div
            role="dialog"
            aria-modal="false"
            aria-label={t('cookie.title')}
            className="fixed inset-x-0 bottom-0 z-50 border-t border-vb-primary/20 bg-vb-darkest/95 text-vb-light shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-vb-darkest/90"
        >
            <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl space-y-2">
                    <p className="text-sm font-semibold text-white">
                        {t('cookie.title')}
                    </p>
                    <p className="text-sm leading-relaxed text-vb-muted">
                        {t('cookie.body')}{' '}
                        <Link
                            href={`/${locale}/privacy`}
                            className="font-medium text-vb-primary-bright underline-offset-2 hover:underline"
                        >
                            {t('cookie.privacy_link')}
                        </Link>
                    </p>

                    {showDetails && (
                        <div className="mt-3 space-y-3 rounded-md border border-white/10 bg-white/5 p-4">
                            <div className="flex items-start gap-3">
                                <Checkbox checked disabled aria-readonly />
                                <div className="space-y-0.5">
                                    <p className="text-sm font-medium text-white">
                                        {t('cookie.necessary.title')}
                                    </p>
                                    <p className="text-xs text-vb-muted">
                                        {t('cookie.necessary.desc')}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Checkbox
                                    id="cookie-analytics"
                                    checked={analytics}
                                    onCheckedChange={(checked) =>
                                        setAnalytics(checked === true)
                                    }
                                />
                                <label
                                    htmlFor="cookie-analytics"
                                    className="cursor-pointer space-y-0.5"
                                >
                                    <p className="text-sm font-medium text-white">
                                        {t('cookie.analytics.title')}
                                    </p>
                                    <p className="text-xs text-vb-muted">
                                        {t('cookie.analytics.desc')}
                                    </p>
                                </label>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex shrink-0 flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
                    {showDetails ? (
                        <Button
                            onClick={() =>
                                decide(analytics ? 'granted' : 'denied')
                            }
                            className="bg-vb-primary text-white hover:bg-vb-primary/90"
                        >
                            {t('cookie.save')}
                        </Button>
                    ) : (
                        <>
                            <Button
                                variant="outline"
                                onClick={() => decide('denied')}
                                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                            >
                                {t('cookie.reject')}
                            </Button>
                            <Button
                                variant="outline"
                                onClick={() => setShowDetails(true)}
                                className="border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white"
                            >
                                {t('cookie.customize')}
                            </Button>
                            <Button
                                onClick={() => decide('granted')}
                                className="bg-vb-primary text-white hover:bg-vb-primary/90"
                            >
                                {t('cookie.accept')}
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
