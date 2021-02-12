<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Screen;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller {
    public function login(Request $request) {

    }

    public function register(Request $request) {
        $request->validate([
            'name' => ['required'],
            'email' => ['required', 'email', 'unique:users'],
            'password' => ['required']
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);
    }
}
