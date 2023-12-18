<?php

namespace App\Http\Controllers;

//use function Laravel\Prompts\text;
use App\Models\Task;
class TodolistController extends Controller
{
    public function index()
    {

    }
    public function createTask()
    {
        Task::create([
            'taskText' => 'task1',
            'statusTask' => 'none'
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
