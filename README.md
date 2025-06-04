# CRM Setup

This project uses Laravel and React. Follow these steps to set up the environment.

1. Install PHP (>= 8.2) and Composer.
2. Run `composer install` to install PHP dependencies.
3. Copy `.env.example` to `.env` and generate an application key:
   ```bash
   cp .env.example .env
   php artisan key:generate --ansi
   ```
4. Install Node dependencies:
   ```bash
   npm install
   ```
5. Create the SQLite database and run migrations:
   ```bash
   touch database/database.sqlite
   php artisan migrate --ansi
   ```
6. Build frontend assets:
   ```bash
   npm run build
   ```
7. Start the development server if needed:
   ```bash
   npm run dev
   ```

A minimal `tailwind.config.js` is included referencing the `resources/` directory.
