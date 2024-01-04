<?php

namespace App\Http\Controllers;
use App\Models\Task;
use App\Models\Delete;
use App\Models\Accept;

class TodolistController extends Controller
{
    //Создание задачи
    public function createTask($taskTask)
    {
        Task::create([
            'taskText' => $taskTask,
            'statusTask' => 'none'
        ]);
    }
    //Добавление в бд Delete
    public function deleteTask($id, $Task)
    {
        $this->deleteTaskMain($id);
        Delete::create([
            'deleteTask' => $Task,
            'statusTask' => 'deleteTask'
        ]);
    }
    //Редактирование задачи
    public function editTask($id, $Task)
    {
        $task = Task::find($id);
        $task->taskText = $Task;
        $task->save();
    }
    //Добавление в бд Accepts
    public function acceptTask($id, $Task)
    {
        $this->deleteTaskMain($Task);
        Accept::create([
            'task' => $Task,
            'statusTask' => 'acceptTask'
        ]);
    }
    //Получение всех записей
    public function showTasks()
    {
        $task = Task::select('id', 'taskText', 'statusTask', 'updated_at', 'created_at')->get();
        return response()->json($task);
    }
    //Удаление из Tasks
    private function deleteTaskMain($id){
        $task = Task::where('id', $id)->first();
        if ($task) {
            $task->delete();
        } else {
            echo "Задача не найдена.";
        }
    }
}
