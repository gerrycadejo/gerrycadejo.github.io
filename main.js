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
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#004358"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#1f8a70"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#1f8a70"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#c0392b"
              },{
                "visibility": "off"
            }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#1f8a70"
              },
              {
                  "lightness": -20
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#1f8a70"
              },
              {
                  "lightness": -17
              }
          ]
      },
      {
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "visibility": "on"
              },
              {
                  "weight": 0.9
              }
          ]
      },
      {
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#1f8a70"
              },
              {
                  "lightness": -10
              }
          ]
      },
      {},
      {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#1f8a70"
              },
              {
                  "weight": 0.7
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


  getLocation();





// GEOLOCATION

function getLocation() {
  if (navigator.geolocation) {
    console.log('geolocation available');
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
    limitRenderer(response, walkingPathLine, myRoute);
    }
    });
}

function limitRenderer(result, line, markerpos){
if (directionsDisplay != null){
  console.log('there is already a line')
  directionsDisplay.setMap(null);
  directionsDisplay = null;
  destiMarker = null;
  limitRenderer(result, line, markerpos);
} else {
  directionsDisplay = new google.maps.DirectionsRenderer({
  map: map,
  directions: result  ,
  suppressMarkers: true,
  polylineOptions: line,
  });
  console.log('no country for old lines');
  destinationMarker(markerpos, destiMarker);
}
}

// creates the bar's marker
function destinationMarker(response, destiMarker){
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
     console.log(distance);
     }


     var firstText = distance.value;
     var hundredText = distance.value - distance.value + 100;
     var fiftyText = distance.value - distance.value + 50;
     var tenText = distance.value - distance.value + 10;
     if (distance.value === firstText) {
       displayDistance.innerHTML = "<p>Being <strong> " + distance.value + '</strong> meters away from the  favorite story of your future grandkids</p>';
     } if (distance.value === hundredText) {
       displayDistance.innerHTML = "<p> Being <strong> " + distance.value + '</strong> meters away from new text 100 mts</p>';
     } if (distance.value === fiftyText) {
       displayDistance.innerHTML = "<p> This is " + distance.value + 'the fifty text modafoca</p>';
     } if (distance.value === tenText) {
       document.getElementById('right-panel').style.height = "400px";
       document.getElementById('right-panel').style['border'] = "6px solid #1abc9c";
       displayDistance.innerHTML = "<h2> congratulations! </h2> <br> <br> <p> You have reached your destination! Cheers mate! </p>";
       navigator.geolocation.clearWatch(id);
     }
     console.log('yeah it happened');
     console.log(tenText);

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
           strokeColor: "#ecf0f1",
           strokeOpacity: 1,
           strokeWeight: 1,
           fillColor: "#ecf0f1",
           fillOpacity: 0.5
        });

        circle = new google.maps.Circle({
           center: user,
           radius: 20,
           strokeColor: "#ecf0f1",
           strokeOpacity: 1,
           strokeWeight: 1,
           fillColor: "#ecf0f1",
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
