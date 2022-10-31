<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersController;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'isAdmin', 'verified'])->name('dashboard');


Route::middleware(['auth', 'isAdmin'])->group(function () {
    Route::get('users', [UsersController::class, 'index'])
        ->name('users.all');
});



Route::get('/takers', function () {
    return Inertia::render('Takers/Index');
})->middleware(['auth', 'isTaker', 'verified'])->name('takers.index');

require __DIR__ . '/auth.php';
