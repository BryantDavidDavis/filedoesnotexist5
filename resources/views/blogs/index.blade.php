@extends('layouts.default')
@section('header')
	{!! HTML::script('https://api.tiles.mapbox.com/mapbox.js/v2.1.5/mapbox.js') !!}
	{!! HTML::style('https://api.tiles.mapbox.com/mapbox.js/v2.1.5/mapbox.css') !!}
@endsection
@section('content')
	<div class='row'>
		<div id="blog-map-container" class='small-12 columns' style="height: 100vh;">
		</div>
	</div>

@endsection
@section('footer')
	<script src="{{ asset('/js/blogs/index.js') }}"></script>
@endsection