<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Controllers\Controller;
/**
 * Class AuthenticationController
 * @package App\Http\Controllers
 */
class AuthenticationController extends Controller
{
    /**
     * Register a new user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'name' =>'required|max:255',
            'email' =>'required|email',
            'password' => 'required',
        ]);
        
        // Create a new user record
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password) // Hash the password
        ]);
        
        // Create a token for the user
        $token = $user->createToken('user');
        
        // Return response with user details and access token
        return response([
            'user' => $user,
            'token' => $token->accessToken,
        ]);
    }
    
    /**
     * Log in an existing user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        // Validate the incoming request data
        $credentials = $request->validate([
            'email' =>'required|email',
            'password' => 'required',
        ]);
        
        // Find the user by email
        $user = User::where('email', $request->email)->first();
        
        // Check if user exists and verify the password
        if (!$user || !password_verify($request->password, $user->password)) {
            return response([
                'message' => 'Invalid Credentials'
            ], 401); // Unauthorized status code
        }
        
        // Create a token for the user
        $token = $user->createToken('user');
       
        // Return response with user details and access token
        return response([
            'user' => $user,
            'token' => $token->accessToken,
        ]);
    }
    
    /**
     * Log out the authenticated user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        // Check if user is authenticated
        if (auth()->check()) {
            // Revoke the user's token
            $request->user()->token()->revoke();
            return response(['message' => 'Successfully logged out']);
        }
        
        // If user is not authenticated
        return response(['message' => 'User not authenticated'], 401); // Unauthorized status code
    }
}
