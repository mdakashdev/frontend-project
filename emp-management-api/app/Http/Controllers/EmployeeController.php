<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeRequest;
use App\Http\Resources\EmployeeResource;
use App\Models\Employee;
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

        //crete employee
        $response = Employee::create($data);

        return response()->json([
                'success' => true,
                'message' => 'Employee created successfully',
                'data' => new EmployeeResource($response)
        ], 201);
    }
}
