import { usePage } from '@inertiajs/react';
import type { SharedProps } from '@/types';

export function useTranslation() {
    const { translations, locale } = usePage<SharedProps>().props;

    function t(key: string, replacements?: Record<string, string | number>): string {
        let value: string = translations[key] ?? key;

        if (replacements) {
            Object.entries(replacements).forEach(([placeholder, replacement]) => {
                value = value.replaceAll(`:${placeholder}`, String(replacement));
            });
        }

        return value;
    }

    return { t, locale };
}
