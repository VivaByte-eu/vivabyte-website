<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\SitemapController;
use Illuminate\Support\Facades\Route;

// Root redirects to default locale (301 = permanent, good for SEO)
Route::get('/', fn () => redirect('/pt', 301));

// XML sitemap for search engines
Route::get('/sitemap.xml', SitemapController::class)->name('sitemap');

// Locale-prefixed public pages
Route::prefix('{locale}')
    ->where(['locale' => 'pt|en|es'])
    ->group(function () {
        Route::get('/', [PageController::class, 'home'])->name('landing');
        Route::get('/services', [PageController::class, 'services'])->name('services');
        Route::get('/about', [PageController::class, 'about'])->name('about');
        Route::get('/work', [PageController::class, 'work'])->name('work');
        Route::get('/faq', [PageController::class, 'faq'])->name('faq');
        Route::get('/contact', [PageController::class, 'contact'])->name('contact');
        Route::get('/privacy', [PageController::class, 'privacy'])->name('privacy');

        Route::post('/contact', [ContactController::class, 'store'])
            ->name('contact.store')
            ->middleware('throttle:5,1');
    });

// Authenticated routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
