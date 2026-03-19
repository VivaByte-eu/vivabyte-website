<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    protected array $supported = ['pt', 'en', 'es'];

    public function handle(Request $request, Closure $next): Response
    {
        $segment = $request->segment(1);

        $locale = in_array($segment, $this->supported, true)
            ? $segment
            : config('app.locale', 'pt');

        app()->setLocale($locale);

        return $next($request);
    }
}
