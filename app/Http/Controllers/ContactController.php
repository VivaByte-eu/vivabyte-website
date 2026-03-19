<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContactRequest;
use Illuminate\Http\RedirectResponse;

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

        // TODO: dispatch a queued Mailable
        // Mail::to(config('mail.from.address'))->queue(new ContactSubmission($submission));

        return redirect()
            ->route('landing', ['locale' => $locale])
            ->with('flash', [
                'type' => 'success',
                'message' => __('contact.success'),
            ]);
    }
}
