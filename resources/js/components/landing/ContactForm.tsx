import { useForm, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useTranslation } from '@/hooks/use-translation';
import type { SharedProps } from '@/types';
import { Reveal } from './Reveal';

interface ContactData {
    name: string;
    company: string;
    email: string;
    service: string;
    message: string;
    honeypot: string;
}

const SERVICE_VALUES = [
    'web-app',
    'seo',
    'paid-ads',
    'social-media',
    'ai-automation',
    'branding',
    'other',
] as const;

export function ContactForm({ showHeader = true }: { showHeader?: boolean }) {
    const { t, locale } = useTranslation();
    const { flash } = usePage<SharedProps>().props;

    const { data, setData, post, processing, errors, reset } =
        useForm<ContactData>({
            name: '',
            company: '',
            email: '',
            service: '',
            message: '',
            honeypot: '',
        });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(`/${locale}/contact`, {
            onSuccess: () => reset(),
        });
    }

    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="relative overflow-hidden bg-vb-mist py-24"
        >
            <div
                aria-hidden="true"
                className="vb-float-slow pointer-events-none absolute -top-16 right-0 h-72 w-72 rounded-full bg-vb-primary/10 blur-3xl"
            />
            <div className="relative mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl">
                    {showHeader && (
                        <Reveal className="mb-12 text-center">
                            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-vb-primary uppercase">
                                {t('contact.eyebrow')}
                            </span>
                            <h2
                                id="contact-heading"
                                className="mt-3 font-display text-3xl font-bold text-vb-darkest md:text-5xl"
                            >
                                {t('contact.title')}
                            </h2>
                            <p className="mt-4 text-vb-muted">
                                {t('contact.subtitle')}
                            </p>
                        </Reveal>
                    )}

                    {flash?.type === 'success' && (
                        <div
                            role="alert"
                            className="mb-8 rounded-xl border border-vb-primary bg-white p-4 text-center text-sm font-medium text-vb-primary"
                        >
                            {flash.message}
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="ring-vb-glass space-y-6 rounded-3xl border border-vb-light bg-white p-7 sm:p-10"
                    >
                        {/* Honeypot — hidden from real users, must stay empty */}
                        <div
                            aria-hidden="true"
                            style={{
                                position: 'absolute',
                                left: '-9999px',
                                top: '-9999px',
                                width: '1px',
                                height: '1px',
                                overflow: 'hidden',
                            }}
                        >
                            <label htmlFor="vb_hp">
                                Leave this field empty
                            </label>
                            <input
                                id="vb_hp"
                                name="honeypot"
                                type="text"
                                value={data.honeypot}
                                onChange={(e) =>
                                    setData('honeypot', e.target.value)
                                }
                                tabIndex={-1}
                                autoComplete="off"
                            />
                        </div>

                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="contact-name"
                                    className="mb-2 block text-sm font-medium text-vb-darkest"
                                >
                                    {t('contact.name')}{' '}
                                    <span
                                        aria-hidden="true"
                                        className="text-vb-danger"
                                    >
                                        *
                                    </span>
                                </label>
                                <Input
                                    id="contact-name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    aria-required="true"
                                    aria-invalid={!!errors.name}
                                    aria-describedby={
                                        errors.name
                                            ? 'contact-name-error'
                                            : undefined
                                    }
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    className="border-vb-light focus:border-vb-primary"
                                />
                                {errors.name && (
                                    <p
                                        id="contact-name-error"
                                        role="alert"
                                        className="mt-1 text-xs text-vb-danger"
                                    >
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label
                                    htmlFor="contact-company"
                                    className="mb-2 block text-sm font-medium text-vb-darkest"
                                >
                                    {t('contact.company')}
                                </label>
                                <Input
                                    id="contact-company"
                                    name="company"
                                    type="text"
                                    autoComplete="organization"
                                    value={data.company}
                                    onChange={(e) =>
                                        setData('company', e.target.value)
                                    }
                                    className="border-vb-light focus:border-vb-primary"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="contact-email"
                                className="mb-2 block text-sm font-medium text-vb-darkest"
                            >
                                {t('contact.email')}{' '}
                                <span
                                    aria-hidden="true"
                                    className="text-vb-danger"
                                >
                                    *
                                </span>
                            </label>
                            <Input
                                id="contact-email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                aria-required="true"
                                aria-invalid={!!errors.email}
                                aria-describedby={
                                    errors.email
                                        ? 'contact-email-error'
                                        : undefined
                                }
                                value={data.email}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                                className="border-vb-light focus:border-vb-primary"
                            />
                            {errors.email && (
                                <p
                                    id="contact-email-error"
                                    role="alert"
                                    className="mt-1 text-xs text-vb-danger"
                                >
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="contact-service"
                                className="mb-2 block text-sm font-medium text-vb-darkest"
                            >
                                {t('contact.service')}{' '}
                                <span
                                    aria-hidden="true"
                                    className="text-vb-danger"
                                >
                                    *
                                </span>
                            </label>
                            <Select
                                value={data.service}
                                onValueChange={(val) => setData('service', val)}
                            >
                                <SelectTrigger
                                    id="contact-service"
                                    className="w-full border-vb-light bg-white text-vb-darkest data-[placeholder]:text-vb-muted focus:border-vb-primary dark:bg-white dark:text-vb-darkest dark:hover:bg-white"
                                    aria-invalid={!!errors.service}
                                >
                                    <SelectValue
                                        placeholder={t('contact.service')}
                                    />
                                </SelectTrigger>
                                <SelectContent className="border-vb-light bg-white text-vb-darkest shadow-lg shadow-vb-primary/10">
                                    {SERVICE_VALUES.map((val) => (
                                        <SelectItem
                                            key={val}
                                            value={val}
                                            className="cursor-pointer text-vb-darkest focus:bg-vb-mist focus:text-vb-primary"
                                        >
                                            {t(`contact.service.${val}`)}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.service && (
                                <p
                                    role="alert"
                                    className="mt-1 text-xs text-vb-danger"
                                >
                                    {errors.service}
                                </p>
                            )}
                        </div>

                        <div>
                            <label
                                htmlFor="contact-message"
                                className="mb-2 block text-sm font-medium text-vb-darkest"
                            >
                                {t('contact.message')}{' '}
                                <span
                                    aria-hidden="true"
                                    className="text-vb-danger"
                                >
                                    *
                                </span>
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                rows={5}
                                required
                                aria-required="true"
                                aria-invalid={!!errors.message}
                                aria-describedby={
                                    errors.message
                                        ? 'contact-message-error'
                                        : undefined
                                }
                                value={data.message}
                                onChange={(e) =>
                                    setData('message', e.target.value)
                                }
                                className="resize-vertical min-h-[120px] w-full rounded-md border border-vb-light px-3 py-2 text-sm text-vb-darkest placeholder:text-vb-muted focus:border-vb-primary focus:ring-2 focus:ring-vb-primary/20 focus:outline-none"
                            />
                            {errors.message && (
                                <p
                                    id="contact-message-error"
                                    role="alert"
                                    className="mt-1 text-xs text-vb-danger"
                                >
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            disabled={processing}
                            className="w-full cursor-pointer bg-vb-accent py-6 font-semibold text-vb-deep shadow-lg shadow-vb-accent/20 transition-all duration-300 hover:bg-vb-accent-bright hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {processing ? '...' : t('contact.submit')}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
