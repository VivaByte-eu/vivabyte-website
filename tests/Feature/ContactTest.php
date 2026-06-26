<?php

use App\Mail\ContactSubmission;
use Illuminate\Support\Facades\Mail;

function validPayload(array $overrides = []): array
{
    return array_merge([
        'name' => 'Jane Tester',
        'company' => 'Acme',
        'email' => 'jane@gmail.com',
        'service' => 'web-app',
        'message' => 'This is a sufficiently long message for the form.',
        'honeypot' => '',
    ], $overrides);
}

it('accepts a valid submission, queues the mail and flashes success', function () {
    Mail::fake();

    $this->post('/pt/contact', validPayload())
        ->assertRedirect()
        ->assertSessionHas('flash.type', 'success');

    Mail::assertQueued(ContactSubmission::class);
});

it('passes a human-readable service label to the email', function () {
    Mail::fake();

    $this->post('/en/contact', validPayload(['service' => 'ai-automation']));

    Mail::assertQueued(ContactSubmission::class, function (ContactSubmission $mail) {
        return $mail->submission['service_label'] === 'AI & Automation'
            && $mail->submission['service'] === 'ai-automation';
    });
});

it('blocks a honeypot-filled submission and sends nothing', function () {
    Mail::fake();

    $this->post('/pt/contact', validPayload(['honeypot' => 'i am a bot']))
        ->assertSessionHasErrors('honeypot');

    Mail::assertNothingQueued();
});

it('rejects a too-short message', function () {
    $this->post('/pt/contact', validPayload(['message' => 'too short']))
        ->assertSessionHasErrors('message');
});

it('does not require DNS resolution for the email', function () {
    Mail::fake();

    // Domain with no MX record — would fail under `email:dns`, must pass `email:rfc`.
    $this->post('/pt/contact', validPayload(['email' => 'someone@example.com']))
        ->assertSessionHasNoErrors();

    Mail::assertQueued(ContactSubmission::class);
});

it('returns Portuguese validation messages on the pt route', function () {
    $this->from('/pt/contact')
        ->post('/pt/contact', validPayload(['name' => '']))
        ->assertSessionHasErrors('name');

    expect(session('errors')->first('name'))->toBe('O campo nome é obrigatório.');
});

it('returns Spanish validation messages on the es route', function () {
    $this->from('/es/contact')
        ->post('/es/contact', validPayload(['name' => '']))
        ->assertSessionHasErrors('name');

    expect(session('errors')->first('name'))->toBe('El campo nombre es obligatorio.');
});
