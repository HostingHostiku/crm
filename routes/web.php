<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\PermissionController;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::resource('clients', ClientController::class)->only(['index', 'store', 'update', 'destroy']);
    Route::resource('contacts', ContactController::class)->only(['index', 'store', 'update', 'destroy']);
    Route::resource('projects', ProjectController::class)->only(['index', 'store', 'update', 'destroy']);
    Route::middleware('role:admin')->group(function () {
        Route::get('admin', function () {
            return Inertia::render('admin/panel');
        })->name('admin.panel');
        Route::resource('admins', AdminController::class)->only(['index', 'store', 'destroy']);
        Route::resource('permissions', PermissionController::class)->only(['index', 'store', 'destroy']);
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
