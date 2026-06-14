import type { Locale } from '@/types';

interface FlagProps {
    className?: string;
}

/** Portugal — green/red field with a simplified armillary disc. */
function FlagPT({ className }: FlagProps) {
    return (
        <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
            <rect width="60" height="40" fill="#da291c" />
            <rect width="24" height="40" fill="#046a38" />
            <circle cx="24" cy="20" r="6.5" fill="#ffe000" stroke="#fff" strokeWidth="1.2" />
            <circle cx="24" cy="20" r="3" fill="#fff" stroke="#046a38" strokeWidth="1.2" />
        </svg>
    );
}

/** United Kingdom — simplified Union Jack (used for the English locale). */
function FlagGB({ className }: FlagProps) {
    return (
        <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
            <clipPath id="flag-gb">
                <rect width="60" height="40" />
            </clipPath>
            <g clipPath="url(#flag-gb)">
                <rect width="60" height="40" fill="#012169" />
                <path d="M0,0 60,40 M60,0 0,40" stroke="#fff" strokeWidth="8" />
                <path d="M0,0 60,40 M60,0 0,40" stroke="#c8102e" strokeWidth="4" />
                <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12" />
                <path d="M30,0 V40 M0,20 H60" stroke="#c8102e" strokeWidth="6" />
            </g>
        </svg>
    );
}

/** Spain — red/yellow/red horizontal bands. */
function FlagES({ className }: FlagProps) {
    return (
        <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
            <rect width="60" height="40" fill="#aa151b" />
            <rect y="10" width="60" height="20" fill="#f1bf00" />
        </svg>
    );
}

const FLAGS: Record<Locale, (props: FlagProps) => React.ReactElement> = {
    pt: FlagPT,
    en: FlagGB,
    es: FlagES,
};

/** Native language label shown next to each flag. */
export const LOCALE_NAMES: Record<Locale, string> = {
    pt: 'Português',
    en: 'English',
    es: 'Español',
};

export function Flag({ locale, className = 'h-4 w-6 rounded-[2px] ring-1 ring-black/10' }: { locale: Locale; className?: string }) {
    const Component = FLAGS[locale];

    return (
        <span className={`inline-block overflow-hidden ${className}`}>
            <Component className="h-full w-full" />
        </span>
    );
}
