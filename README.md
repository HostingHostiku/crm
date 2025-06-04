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
5. Configure a MySQL database and run migrations:
   ```bash
   # edit .env with your MySQL credentials
   php artisan migrate --ansi
   php artisan db:seed --ansi # creates default roles and admin user
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

## Production deployment

To deploy the CRM in a production environment:

1. Set up your `.env` file with production credentials (database, mail, etc.).
2. Run migrations with the `--force` flag:
   ```bash
   php artisan migrate --ansi --force
   ```
3. Build and minify frontend assets:
   ```bash
   npm run build
   ```
4. Cache configuration and routes for better performance:
   ```bash
   php artisan config:cache --ansi
   php artisan route:cache --ansi
   ```
5. Configure your web server to serve the `public/` directory.
