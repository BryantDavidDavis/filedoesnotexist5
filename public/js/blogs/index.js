L.mapbox.accessToken = 'pk.eyJ1IjoiYnJ5YW50IiwiYSI6IjZyWExxdDAifQ.vswxgwhfFCL9maig6_W2Sg';

var map = L.mapbox.map('blog-map-container')
	.setView([20.8, 105.8], 9);

var layer = L.mapbox.tileLayer('bryant.3bf73d00', {format: 'png32', attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> &copy; Mapbox &copy; Bryant Davis'}).addTo(map);

var blogPointsLayer;

var geojsonMarkerOptions = {
	radius: 4,
	fillColor: "#20f",
	color: "#000",
	weight: 1,
	opacity: 1,
	fillOpacity: 0.5
};

var myIcon = L.icon({
    iconUrl: '../images/bryant_bamboo_face.png',
    iconRetinaUrl: '../images/bryant_bamboo_face.png',
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

/*
function FeatureCollection() {
	this.type = 'FeatureCollection';
	this.features = new Array();
}

function Feature() {
	this.type = 'Feature';
	this.geometry = new Object;
	this.properties = new Object;
}
*/

function onEachFeature(feature, layer) {
	//layer.bindPopup(feature.properties.popUpContent);
	layer.on({
		//mouseover: showStuff,
		//mouseout: backToNormal,
		click: console.log("hello")
	});
}
//var layerGroup = L.layerGroup().addTo(map);

//var blogPoints = {};

$.ajax({
	url: "/blogs/blogMapAjax/1",
	dataType: 'json',
	success: function(data) {
		blogPointsLayer = L.geoJson(data, {
			pointToLayer: function (feature, latlng) {
				console.log(latlng);
				return L.marker(latlng, {icon: myIcon});
			},
			onEachFeature: onEachFeature
		}).addTo(map);
	},
	error: function(xhr, data) {
		console.log(xhr);
		console.log(data);
	}
	
});



/*
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
*/