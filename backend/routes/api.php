<?php

use App\Http\Controllers\ProductController;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\ProductResource;
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
Route::get('/products/{id}', function ($id) {
    return new ProductResource(Product::findOrFail($id));
});

Route::get('/products', function () {
    return ProductResource::collection(Product::all(),200);
});

Route::post('/products', [ProductController::class, 'create']);

Route::put('products/{id}',[ ProductController::class, 'update']);

Route::delete('products/{id}',[ ProductController::class, 'delete']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
