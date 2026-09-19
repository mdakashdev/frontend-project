<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeRequest;
use App\Models\Employee;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function store(EmployeeRequest $request): JsonResponse
    {
        $data = $request->validated();

        //photo

        //resources

        //crete employee
        $response = Employee::create($data);

        return response()->json([
                'success' => true,
                'message' => 'Employee created successfully',
                'data' => $response
        ], 201);
    }
}
