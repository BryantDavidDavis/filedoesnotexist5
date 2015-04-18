<!doctype html>
<html class="no-js" lang="en">
<html>
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		{!! HTML::style('stylesheets/app.css') !!}
		<script src="{{ asset('/js/vendor.js') }}"></script>
		@yield('header')
	</head>
	<body>
		@yield('content')
		
		@yield('footer')
		
		<script>
			$(document).foundation();
		</script>
	</body>
</html>