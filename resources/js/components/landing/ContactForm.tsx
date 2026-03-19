import { useForm, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTranslation } from '@/hooks/use-translation';
import type { SharedProps } from '@/types';

interface ContactData {
    name: string;
    company: string;
    email: string;
    service: string;
    message: string;
    honeypot: string;
}

const SERVICE_VALUES = ['seo', 'paid-ads', 'social-media', 'web-design', 'other'] as const;

export function ContactForm() {
    const { t, locale } = useTranslation();
    const { flash } = usePage<SharedProps>().props;

    const { data, setData, post, processing, errors, reset } = useForm<ContactData>({
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
        <section id="contact" aria-labelledby="contact-heading" className="bg-vb-light py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl">
                    <h2
                        id="contact-heading"
                        className="mb-4 text-center text-3xl font-bold text-vb-darkest md:text-4xl"
                    >
                        {t('contact.title')}
                    </h2>
                    <p className="mb-12 text-center text-vb-muted">{t('contact.subtitle')}</p>

                    {flash?.type === 'success' && (
                        <div
                            role="alert"
                            className="mb-8 rounded-xl border border-vb-primary bg-white p-4 text-center text-sm font-medium text-vb-primary"
                        >
                            {flash.message}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
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
                            <label htmlFor="vb_hp">Leave this field empty</label>
                            <input
                                id="vb_hp"
                                name="honeypot"
                                type="text"
                                value={data.honeypot}
                                onChange={(e) => setData('honeypot', e.target.value)}
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
                                    <span aria-hidden="true" className="text-vb-accent">
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
                                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="border-vb-light focus:border-vb-primary"
                                />
                                {errors.name && (
                                    <p id="contact-name-error" role="alert" className="mt-1 text-xs text-vb-accent">
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
                                    onChange={(e) => setData('company', e.target.value)}
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
                                <span aria-hidden="true" className="text-vb-accent">
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
                                aria-describedby={errors.email ? 'contact-email-error' : undefined}
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="border-vb-light focus:border-vb-primary"
                            />
                            {errors.email && (
                                <p id="contact-email-error" role="alert" className="mt-1 text-xs text-vb-accent">
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
                                <span aria-hidden="true" className="text-vb-accent">
                                    *
                                </span>
                            </label>
                            <Select value={data.service} onValueChange={(val) => setData('service', val)}>
                                <SelectTrigger
                                    id="contact-service"
                                    className="w-full border-vb-light"
                                    aria-invalid={!!errors.service}
                                >
                                    <SelectValue placeholder={t('contact.service')} />
                                </SelectTrigger>
                                <SelectContent>
                                    {SERVICE_VALUES.map((val) => (
                                        <SelectItem key={val} value={val}>
                                            {t(`contact.service.${val}`)}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.service && (
                                <p role="alert" className="mt-1 text-xs text-vb-accent">
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
                                <span aria-hidden="true" className="text-vb-accent">
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
                                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                                value={data.message}
                                onChange={(e) => setData('message', e.target.value)}
                                className="min-h-[120px] w-full resize-vertical rounded-md border border-vb-light px-3 py-2 text-sm text-vb-darkest placeholder:text-vb-muted focus:border-vb-primary focus:ring-2 focus:ring-vb-primary/20 focus:outline-none"
                            />
                            {errors.message && (
                                <p id="contact-message-error" role="alert" className="mt-1 text-xs text-vb-accent">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button
                                type="submit"
                                disabled={processing}
                                className="flex-1 bg-vb-accent py-6 font-semibold text-white hover:bg-vb-accent/90 disabled:opacity-60"
                            >
                                {processing ? '...' : t('contact.submit')}
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="flex-1 border-green-600 py-6 font-semibold text-green-700 hover:bg-green-50"
                            >
                                <a href="https://wa.me/351000000000" target="_blank" rel="noopener noreferrer">
                                    <svg
                                        className="mr-2 h-5 w-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.847L0 24l6.345-1.524A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.371l-.36-.213-3.727.977.994-3.638-.234-.374A9.818 9.818 0 1112 21.818z" />
                                    </svg>
                                    {t('contact.whatsapp')}
                                </a>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
