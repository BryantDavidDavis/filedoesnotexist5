var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

// elixir(function(mix) {
//     mix.less('app.less');
// });

//var server = livereload();

/*
gulp.task('sass', function() {
	return sass('public/packages/vendor/foundation/scss/app.scss', 
		{style: 'expanded'})
		.pipe(minifycss())
		.pipe(gulp.dest('public/stylesheets'));
});
*/

elixir(function(mix) {
	mix.phpUnit();
	mix.sass('app.scss')
	.copy(
		'resources/assets/bower/react/react.js',
		'public/js/vendor/react/react.js'
	);
	mix.scripts([
		'../assets/bower/foundation/js/vendor/modernizr.js',
		'../assets/bower/foundation/js/vendor/jquery.js', 
		'../assets/bower/foundation/js/fastclick.js', 
		'../assets/bower/foundation/js/foundation.min.js'
	], 'public/js/vendor.js');	
});