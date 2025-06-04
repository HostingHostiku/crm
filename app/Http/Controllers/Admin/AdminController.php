<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function index(): Response
    {
        $admins = User::role('admin')->get();
        return Inertia::render('admins/index', [
            'admins' => $admins,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $user = User::findOrFail($request->input('user_id'));
        $user->assignRole('admin');
        return redirect()->back();
    }

    public function destroy(User $user): RedirectResponse
    {
        $user->removeRole('admin');
        return redirect()->back();
    }
}
