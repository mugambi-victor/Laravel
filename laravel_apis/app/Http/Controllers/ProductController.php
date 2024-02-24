<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function products(Request $request)
    {
        $user = $request->user();
        if($user){
        $products = Product::all();
        return response()->json($products, 200);
        }
        else{
            return response()->json(['message' => 'Unauthorized'], 401);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        return response()->json($product, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'description' => 'required',
            'price' => 'required|integer',
        ]);
        if ($validator->fails()) {
        $errors = $validator->errors();

        // Construct error messages for each field
        $specifiedErrors = [];

        if ($errors->has('name')) {
            $specifiedErrors['name'] = $errors->first('name');
        }

        if ($errors->has('description')) {
            $specifiedErrors['description'] = $errors->first('description');
        }

        if ($errors->has('price')) {
            $specifiedErrors['price'] = $errors->first('price');
        }

        // Return error response with specified fields
        return response()->json([
            'message' => 'Validation failed',
            'errors' => $specifiedErrors
        ], 422);
    }
    
        $product = Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'user_id' => $request->user()->id,
        ]);

        return response()->json(['message' => 'Product created successfully', 'product' => $product], 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $product->update($request->all());
        return response()->json(['message' => 'Product updated successfully', 'product' => $product], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
        $product->delete();
        return response()->json(['message' => 'Product deleted successfully'], 200);
    }
}
