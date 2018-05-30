<?php

use Illuminate\Http\Request;

use App\LeaseServer;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/*
Route::get('servers', function() {
    // If the Content-Type and Accept headers are set to 'application/json', 
    // this will return a JSON structure. This will be cleaned up later.
    return LeaseServer::all();
});

Route::get('servers/{id}', function($id) {
    return LeaseServer::find($id);
});
*/

Route::group(['middleware' => 'cors'], function() {
 	//Route::get('projects', ['uses' => 'ProjectController@list']);
 	Route::get('servers', 'LeaseServerController@index');
	Route::get('servers/{id}', 'LeaseServerController@show');
	Route::get('servers/filter/model={model?}&storage={storage?}&ram={ram?}&hdd={hdd?}&location={location?}', 
		'LeaseServerController@filter');
});



# Route::post(register, 'Auth\RegisterController@register);