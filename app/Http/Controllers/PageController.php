<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    public function home(string $locale): Response
    {
        return $this->page('home', $locale);
    }

    public function services(string $locale): Response
    {
        return $this->page('services', $locale, 'services');
    }

    public function about(string $locale): Response
    {
        return $this->page('about', $locale, 'about');
    }

    public function work(string $locale): Response
    {
        return $this->page('work', $locale, 'work');
    }

    public function faq(string $locale): Response
    {
        return $this->page('faq', $locale, 'faq');
    }

    public function contact(string $locale): Response
    {
        return $this->page('contact', $locale, 'contact');
    }

    public function privacy(string $locale): Response
    {
        return $this->page('privacy', $locale, 'privacy');
    }

    /**
     * Render an Inertia page with locale-aware hreflang alternates + canonical.
     */
    private function page(string $view, string $locale, string $segment = ''): Response
    {
        $path = $segment === '' ? '' : "/{$segment}";

        return Inertia::render($view, [
            'locale' => $locale,
            'page' => $segment === '' ? 'home' : $segment,
            'alternates' => [
                'pt' => url("/pt{$path}"),
                'en' => url("/en{$path}"),
                'es' => url("/es{$path}"),
            ],
            'canonical' => url("/{$locale}{$path}"),
        ]);
    }
}
