<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('contacts/index', [
            'contacts' => Contact::with('client')->get(),
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'client_id' => ['required', 'exists:clients,id'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['nullable', 'email'],
            'phone' => ['nullable', 'string'],
            'role' => ['nullable', 'string'],
        ]);
        Contact::create($data);
        return redirect()->back();
    }

    public function update(Request $request, Contact $contact): RedirectResponse
    {
        $data = $request->validate([
            'client_id' => ['sometimes', 'exists:clients,id'],
            'name' => ['required', 'string', 'max:255'],
            'email' => ['nullable', 'email'],
            'phone' => ['nullable', 'string'],
            'role' => ['nullable', 'string'],
        ]);
        $contact->update($data);
        return redirect()->back();
    }

    public function destroy(Contact $contact): RedirectResponse
    {
        $contact->delete();
        return redirect()->back();
    }
}
