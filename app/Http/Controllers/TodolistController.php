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
    public function deleteTask($id, $Task)
    {
        $this->deleteTaskMain($id, $Task);
        //Добавление в бд Delete
        Delete::create([
            'deleteTask' => $Task,
            'statusTask' => 'deleteTask'
        ]);
    }
    public function editTask($id, $Task)
    {
       $task = new Task();
       $task->update($Task);
       $task->save();
    }
    public function acceptTask($id, $Task)
    {
        $this->deleteTaskMain($Task);
        //Добавление в бд Accepts
        Accept::create([
            'task' => $Task,
            'statusTask' => 'acceptTask'
        ]);
    }
    public function showTasks()
    {
        $task = Task::select('id', 'taskText', 'statusTask', 'updated_at', 'created_at')->get();
        return response()->json($task);
    }
    private function deleteTaskMain($id, $Task){
        //Удаление из Tasks
        $task = Task::where('id', $id)->where('taskText',$Task)->first();
        if ($task) {
            $task->delete();
        } else {
            echo "Задача не найдена.";
        }
    }
}
