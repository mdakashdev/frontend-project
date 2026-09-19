<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeRequest;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index(EmployeeRequest $request)
    {
        $data = $request->validated();

        return ['hello', $data];
    }
}
