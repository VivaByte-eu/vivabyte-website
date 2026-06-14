<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

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
}
