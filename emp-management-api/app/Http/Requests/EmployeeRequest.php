<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class EmployeeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'position' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'joining_date' => 'required|date',
            'phone' => 'nullable|string|max:20',
            'status' => 'required|in:active,inactive',
            'department' => 'required|string|max:50',
            'photo' => 'nullable|image|mimes:jpeg,jpg,png|max:1024'
        ];
    }
}
