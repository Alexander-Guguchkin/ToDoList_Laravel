<?php

namespace App\Http\Controllers;
use App\Models\Task;
use App\Models\Delete;
use App\Models\Accept;
class TodolistController extends Controller
{
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
        }
        //Добавление в бд Delete
        Delete::create([
            'deleteTask' => $Task,
            'statusTask' => 'deleteTask'
        ]);
    }
    public function editTask($task)
    {

    }
    public function acceptTask($Task)
    {
        $task = Task::where('taskText',$Task)->first();
        if ($task) {
            $task->delete();
        } else {
            echo "Задача не найдена.";
        }
        //Добавление в бд Accepts
        Accept::create([
            'task' => $Task,
            'statusTask' => 'acceptTask'
        ]);
    }
}
