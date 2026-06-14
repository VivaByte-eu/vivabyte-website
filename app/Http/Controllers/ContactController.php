<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use App\Mail\ContactSubmission;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function store(StoreContactRequest $request, string $locale): RedirectResponse
    {
        $validated = $request->validated();

        // Explicit field extraction — no mass assignment
        $submission = [
            'name' => $validated['name'],
            'company' => $validated['company'] ?? null,
            'email' => $validated['email'],
            'service' => $validated['service'],
            'message' => $validated['message'],
        ];

        // Deliver the lead. Wrapped so a mail-config issue never breaks the
        // visitor's submission — failures are logged for follow-up instead.
        try {
            Mail::to(config('mail.contact_to'))->queue(new ContactSubmission($submission));
        } catch (\Throwable $e) {
            Log::error('Contact submission failed to send', [
                'error' => $e->getMessage(),
                'email' => $submission['email'],
            ]);
        }

        // Redirect back to the contact page so the success banner is shown.
        return redirect()
            ->route('contact', ['locale' => $locale])
            ->with('flash', [
                'type' => 'success',
                'message' => __('contact.success'),
            ]);
    }
}
