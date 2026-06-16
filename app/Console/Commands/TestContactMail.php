<?php

namespace App\Console\Commands;

use App\Mail\ContactSubmission;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class TestContactMail extends Command
{
    /**
     * Sends a real contact email synchronously so a deploy can be verified
     * end-to-end: SMTP connection, credentials, and template rendering.
     *
     * Usage:
     *   php artisan mail:test-contact
     *   php artisan mail:test-contact you@example.com
     */
    protected $signature = 'mail:test-contact {to? : Recipient address (defaults to mail.contact_to)}';

    protected $description = 'Send a real test contact email to verify the live mail connection after deploy';

    public function handle(): int
    {
        $to = $this->argument('to') ?? config('mail.contact_to');

        $submission = [
            'name' => 'Mail connection test',
            'company' => 'Vivabyte',
            'email' => config('mail.from.address'),
            'service' => 'web',
            'message' => 'This is an automated test of the contact email pipeline sent at '.now()->toDateTimeString().'.',
        ];

        $this->info('Mailer:    '.config('mail.default'));
        $this->info("Sending to: {$to}");

        try {
            // send() is synchronous on purpose — unlike the queued path used by
            // the contact form, it surfaces SMTP/connection errors right here.
            Mail::to($to)->send(new ContactSubmission($submission));
        } catch (\Throwable $e) {
            $this->error('Failed to send: '.$e->getMessage());

            return self::FAILURE;
        }

        $this->info('✓ Email sent successfully. Check the inbox for "'.$to.'".');

        return self::SUCCESS;
    }
}
