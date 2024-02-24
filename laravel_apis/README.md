# Playing Around Laravel Products API project.

This page will help you get started with Laravel_apis. You'll be up and running in a jiffy!

### **Welcome to ReadMe!😎😎**

This is a simple Laravel Api for managing products. Offers all CRUD features easily. Tested it on postman. Now to get started with the Api:

1. Clone the repo
2. start your xampp server or wampp
3. Navigate to the laravel_apis directory and run: **php artisan serve** to start your app on localhost.
4. Next login to your postman Agent account to begin playing around with the Api.
5. The API uses passport authentication to grant access to protected routes,

```php
Route::middleware('auth:api')->group(function () 
{
// Authenticated routes 
Route::post('/logout', 'App\Http\Controllers\AuthenticationController@logout');
Route::post('/create', 'App\Http\Controllers\ProductController@store'); 
Route::get('/products', 'App\Http\Controllers\ProductController@products'); 
Route::get('/show/{id}', 'App\Http\Controllers\ProductController@show'); 
});
Route::post('register', 'App\Http\Controllers\AuthenticationController@register')->name('register'); 

Route::post('login', 'App\Http\Controllers\AuthenticationController@login')->name('login');
```

These are the available routes, Register and login routes are the only unprotected routes, to view products, add products or edit a product one needs to be logged in and **authenticated.**

# Configuring postman.

Postman has some things you need to setup before you can use it seamlessly:

1. To register or login, got to the headers section and configure it to accept json data. i.e
2. **KEY: Accept VALUE: application/json** with this you can use raw json to login
3. Once registered or logged in you will receive an Accesstoken, copy it and **under Authorization, select token Bearer and on the input field on the far right, paste your access token** with this configured you can access the protected routes like products and creating products.
4. Break a leg!! Adios ✌️✌️