<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ContentController;
use App\Http\Controllers\ScreenController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/test', [ScreenController::class, 'test']);

Route::post('/content/store', [ContentController::class, 'store']);
Route::get('/content/destroy/{id}', [ContentController::class, 'destroy']);
Route::get('/content', [ContentController::class, 'index']);

Route::post('/screen/store', [ScreenController::class, 'store']);
Route::get('/screen/destroy/{id}', [ScreenController::class, 'destroy']);
Route::get('/screen', [ScreenController::class, 'index']);