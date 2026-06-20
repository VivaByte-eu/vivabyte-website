{{--
    Server-rendered SEO tags for the initial HTML response.

    Crawlers (and social scrapers that don't run JS) read these on the first
    pass. On hydration, the React <SeoHead> component carries matching
    head-keys, so Inertia REPLACES these in place instead of duplicating them
    (see resources/js/components/landing/SeoHead.tsx). SPA navigation then
    keeps them up to date client-side.

    Mirror any change here in SeoHead.tsx and keep the head-keys identical.
--}}
@php
    $props = $page['props'] ?? [];
    $translations = $props['translations'] ?? [];
    $pageKey = $props['page'] ?? null;
    $canonical = $props['canonical'] ?? null;
    $alternates = $props['alternates'] ?? [];
    $seoLocale = $props['locale'] ?? app()->getLocale();

    // Per-page title/description, falling back to the site defaults — same
    // resolution order as SeoHead.tsx.
    $seoTitle = $translations["meta.{$pageKey}.title"]
        ?? ($translations['meta.title'] ?? config('app.name', 'Laravel'));
    $seoDescription = $translations["meta.{$pageKey}.description"]
        ?? ($translations['meta.description'] ?? null);

    // Strip the locale segment to get the bare site root for absolute assets.
    $siteUrl = $canonical ? preg_replace('#/(pt|en|es)(/.*)?$#', '', $canonical) : url('/');
    $ogImage = $siteUrl.'/og-image.png';

    $ogLocaleMap = ['pt' => 'pt_PT', 'en' => 'en_US', 'es' => 'es_ES'];
    $ogLocale = $ogLocaleMap[$seoLocale] ?? 'pt_PT';
@endphp

<title inertia="">{{ $seoTitle }}</title>

@if ($canonical)
    @if ($seoDescription)
        <meta name="description" inertia="description" content="{{ $seoDescription }}">
    @endif
    <meta name="theme-color" inertia="theme-color" content="#6f209d">
    <link rel="canonical" inertia="canonical" href="{{ $canonical }}">

    @foreach ($alternates as $lang => $href)
        <link rel="alternate" inertia="alt:{{ $lang }}" hreflang="{{ $lang }}" href="{{ $href }}">
    @endforeach
    @if (isset($alternates['pt']))
        <link rel="alternate" inertia="alt:x-default" hreflang="x-default" href="{{ $alternates['pt'] }}">
    @endif

    <meta property="og:type" inertia="og:type" content="website">
    <meta property="og:site_name" inertia="og:site_name" content="Vivabyte">
    <meta property="og:title" inertia="og:title" content="{{ $seoTitle }}">
    @if ($seoDescription)
        <meta property="og:description" inertia="og:description" content="{{ $seoDescription }}">
    @endif
    <meta property="og:locale" inertia="og:locale" content="{{ $ogLocale }}">
    <meta property="og:url" inertia="og:url" content="{{ $canonical }}">
    <meta property="og:image" inertia="og:image" content="{{ $ogImage }}">

    <meta name="twitter:card" inertia="twitter:card" content="summary_large_image">
    <meta name="twitter:title" inertia="twitter:title" content="{{ $seoTitle }}">
    @if ($seoDescription)
        <meta name="twitter:description" inertia="twitter:description" content="{{ $seoDescription }}">
    @endif
    <meta name="twitter:image" inertia="twitter:image" content="{{ $ogImage }}">
@endif
