L.mapbox.accessToken = 'pk.eyJ1IjoiYnJ5YW50IiwiYSI6IjZyWExxdDAifQ.vswxgwhfFCL9maig6_W2Sg';

var map = L.mapbox.map('map')
	.setView([20.8, 105.8], 9);

var layer = L.mapbox.tileLayer('bryant.3bf73d00', {format: 'png32', attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> &copy; Mapbox &copy; Bryant Davis'}).addTo(map);

var layerGroup = L.layerGroup().addTo(map);

$('#blogLocation').bind('opened', function() {
	$('#blogLocation').css('width', $('body').width());
	console.log('hello');
	map.invalidateSize()
		.setView([20.8, 105.8], 9);
});

$('#blogLocation').bind('reveal:opened', function(){
	$('#blogLocation').css('width', $('body').width());
});

map.on('click', function(e) {
    console.log(map); 
    console.log(e.latlng);
	//map.markerLayer.clearLayers();
    layerGroup.clearLayers();
    L.mapbox.featureLayer({
    	type: 'Feature',
		geometry: {
        	type: 'Point',
        	coordinates: [e.latlng.lng, e.latlng.lat]
    	},
		properties: {
        	title: '',
			description: '',
			'marker-size': 'large',
			'marker-color': '#F7C39A'
    	}
	}).addTo(layerGroup);
	$("#location-marker-coordinates-input").val("latitude: "+e.latlng.lat+ ", longitude: "+e.latlng.lng);
	$("input[name='latitude']").val(e.latlng.lat);
	console.log($("input[name='latitude']").val());
	$("input[name='longitude']").val(e.latlng.lng);
	console.log(map);
});