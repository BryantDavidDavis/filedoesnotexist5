<!doctype html>
<html class="no-js" lang="en">
<html>
	<head>
		<meta charset="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		{!! HTML::style('css/app.css') !!}
		{!! HTML::style('css/main.css') !!}
		<script src="{{ asset('/js/vendor.js') }}"></script>
		@yield('header')
	</head>
	<body>
		<nav class="top-bar" data-topbar role="navigation">
		  <ul class="title-area">
		    <li class="name">
		      <h1><a href="#">File Does Not Exist</a></h1>
		    </li>
		     <!-- Remove the class "menu-icon" to get rid of menu icon. Take out "Menu" to just have icon alone -->
		    <li class="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
		  </ul>
		
		  <section class="top-bar-section">
		    <!-- Right Nav Section -->
		    <ul class="right">
		      <li class="has-dropdown">
		        <a href="#">more stuff</a>
		        <ul class="dropdown">
		          <li><a href="#">click me</a></li>
		          <li class="active"><a href="#">me too</a></li>
		        </ul>
		      </li>
		    </ul>
		  </section>
		</nav>		
		@yield('content')
		
		@yield('footer')
		
		<script>
			$(document).foundation();
		</script>
	</body>
</html>