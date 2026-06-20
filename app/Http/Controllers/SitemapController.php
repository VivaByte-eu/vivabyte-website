<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;

class SitemapController extends Controller
{
    /**
     * Public, indexable pages. Keep in sync with routes/web.php.
     * priority/changefreq are hints only — Google largely ignores them,
     * but they're valid sitemap fields and harmless to include.
     *
     * @var array<string, array{segment: string, priority: string}>
     */
    private const PAGES = [
        ['segment' => '', 'priority' => '1.0'],
        ['segment' => 'services', 'priority' => '0.9'],
        ['segment' => 'about', 'priority' => '0.7'],
        ['segment' => 'work', 'priority' => '0.6'],
        ['segment' => 'faq', 'priority' => '0.6'],
        ['segment' => 'contact', 'priority' => '0.8'],
        ['segment' => 'privacy', 'priority' => '0.3'],
    ];

    private const LOCALES = ['pt', 'en', 'es'];

    public function __invoke(): Response
    {
        $urls = [];

        foreach (self::PAGES as $page) {
            $path = $page['segment'] === '' ? '' : "/{$page['segment']}";

            // Pre-build the hreflang alternate links shared by every locale
            // variant of this page.
            $alternates = '';
            foreach (self::LOCALES as $altLocale) {
                $alternates .= sprintf(
                    '<xhtml:link rel="alternate" hreflang="%s" href="%s"/>',
                    $altLocale,
                    url("/{$altLocale}{$path}"),
                );
            }
            $alternates .= sprintf(
                '<xhtml:link rel="alternate" hreflang="x-default" href="%s"/>',
                url("/pt{$path}"),
            );

            foreach (self::LOCALES as $locale) {
                $urls[] = sprintf(
                    '<url><loc>%s</loc>%s<priority>%s</priority></url>',
                    url("/{$locale}{$path}"),
                    $alternates,
                    $page['priority'],
                );
            }
        }

        $xml = '<?xml version="1.0" encoding="UTF-8"?>'
            .'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
            .'xmlns:xhtml="http://www.w3.org/1999/xhtml">'
            .implode('', $urls)
            .'</urlset>';

        return response($xml, 200, ['Content-Type' => 'application/xml']);
    }
}
