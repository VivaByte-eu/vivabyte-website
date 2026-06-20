import posthog from 'posthog-js';

/**
 * Cookie / analytics consent manager (GDPR + ePrivacy).
 *
 * PostHog is NEVER initialized until the visitor explicitly grants analytics
 * consent, so no analytics cookies or local storage are written beforehand.
 */

export type ConsentValue = 'granted' | 'denied';

const STORAGE_KEY = 'vb_cookie_consent';
const OPEN_SETTINGS_EVENT = 'vb:open-cookie-settings';

let initialized = false;

export function getStoredConsent(): ConsentValue | null {
    try {
        const value = localStorage.getItem(STORAGE_KEY);

        return value === 'granted' || value === 'denied' ? value : null;
    } catch {
        return null;
    }
}

function initPostHog(): void {
    if (initialized) {
        return;
    }

    const key = import.meta.env.VITE_POSTHOG_KEY as string | undefined;

    if (!key) {
        return;
    }

    posthog.init(key, {
        api_host: import.meta.env.VITE_POSTHOG_HOST as string,
        person_profiles: 'identified_only',
        capture_pageview: false,
        // Session recording is enabled (also requires "Record user sessions"
        // in the PostHog project). Inputs are masked because the contact form
        // collects personal data — disclosed in the Privacy Policy.
        disable_session_recording: false,
        session_recording: {
            maskAllInputs: true,
        },
    });

    initialized = true;
}

function applyConsent(value: ConsentValue): void {
    if (value === 'granted') {
        initPostHog();

        if (initialized) {
            posthog.opt_in_capturing();
        }

        return;
    }

    // Denied: if PostHog was started earlier this session, stop it and clear
    // its identifiers.
    if (initialized) {
        posthog.opt_out_capturing();
        posthog.reset();
    }
}

/**
 * Persist the visitor's choice and apply it immediately.
 */
export function setConsent(value: ConsentValue): void {
    try {
        localStorage.setItem(STORAGE_KEY, value);
    } catch {
        // Storage unavailable (e.g. privacy mode) — apply for this session only.
    }

    applyConsent(value);
}

/**
 * Run once at app startup. Starts analytics only if consent was previously
 * granted; otherwise does nothing and waits for the banner.
 */
export function bootstrapConsent(): void {
    if (getStoredConsent() === 'granted') {
        applyConsent('granted');
    }
}

/**
 * Capture a page view — no-op unless PostHog is initialized and opted in.
 */
export function capturePageview(): void {
    if (initialized && !posthog.has_opted_out_capturing()) {
        posthog.capture('$pageview');
    }
}

/**
 * Re-open the cookie settings banner (e.g. from a footer link).
 */
export function openCookieSettings(): void {
    window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

export function onOpenCookieSettings(callback: () => void): () => void {
    window.addEventListener(OPEN_SETTINGS_EVENT, callback);

    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, callback);
}
