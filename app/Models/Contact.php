<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_id',
        'name',
        'email',
        'phone',
        'role',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
