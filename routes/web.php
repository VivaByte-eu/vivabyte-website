<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\LandingController;
use Illuminate\Support\Facades\Route;

// Root redirects to default locale (301 = permanent, good for SEO)
Route::get('/', fn () => redirect('/pt', 301));

// Locale-prefixed landing routes
Route::prefix('{locale}')
    ->where(['locale' => 'pt|en|es'])
    ->group(function () {
        Route::get('/', [LandingController::class, 'show'])->name('landing');
        Route::post('/contact', [ContactController::class, 'store'])
            ->name('contact.store')
            ->middleware('throttle:5,1');
    });

// Authenticated routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
