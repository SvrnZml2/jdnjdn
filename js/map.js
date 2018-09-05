//Set your google maps parameters

var latitude = 47.675855,
longitude = -2.765641,
map_zoom = 15;

//google map custom marker icon - .png fallback for IE11
var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
var marker_url = ( is_internetExplorer11 ) ? 'images/cd-icon-location.png' : 'images/cd-icon-location.svg';

//define the basic color of your map, plus a value for saturation and brightness
var	main_color = '#e67e22',
saturation_value= -50,
brightness_value= 14;

//we define here the style of the map
var style= [
{
"featureType": "all",
"elementType": "labels.text.fill",
"stylers": [
{
    "saturation": 36
},
{
    "color": "#000000"
},
{
    "lightness": 40
}
]
},
{
"featureType": "all",
"elementType": "labels.text.stroke",
"stylers": [
{
    "visibility": "on"
},
{
    "color": "#000000"
},
{
    "lightness": 16
}
]
},
{
"featureType": "all",
"elementType": "labels.icon",
"stylers": [
{
    "visibility": "off"
}
]
},
{
"featureType": "administrative",
"elementType": "geometry.fill",
"stylers": [
{
    "color": "#000000"
},
{
    "lightness": 20
}
]
},
{
"featureType": "administrative",
"elementType": "geometry.stroke",
"stylers": [
{
    "color": "#000000"
},
{
    "lightness": 17
},
{
    "weight": 1.2
}
]
},
{
"featureType": "landscape",
"elementType": "geometry",
"stylers": [
{
    "color": "#000000"
},
{
    "lightness": 20
}
]
},
{
"featureType": "poi",
"elementType": "geometry",
"stylers": [
{
    "color": "#000000"
},
{
    "lightness": 21
}
]
},
{
"featureType": "road.highway",
"elementType": "geometry.fill",
"stylers": [
{
    "color": "#000000"
},
{
    "lightness": 17
}
]
},
{
"featureType": "road.highway",
"elementType": "geometry.stroke",
"stylers": [
{
    "color": "#000000"
},
{
    "lightness": 29
},
{
    "weight": 0.2
}
]
},
{
"featureType": "road.arterial",
"elementType": "geometry",
"stylers": [
{
    "color": "#000000"
},
{
    "lightness": 18
}
]
},
{
"featureType": "road.local",
"elementType": "geometry",
"stylers": [
{
    "color": "#000000"
},
{
    "lightness": 16
}
]
},
{
"featureType": "transit",
"elementType": "geometry",
"stylers": [
{
    "color": "#000000"
},
{
    "lightness": 19
}
]
},
{
"featureType": "water",
"elementType": "geometry",
"stylers": [
{
    "color": "#000000"
},
{
    "lightness": 17
}
]
}
];

//set google map options
var map_options = {
center: new google.maps.LatLng(latitude, longitude),
zoom: map_zoom,
panControl: false,
zoomControl: false,
mapTypeControl: false,
streetViewControl: false,
mapTypeId: google.maps.MapTypeId.ROADMAP,
scrollwheel: false,
styles: style,
}
//inizialize the map
var map = new google.maps.Map(document.getElementById('google-container'), map_options);
//add a custom marker to the map				
var marker = new google.maps.Marker({
position: new google.maps.LatLng(latitude, longitude),
map: map,
visible: true,
icon: marker_url,
});

//add custom buttons for the zoom-in/zoom-out on the map
function CustomZoomControl(controlDiv, map) {
//grap the zoom elements from the DOM and insert them in the map 
var controlUIzoomIn= document.getElementById('cd-zoom-in'),
    controlUIzoomOut= document.getElementById('cd-zoom-out');
controlDiv.appendChild(controlUIzoomIn);
controlDiv.appendChild(controlUIzoomOut);

// Setup the click event listeners and zoom-in or out according to the clicked element
google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
    map.setZoom(map.getZoom()+1)
});
google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
    map.setZoom(map.getZoom()-1)
});
}

var zoomControlDiv = document.createElement('div');
var zoomControl = new CustomZoomControl(zoomControlDiv, map);

//insert the zoom div on the top left of the map
map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
