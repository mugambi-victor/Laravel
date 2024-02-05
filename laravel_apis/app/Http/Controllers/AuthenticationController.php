<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class AuthenticationController extends Controller
{
    //
    public function register(Request $request){
        $request->validate([
            'name' =>'required|max:255',
            'email' =>'required|email',
            'password' => 'required',
        ]);
        $user=User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => ($request->password)
        ]);
        
        $token = $user->createToken('user');

    return response([
        'user' => $user,
        'token' => $token->accessToken,
    ]);
    }
    public function login(Request $request){
        $credentials = $request->validate([
            'email' =>'required|email',
            'password' => '',
        ]);

        $user=User::where('email',$request->email)->first();
        if(!$user||!password_verify($request->password,$user->password))
        {
            return response([
             'message' => 'Invalid Credentials'
            ],401);
        }
        $token = $user->createToken('user');
        return response([
            'user' => $user,
            'token' => $token->accessToken,
        ]);
    }
    public function logout(Request $request)
    {
        if (auth()->check()) {
            $request->user()->token()->revoke();
            return response(['message' => 'Successfully logged out']);
        }
    
        return response(['message' => 'User not authenticated']);
    }
}
