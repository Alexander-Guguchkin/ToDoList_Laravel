<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodolistController;
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
Route::get('/Success', function (){
    return view('SuccessView');
});
Route::get('/Delete', function (){
    return view('DeleteView');
});
Route::get('sidebar', function (){
    return view('components.sidebar');
});
Route::get('/addTask/{taskTask}', [TodolistController::class, 'createTask'])->name('addTask');
Route::get('/deleteTask/{id}/{Task}', [TodolistController::class, 'deleteTask'])->name('deleteTask');
Route::get('/successTask/{id}/{Task}', [TodolistController::class, 'acceptTask'])->name('successTask');
Route::get('/editTask/{id}/{Task}', [TodolistController::class, 'editTask'])->name('editTask');
Route::get('/showTask', [TodolistController::class, 'showTasks'])->name('showTask');
