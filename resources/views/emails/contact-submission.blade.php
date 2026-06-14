<x-mail::message>
# New contact request

A new lead just submitted the contact form on vivabyte.

**Name:** {{ $submission['name'] }}

**Email:** {{ $submission['email'] }}

@if(! empty($submission['company']))
**Company:** {{ $submission['company'] }}

@endif
**Service of interest:** {{ $submission['service'] }}

**Message:**

> {{ $submission['message'] }}

<x-mail::button :url="'mailto:'.$submission['email']">
Reply to {{ $submission['name'] }}
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
