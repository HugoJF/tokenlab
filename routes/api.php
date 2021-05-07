<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/me', function (Request $request) {
    if (auth()->check()) {
        return auth()->user();
    } else {
        return response()->noContent();
    }
});

Route::middleware(['auth'])->prefix('events')->group(function () {
    Route::get('/', [\App\Http\Controllers\EventController::class, 'index'])->name('events.index');
    Route::get('{event}', [\App\Http\Controllers\EventController::class, 'show'])->name('events.show');

    Route::post('/', [\App\Http\Controllers\EventController::class, 'store'])->name('events.store');
    Route::post('{event}/join', [\App\Http\Controllers\ParticipantController::class, 'join'])->name('events.join');
    Route::post('{event}', [\App\Http\Controllers\ParticipantController::class, 'join'])->name('events.join');

    Route::patch('{event}', [\App\Http\Controllers\EventController::class, 'update'])->name('events.update');

    Route::delete('{event}', [\App\Http\Controllers\EventController::class, 'destroy'])->name('events.destroy');
    Route::delete('{event}/leave', [\App\Http\Controllers\ParticipantController::class, 'leave'])->name('events.leave');
});
