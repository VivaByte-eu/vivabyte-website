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
            'email' => ['required', 'email:rfc,dns', 'max:150'],
            'service' => ['required', 'string', 'in:seo,paid-ads,social-media,web-design,other'],
            'message' => ['required', 'string', 'min:20', 'max:2000'],
            'honeypot' => ['nullable', 'max:0'],
        ];
    }

    /**
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'honeypot.max' => 'Submission blocked.',
        ];
    }
}
