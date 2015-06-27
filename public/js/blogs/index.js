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
    popupAnchor: [-3, -76],
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

var summaryControl

function showSummary(e) {
	console.log(e.target);
/*
	$('.alert').alert('close');
	digesterLayer.setStyle(geojsonMarkerOptions);
	
	var layer = e.target;
	selectedDigesterID = layer.feature.properties.digester_id;
	layer.setStyle({
		radius: 8,
		fillColor: "#f00"
	});
	
	if($('.map-panel').length) {
		$('.map-panel').prepend(makeBidBox(makeDetailsPanel(layer.feature.properties), info.bidForm(selectedDigesterID)));
		$('html, body').animate({scrollTop: $('.map-panel').offset().top - 60}, 400);	
	} else {
		$('.map-container').prepend(makeBidBox(makeDetailsPanel(layer.feature.properties), info.bidForm(selectedDigesterID)));
		$('html, body').animate({scrollTop: $('.map-mapcontainer').offset().top - 60}, 400);
	}
	//info.bidBox(info.bidForm(selectedDigesterID));
	hasBeenClicked = true;
	$(".alert-dismissible").on("click", function() {
		hasBeenClicked = false;
	});
	$("#save-button").on("click", function() {
		$.ajax({
			url: '/tools/bidAjax',
			type: 'post',
			data: $("#bid-form").serialize(),
			success: function(data) {
				digesterLayer.setStyle(geojsonMarkerOptions);
				info.bidConfirmation();
			},
			error: function(xhr, textStatus, thrownError) {
				alert("not working captain, your bid wasn't submitted");
			}
		});
	});	
*/
	
}

function onEachFeature(feature, layer) {
	//layer.bindPopup(feature.properties.popUpContent);
	layer.on({
		//mouseover: showStuff,
		//mouseout: backToNormal,
		click: showSummary
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