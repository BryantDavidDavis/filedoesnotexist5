@extends('layouts.default')
@section('header')
	{!! HTML::script('https://api.tiles.mapbox.com/mapbox.js/v2.1.5/mapbox.js') !!}
	{!! HTML::style('https://api.tiles.mapbox.com/mapbox.js/v2.1.5/mapbox.css') !!}
	<style>
		#map { position:absolute; top:0; bottom:0; height: 100%; width:100%; }
		.full-modal {
			background-size: 100% 100% !important;
			background-repeat: no-repeat !important;
			height: 100% !important;
			top: 0px !important;
			left: 0px !important;
			margin: 0 auto;
		}
		.close-full-modal {
			position: fixed !important;
			top: 5px !important;
			right: 5px !important;
		}
	</style>
@endsection
@section('content')

<div class="row">
  <div class="small-12 medium-8 medium-offset-2 large-offset-2 columns">.

	  {!! Form::open(['url' => 'blogs']) !!}
	  	<fieldset>
		  	<legend>blog entry form</legend>
		  		{!! Form::label('title') !!}
		  		{!! Form::text('title', null) !!}
		  		{!! Form::label('entry') !!}
		  		{!! Form::textarea('description', null, ['rows' => '12']) !!}
	  		   <div class="row collapse prefix-round">
	  		   	<div class="small-3 columns">
	  		   		<a href="#" class="button prefix success" data-reveal-id="blogLocation">location</a>
        		</div>
				<div class="small-9 columns">
					<input type="text" placeholder="location goes here" id="location-marker-coordinates-input">
					<input type="hidden" name="latitude" value=""/>
					<input type="hidden" name="longitude" value=""/>
        		</div>
      			</div>		  		
		  		{!! Form::submit('submit that thang!', ['class' => 'button success']) !!}
  		</fieldset>
  		{!! Form::close() !!}

  </div>

<div id="blogLocation" class="full-modal reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
  <h2 id="modalTitle">Put in the location</h2>
  <p class="lead">map will go here</p>
  <div id='map'></div>
  <a class="close-reveal-modal close-full-modal" aria-label="Close">&#215;</a>
</div>

</div>
@endsection
@section('footer')
	<script src="{{ asset('/js/admin/index.js') }}"></script>
@endsection