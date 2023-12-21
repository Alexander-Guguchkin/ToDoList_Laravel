<?php

namespace App\Http\Controllers;
use App\Models\Task;
use App\Models\Delete;

class TodolistController extends Controller
{
    public function index()
    {

    }
    public function createTask($taskTask)
    {
        Task::create([
            'taskText' => $taskTask,
            'statusTask' => 'none'
        ]);
    }
    public function deleteTask($Task)
    {
        //Удаление из Tasks
        $task = Task::where('taskText',$Task)->first();
        if ($task) {
            $task->delete();
        } else {
            echo "Задача не найдена.";
            dump($task);
        }
        //Добавление в бд Delete
        Delete::create([
            'deleteTask' => $Task,
            'statusTask' => 'deleteTask'
        ]);
    }
    public function editTask()
    {

    }
    public function acceptTask()
    {

    }
}
