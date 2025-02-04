var x = document.getElementById("map");

function getLocation() {
  if (navigator.geolocation) {
    x.style.visibility = "visible";
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  var latlon = position.coords.latitude + "," + position.coords.longitude;

  var img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" + latlon + "&zoom=14&size=400x300&sensor=false";
  document.getElementById("map").innerHTML = "<img src='" + img_url + "'>";
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}


navigator.geolocation.getCurrentPosition(function(p){
   localStorage.setItem("latitude", p.coords.latitude);
   localStorage.setItem("longitude", p.coords.longitude)
}, function(e){console.log(e)})

var lat = localStorage.latitude;
var lon = localStorage.longitude;


var object = {value: "value", timestamp: new Date().getTime()}
localStorage.setItem("timestamp", JSON.stringify(object));


var t = new Date();
localStorage.localdatetime = t;