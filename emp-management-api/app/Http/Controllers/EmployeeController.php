<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeRequest;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Http\JsonResponse;

class EmployeeController extends Controller
{
    public function store(EmployeeRequest $request): JsonResponse
    {
        $data = $request->validated();

        //Store photo
        if ($request->hasFile('photo')) {
            $data['photo'] = $request->file('photo')->store('employees', 'public');
        }

        //create employee
        try {
            $response = Employee::create($data);
        } catch (UniqueConstraintViolationException) {
            return response()->json([
                'success' => false,
                'message' => 'This email address is already registered.',
                'errors' => [
                    'email' => ['This email address is already registered.']
                ]
            ], 422);
        }

        return response()->json([
            'success' => true,
            'message' => 'Employee created successfully',
            'data' => new EmployeeResource($response)
        ], 201);
    }
}
