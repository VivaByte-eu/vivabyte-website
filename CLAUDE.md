# vivaByte Website — Claude Guide

## Project Overview

Laravel 13 + React 19 + Inertia.js 2 SPA. Auth via Laravel Fortify. Frontend tooling: Vite 8, TypeScript, Tailwind CSS v4, shadcn/ui (Radix UI), Lucide icons.

**Root:** `vivabyte-website/` (the Laravel project lives one level inside the repo root)

---

## Tech Stack

| Layer      | Technology                                    |
|------------|-----------------------------------------------|
| Backend    | PHP 8.3, Laravel 13, Laravel Fortify 1.x      |
| Routing    | Inertia.js 2 + Laravel Wayfinder (type-safe)  |
| Frontend   | React 19, TypeScript 5.7, Vite 8              |
| Styling    | Tailwind CSS v4, shadcn/ui, Radix UI, Lucide  |
| Testing    | Pest 4 (PHP), ESLint + Prettier (JS/TS)       |
| DB         | SQLite (dev) — config in `database/database.sqlite` |

---

## Directory Structure

```
vivabyte-website/
├── app/
│   ├── Actions/Fortify/        # Auth actions (CreateNewUser, ResetUserPassword)
│   ├── Http/
│   │   ├── Controllers/
│   │   │   └── Settings/       # ProfileController, SecurityController
│   │   ├── Middleware/         # HandleAppearance, HandleInertiaRequests
│   │   └── Requests/Settings/
│   ├── Models/                 # User.php (and future models)
│   └── Providers/
├── database/
│   ├── migrations/
│   ├── factories/
│   └── seeders/
├── resources/
│   └── js/
│       ├── app.tsx             # Entry point
│       ├── ssr.tsx             # SSR entry
│       ├── pages/              # Inertia pages (welcome, dashboard, auth/, settings/)
│       ├── components/         # Shared React components
│       ├── layouts/            # Page layouts
│       ├── hooks/              # Custom React hooks
│       ├── lib/                # Utilities (cn, etc.)
│       ├── types/              # TypeScript types
│       ├── actions/            # Frontend action helpers
│       └── wayfinder/          # Auto-generated type-safe route helpers
├── routes/
│   ├── web.php                 # Main routes (home, dashboard)
│   └── settings.php            # Settings sub-routes
└── vite.config.ts
```

---

## Development Commands

```bash
# Start all dev services (server + queue + vite)
composer dev

# Run tests
composer test

# PHP lint (Laravel Pint)
composer lint         # fix
composer lint:check   # check only

# JS/TS
npm run dev           # Vite dev server
npm run build         # Production build
npm run lint          # ESLint fix
npm run lint:check    # ESLint check
npm run format        # Prettier fix
npm run format:check  # Prettier check
npm run types:check   # TypeScript check

# Full CI check
composer ci:check
```

---

## Laravel Best Practices

### Controllers
- Keep controllers thin — delegate business logic to Action classes (`app/Actions/`).
- Use Form Request classes for validation (`app/Http/Requests/`).
- Always return typed responses; use Inertia's `Inertia::render()` for page responses.

### Models
- Use `$fillable` (not `$guarded = []`) to prevent mass-assignment vulnerabilities.
- Always define relationships explicitly with proper return types.
- Use model casts for dates, booleans, JSON, and enums.

### Routes
- Keep routes in the appropriate file (`web.php`, `settings.php`).
- Use Wayfinder-generated helpers (`resources/js/wayfinder/`) for type-safe route references on the frontend — never hardcode URLs.
- Protect routes with appropriate middleware: `['auth', 'verified']` for authenticated areas.

### Migrations
- Never modify existing migrations — create new ones for schema changes.
- Always make migrations reversible with a proper `down()` method.

---

## Security — Non-Negotiable Rules

1. **CSRF**: All forms use Inertia's `useForm` or include CSRF tokens — never disable CSRF middleware.
2. **Mass assignment**: Always use `$fillable` on models; never use `$guarded = []`.
3. **SQL injection**: Use Eloquent ORM or parameterized query builder — never raw string interpolation in queries.
4. **XSS**: Never use `{!! !!}` in Blade or `dangerouslySetInnerHTML` in React without sanitizing output.
5. **Auth**: Fortify handles auth — do not roll custom authentication.
6. **Authorization**: Use Gates or Policies before accessing/modifying user-owned resources.
7. **Input validation**: Validate all input with Form Requests on the backend; never trust frontend-only validation.
8. **Sensitive data**: Never log passwords, tokens, or PII. Never commit `.env` or secrets.
9. **File uploads** (if added): Validate MIME type server-side, store outside `public/`, use randomized filenames.
10. **Two-factor auth**: 2FA columns are present — respect and preserve 2FA flows in auth logic.

---

## Frontend Conventions

- **Routing**: Use `wayfinder` helpers for all backend route references — import from `resources/js/wayfinder/`.
- **Forms**: Use `@inertiajs/react` `useForm` hook for all form submissions.
- **Components**: Prefer shadcn/ui + Radix UI primitives. New components go in `resources/js/components/`.
- **Styling**: Tailwind CSS v4 utility classes only — no custom CSS unless unavoidable.
- **Types**: Define shared TypeScript types in `resources/js/types/`. Inertia page props must be typed.
- **No `any`**: Avoid TypeScript `any` — use `unknown` and narrow, or define proper types.

---

## Testing

- **PHP**: Pest 4. Tests live in `tests/`. Use `php artisan test` or `composer test`.
- **Feature tests**: Prefer feature/integration tests over unit tests for controllers and actions.
- **No mocking the DB**: Use the real SQLite DB with transactions/refresh in tests.
- **JS**: No test framework configured yet — add Vitest if frontend testing is needed.

---

## Environment

- Copy `.env.example` to `.env` and run `php artisan key:generate` for local setup.
- SQLite is the dev database — path: `database/database.sqlite`.
- Queue driver: sync (dev) — check `.env` for production overrides.
