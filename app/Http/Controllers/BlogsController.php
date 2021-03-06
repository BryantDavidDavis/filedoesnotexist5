<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Blog;
use Request;
use Illuminate\Http\Response;

class BlogsController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//$blogs = Blog::where('user_id', 1)->get();
		return response()->view('blogs.index');
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store() {
		$inputs = Request::all();
		Blog::create($inputs);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}
	
	public function blogMapAjax($id) {

		$blogPointsArray = [];
		$results = Blog::where('user_id', $id)->get();
		$app = app();
		foreach ($results as $result) {
			$blogPoint = $app->make('stdClass');
			$blogPoint->type = "Feature";
			$blogPoint->geometry = $app->make('stdClass');
			$blogPoint->geometry->type = "Point";
			$blogPoint->geometry->coordinates = [$result->longitude, $result->latitude];
			$blogPointsArray[] = $blogPoint;
		}
		return response()->json($blogPointsArray);
		//return response()->json(Blog::where('user_id', $id)->get());
	}
}
