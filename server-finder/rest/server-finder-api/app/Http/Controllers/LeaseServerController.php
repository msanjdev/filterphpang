<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\LeaseServer;

class LeaseServerController extends Controller
{
    public function index()
    {
        return LeaseServer::all();
    }
 
    public function show($id)
    {
        return LeaseServer::find($id);
    }

    /*

		// hddtype is set to SATA2, SSD or SAS

		// capacity is calculated for TB and GB like this
		UPDATE lease_servers 
		SET capacity = 
		  concat(
		  CASE
		    WHEN capacity LIKE '%x%GB' THEN
		       SUBSTRING_INDEX(capacity, 'x', 1)*
		       SUBSTRING_INDEX(SUBSTRING_INDEX(capacity, 'x', 2), 'x', -1)
		    ELSE capacity
		  END
		  , 'GB')
		WHERE capacity like '%GB'

    */

//http://localhost:8000/api/servers/filter/model=DL380eG82x&ram=16GBDDR3&hdd=11&location=11
    // http://localhost:8000/api/servers/filter?model=DL380eG82x&ram=2TB&hdd=11&location=11
    public function filter($model, $storage, $ram, $hdd, $location)
    {

    	// TODO: rewrite this more eloquently using a function
		$query = LeaseServer::where('id', '>', 0);

		if ($model != 'null')
			$query = $query -> where ('model', 'LIKE', "%{$model}%");

		if ($storage != 'null')
			$query = $query -> where ('capacity', '=', $storage);

		if ($hdd != 'null')
			$query = $query -> where ('hddtype', 'LIKE', "{$hdd}%");

		if ($ram != 'null') {
			$query = $query->where(function ($query) use ($ram) {
				$ramArray = explode(',', $ram);
				foreach($ramArray as $ramItem){
				    $query->orWhere('ram', 'LIKE', "{$ramItem}%");
				}
	    	});
		}
		
		if ($location != 'null')
			$query = $query -> where ('location', 'LIKE', "%{$location}%");


		$results = $query -> get();

   		return $results; // $ramArray;
   		
   		// return [$ram, $hdd, $model];
    }
}
