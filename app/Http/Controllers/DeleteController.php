<?php

namespace App\Http\Controllers;
use App\Models\Delete;

class DeleteController extends Controller
{
    public function showTaskDelete() {
        {
            $Delete = Delete::select('id', 'deleteTask', 'statusTask', 'updated_at', 'created_at')->get();
            return response()->json($Delete);
        }
    }
}
