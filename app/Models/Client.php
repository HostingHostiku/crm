<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'phone',
        'address',
    ];

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }

    public function projects()
    {
        return $this->hasMany(Project::class);
    }
}
