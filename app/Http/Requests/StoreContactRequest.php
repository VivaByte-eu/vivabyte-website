<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContactRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, array<string>>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:100'],
            'company' => ['nullable', 'string', 'max:100'],
            // RFC validation only — no `dns`, which does a live MX lookup from the
            // server and rejects valid addresses on domains it can't resolve.
            'email' => ['required', 'email:rfc', 'max:150'],
            'phone' => ['nullable', 'string', 'max:30'],
            'service' => ['required', 'string', 'in:website,web-app,seo,paid-ads,social-media,ai-automation,branding,other'],
            'message' => ['required', 'string', 'min:20', 'max:2000'],
            'honeypot' => ['nullable', 'max:0'],
        ];
    }
}
