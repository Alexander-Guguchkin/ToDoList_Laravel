<?php

namespace App\Http\Controllers;
use App\Models\Accept;

class AcceptController extends Controller
{
    public function showTaskAccept() {
        {
            $Accept = Accept::select('id', 'task', 'statusTask', 'updated_at', 'created_at')->get();
            return response()->json($Accept);
        }
    }
}
