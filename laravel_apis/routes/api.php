<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::middleware('auth:api')->group(function () {
    // Your authenticated routes go here
    Route::post('/logout', 'App\Http\Controllers\AuthenticationController@logout');
    Route::post('/create', 'App\Http\Controllers\ProductController@store');
    Route::get('/products', 'App\Http\Controllers\ProductController@products');
    Route::get('/show/{id}', 'App\Http\Controllers\ProductController@show');
});
Route::post('register', 'App\Http\Controllers\AuthenticationController@register')->name('register');
Route::post('login', 'App\Http\Controllers\AuthenticationController@login')->name('login');

