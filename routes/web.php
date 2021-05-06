<?php

use Illuminate\Support\Facades\Route;

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

/*
 * TODO LIST
 * 1. ~~ Login
 * 2. ~~ Register
 * 3. ~~ Create event
 * 3.1. Event view
 * 4. Edit event
 * 5. Delete event
 * 6. Overlap checker
 * 7. Typescripted errors
 * 8. Responsividade
 */

Route::get('{all?}', function () {
    return view('welcome');
})->where('all', '([A-z\d\-\/_.]+)?');
