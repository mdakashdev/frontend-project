<?php

namespace App\Http\Controllers;

use App\Http\Requests\DepartmentRequest;
use App\Http\Resources\DepartmentResource;
use App\Models\Department;

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

    public function list()
    {
        $department = Department::all();

        return response()->json([
            'success' => true,
            'messages' => 'Department list retrieved successfully',
            'data' => DepartmentResource::collection($department)
        ], 200);
    }
}
