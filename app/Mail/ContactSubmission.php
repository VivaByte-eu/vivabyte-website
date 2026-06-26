<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class ContactSubmission extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    /**
     * @param  array<string, string|null>  $submission
     */
    public function __construct(public array $submission) {}

    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'New contact request — '.$this->submission['name'],
            replyTo: [new Address($this->submission['email'], $this->submission['name'])],
        );
    }

    public function content(): Content
    {
        return new Content(
            markdown: 'emails.contact-submission',
            with: ['submission' => $this->submission],
        );
    }

    /**
     * Called by the queue when the job fails after exhausting retries. The
     * controller's try/catch only guards the initial dispatch — actual delivery
     * happens in a worker, so this is where a real send failure surfaces. We log
     * the lead's details so it can be followed up manually instead of vanishing.
     */
    public function failed(\Throwable $e): void
    {
        Log::error('Contact submission failed to deliver', [
            'error' => $e->getMessage(),
            'name' => $this->submission['name'] ?? null,
            'email' => $this->submission['email'] ?? null,
        ]);
    }
}
