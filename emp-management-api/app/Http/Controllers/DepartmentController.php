<?php

namespace App\Http\Controllers;

use App\Http\Requests\DepartmentRequest;
use App\Models\Department;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function store(DepartmentRequest $request)
    {
        $data = $request->validated();

        $response = Department::create($data);

        return response()->json([
            'success' => true,
            'message' => 'Department created successfully',
            'data' => $response
        ], 201);
    }
}
