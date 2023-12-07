<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/Main', function (){
    return view('MainView');
});
Route::get('/Succes', function (){
    return view('SuccesView');
});
Route::get('/Delete', function (){
    return view('DeleteView');
});
Route::get('sidebar', function (){
    return view('components.sidebar');
});
