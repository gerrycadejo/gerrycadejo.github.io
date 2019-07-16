let map;
let circle;
let directionsDisplay;
let destiMarker;
let smallCircle;
let markers = [];
let locations =
  [{title: 'Barezzito', location: {lat:14.5955048,lng: -90.4962555}},
  {title: "Axel's grill AB", location: {lat: 14.5858135,lng: -90.489115}},
  {title: "Rägsved's Pub", location: {lat:14.5846358, lng: -90.4867873}},
  {title: "Prueba", location: {lat: 14.596931, lng: -90.492354}},
  {title: "Orby Bar & Kok", location: {lat:14.5896505 ,lng: -90.4905362}}];
var lineSymbol = {
     path: 'M 0,-1 0,1',
     strokeOpacity: 1,
     scale: 4  };

function initMap() {
  var styles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#000000"
      },
      {
        "lightness": 25
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "color": "#00ff00"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
];

  map = new google.maps.Map(document.getElementById('map'),
   {
    center: {lat: 14.628434, lng: -90.522713},
    zoom: 13,
    styles: styles,
    mapTypeControl: false ,
    disableDefaultUI: true,
    rotateControl: true,
    gestureHandling: "auto",
   });

  for ( var i = 0; i < locations.length; i++) {
   var position = locations[i].location;
   var title = locations[i].title;
   var marker = new google.maps.Marker(
   {
      map: map,
      position: position,
      title: title,
      animation: google.maps.Animation.DROP,
      id: i
   });
   markers.push(marker);
   hideMarkers();
  }
}
// Calling the functions

  initMap();
getLocation();




// GEOLOCATION

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else {
    alert("Sorry the geolocation failed\nPlease refresh the page!");
  }
}

// this calls the user's location and grasps the closest markers

function showPosition(position) {
  const pos =
  {
  lat: position.coords.latitude,
  lng: position.coords.longitude
  };
  console.log(pos);
  var myMarker = new google.maps.Marker({
    map: map,
    position: pos,});

  var destinationAddress = markers.reduce(function (prev, curr) {
  var cpos = google.maps.geometry.spherical.computeDistanceBetween(myMarker.position, curr.position);
  var ppos = google.maps.geometry.spherical.computeDistanceBetween(myMarker.position, prev.position);
  return cpos < ppos ? curr : prev;
  });
  var destiAddress = destinationAddress.position;
  var destiName = '🍻 ' + destinationAddress.title;
  renderRoute(pos, destiAddress, destiName);
  myMarker.setMap(null);
  locationMarker(pos);
  distanceLeft(pos, destiAddress);
  destinationMarker(destiAddress);
  var latitude = pos.lat;
  var longitude = pos.lng;
  console.log(latitude);
  centerControl(latitude, longitude);
}



// button to center the map to where the user is
function centerControl(userlat, userlng) {
  var controlDiv = document.getElementById('center-button');
    console.log('clicked bitch')
  var latLng = new google.maps.LatLng(userlat, userlng); //Makes a latln
   console.log(latLng);
   google.maps.event.addDomListener(controlDiv, 'click', function() {
   map.setCenter(latLng)
 });
}

// this renders the directions route and converts the line into circles.
function renderRoute(ori, desti, name) {
  var directionsService = new google.maps.DirectionsService;
    directionsService.route({
    origin: ori,
    destination: desti,
    travelMode: 'WALKING',
  },
  function (response, status) {
  if (status === google.maps.DirectionsStatus.OK) {

    document.getElementById('replace-me').innerText = name;
    var myRoute = response.routes[0].legs[0];
    console.log(myRoute);

    var walkingLineSymbol = {
    path: google.maps.SymbolPath.CIRCLE,
    fillOpacity: 1,
    scale: 3
    };

    var walkingPathLine = new google.maps.Polyline({
    strokeColor: '#f1c40f',
    strokeOpacity: 0,
    fillOpacity: 0,
    icons: [{
        icon: walkingLineSymbol,
        offset: '150%',
        repeat: '10px'
            }],
    });
    limitRenderer(response, walkingPathLine)
    destinationMarker(myRoute);
    }
    });
}

function limitRenderer(result, line){
if (directionsDisplay != null){
  console.log('there is already a line')
} else {
  directionsDisplay = new google.maps.DirectionsRenderer({
  map: map,
  directions: result  ,
  suppressMarkers: true,
  polylineOptions: line,
  });
  console.log('no country for old lines');
}
}

// creates the bar's marker
function destinationMarker(response){
  var image = {
    url:'marca4.png',
    scaledSize: new google.maps.Size(50,55),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(22,22)
    }



   destiMarker = new google.maps.Marker({
        map: map,
        position: response.end_location,
        icon: image,
        zIndex: 50,
        animation: google.maps.Animation.DROP,
      });
      destiMarker.setMap(map);

}


// This fills the div at the bottom left with the distance.
function distanceLeft(origin1, destinationA) {
  var service = new google.maps.DistanceMatrixService;
    service.getDistanceMatrix({
        origins: [origin1],
        destinations: [destinationA],
        travelMode: 'WALKING',
        unitSystem: google.maps.UnitSystem.METRIC,
        },
   function(response, status) {
     if (status !== 'OK') {
     alert('Error was: ' + status);
     }
     else {
     var distance = response.rows[0].elements[0].distance;
     var displayDistance = document.getElementById("right-panel");
     displayDistance.innerHTML = "<p>Being " + distance.value + '</strong> meters away from the  favorite story of your future grandkids</p>';
     console.log(distance);
     }
     });
}



// this creates the user location marker;
function locationMarker(user){

   if (smallCircle != null & circle != null) {


        circle.setCenter(user);
        smallCircle.setCenter(user);
        map.panTo(user);

      } else {

        smallCircle = new google.maps.Circle({
           center: user,
           radius: 5,
           strokeColor: "#1abc9c",
           strokeOpacity: 1,
           strokeWeight: 1,
           fillColor: "#1abc9c",
           fillOpacity: 0.5
        });

        circle = new google.maps.Circle({
           center: user,
           radius: 20,
           strokeColor: "#1abc9c",
           strokeOpacity: 1,
           strokeWeight: 1,
           fillColor: "#1abc9c",
           fillOpacity: 0.5
        });

        circle.setMap(map);
        smallCircle.setMap(map);

        // This is the animation
        var direction = 0.8;
        var rMin = 5, rMax = 20;
        setInterval(function() {
            var radius = circle.getRadius();
            if ((radius > rMax) || (radius < rMin)) {
                direction *= -1;
            }
            circle.setRadius(radius + direction * 0.4);
            }, 50);

      }
  }




// Hides all the markers
function hideMarkers() {
  for (var i = 0; i < markers.length; i++)
  {
  markers[i].setMap(null);
  }
}

// rotate logo menu

document.getElementById("logo").addEventListener("click", rotatePic);

function rotatePic(){
  var img1 = "rotate(0deg)";
  var img2 = "rotate(90deg)";
  var imgElement = document.getElementById('logo');
  imgElement.style.transform = (imgElement.style.transform === img2)? img1 : img2;
}

// load map
google.maps.event.addDomListener(window, "load", initMap);
