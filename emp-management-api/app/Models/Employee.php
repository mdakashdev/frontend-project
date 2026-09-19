<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = [
        'name',
        'position',
        'email',
        'joining_date',
        'phone',
        'status',
        'department',
        'photo'
    ];
}
