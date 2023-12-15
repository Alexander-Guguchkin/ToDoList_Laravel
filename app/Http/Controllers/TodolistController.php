<?php

namespace App\Http\Controllers;
use App\Models\TodoList;
use function Laravel\Prompts\text;

class TodolistController extends Controller
{
    public function index()
    {

    }
    public function createTask($text)
    {
        TodoList::created([
            'text' => $text
        ]);
    }
    public function deleteTask()
    {

    }
    public function editTask()
    {

    }
    public function acceptTask()
    {

    }
}
