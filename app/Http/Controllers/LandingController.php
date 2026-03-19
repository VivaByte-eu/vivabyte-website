<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class LandingController extends Controller
{
    public function show(string $locale): Response
    {
        return Inertia::render('welcome', [
            'locale' => $locale,
            'alternates' => [
                'pt' => url('/pt'),
                'en' => url('/en'),
                'es' => url('/es'),
            ],
            'canonical' => url("/{$locale}"),
        ]);
    }
}
