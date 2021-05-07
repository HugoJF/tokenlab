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
 * 2. ~~ Register
 * 4. Edit event
 * 5. Delete event
 * 6. Overlap checker
 * 7. Typescripted errors
 * 8. Responsividade
 * 9. cleanup
 */

Route::get('{all?}', function () {
    return view('welcome');
})->where('all', '([A-z\d\-\/_.]+)?');
