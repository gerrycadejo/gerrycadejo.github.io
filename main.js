let map;
let circle;
let directionsDisplay;
let diablo;
let smallCircle;
let markers = [];
let image;
let diablo2;
let image2;
let locations =[
{title: 'Carmen', location: {lat:59.315695,lng: 18.076237}},
{title: "Axel's grill", location: {lat: 59.2616754,lng: 18.0126894}},
{title: "Ragsved's Pub", location: {lat:59.260261, lng: 18.025663}},
{title: "Orby Bar & Kok", location: {lat:59.274388 ,lng: 18.022592}}]

let myTexts = [
  'Priceless means singing your favorite song along with strangers. - Nico',
  'Priceless means laughing whenever you see the pics that happened that evening. - Lisa',
  'Priceless means taking the chance to create a new beginning. - Diego',
  'Priceless means  leaving the world outside and just keep chatting. - Julia'
];
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
    center: {lat: 59.334591, lng: 18.063240},
    zoom: 17,
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
  var loadingText = document.getElementById('take2');
  var text = myTexts[Math.floor(Math.random() * myTexts.length )];
  loadingText.innerHTML = text;
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
    document.getElementById('loadingPage').style.display = "none";
    document.getElementById('map').style.display = "block";
    document.getElementById('feedback').style.zIndex = "20";
    document.getElementById('center-button').style.zIndex = "20";
    document.getElementById('navegar').style.zIndex = "20";
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
    var pospos = myRoute.end_location;
    limitRenderer(response, walkingPathLine, pospos);
    }
    });
}

function limitRenderer(result, line, myroute){
if (directionsDisplay != null){
  console.log('there is already a line')
  directionsDisplay.setMap(null);
  directionsDisplay = null;
  limitRenderer(result, line, myroute);
} else {
  directionsDisplay = new google.maps.DirectionsRenderer({
  map: map,
  directions: result  ,
  suppressMarkers: true,
  preserveViewport: true,
  polylineOptions: line,
  });
  console.log('no country for old lines');
}
}

// creates the bar's marker
function destinationMarker(destiAddress){
  if (diablo && diablo.setPosition){
    diablo.setPosition(destiAddress);
  } else {
      image = {
     url:'marca4.png',
     scaledSize: new google.maps.Size(50,55),
     origin: new google.maps.Point(0,0),
     anchor: new google.maps.Point(22,22)
     }
        diablo = new google.maps.Marker({
        map: map,
        position: destiAddress,
        icon: image,
        zIndex: 50,
      });
    }
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


     var firstText = 120;
     var hundredText = distance.value - distance.value + 120;
     var fiftyText = distance.value - distance.value + 50;
     var tenText = distance.value - distance.value + 15;
     if (distance.value > firstText) {
       displayDistance.innerHTML = "<p>that the guy who knows a girl, who works where you want to work and is willing to talk to you is just <strong>" + distance.value + ' mts away</strong> #TimeToShine</p>';
       document.getElementById('congratulations').innerHTML = "<h5>🍻 Imagine... </h5>";
       document.getElementById("textfeed").className = "selected-pin-text"
       document.getElementById("feedback").className = "selected-pin";
       document.getElementById("feedback").style.WebkitTransition = "all 2s";
       document.getElementById("feedback").style.transition = "all 2s";
     } if (distance.value <= hundredText) {
       displayDistance.innerHTML = "<p> That <strong> " + distance.value + ' mts away </strong> where you are, your next vacay might start today. See how it rhymes? Prepare for the tan lines!  </p>';
       document.getElementById('congratulations').innerHTML = "<h5> 🍻 Imagine... </h5>";
       document.getElementById("feedback").className = "selected-pin";
       document.getElementById("textfeed").className = "selected-pin-text"
       document.getElementById("feedback").style.WebkitTransition = "all 2s";
       document.getElementById("feedback").style.transition = "all 2s";
     } if (distance.value <= fiftyText) {
       displayDistance.innerHTML = "<p> That <strong> " + distance.value + " mts away </strong>you will run into a friend, who's with a friend that is not your type of friend, but hey, who can say no to having a new really hot friend?. </p>";
       document.getElementById('congratulations').innerHTML = "<h5>🍻 Imagine... </h5>";
       document.getElementById("textfeed").className = "selected-pin-text"
       document.getElementById("feedback").className = "selected-pin";
       document.getElementById("feedback").style.WebkitTransition = "all 2s";
       document.getElementById("feedback").style.transition = "all 2s";
     } if (distance.value <= tenText) {
       document.getElementById("feedback").className = "feedback-class";
       document.getElementById('congratulations').innerHTML = "<h2> You've made it! </h2>";
       document.getElementById("feedback").style.WebkitTransition = "all 2s";
       document.getElementById("feedback").style.transition = "all 2s";
       document.getElementById("textfeed").className = "selected-pin-text moremargin"
       displayDistance.innerHTML = "<p> Let us toast for great conversations, for the people we will follow the next day, for sweet endings and bumpy beginnings, for being wisely stupid and widely wild. <br><br>Let us toast for the priceless moments that rise ahead of us.</p> <img src='toast.gif'> <br> <br> <a class='btn btn-primary mini' href='index.html' role='button' id='home-button'>HOME</a>";
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
        map.setZoom(17);

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
