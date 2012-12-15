

$(document).ready(function() {
  $(".toggle-menu").on("click", function () {
    // $(this).data("toggle") selector que debo mostrar
    $($(this).data("toggle")).toggleClass("show");
  });
});

function success(position) {
  var s = document.querySelector('#geolocalizacion'); // selector donde va a estar el mapa
  if (s.className == 'success') {    
    return;
  }
  s.className            = 'success';
  var mapcanvas          = document.createElement('div');
  mapcanvas.id           = 'mapcanvas';
  mapcanvas.style.height = '300px';
  mapcanvas.style.width  = '300px';
  document.querySelector('article').appendChild(mapcanvas);
  var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  var myOptions = {
    zoom: 15,
    center: latlng,
    mapTypeControl: true, // Activa o desactiva la vista de satelite
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
  var marker = new google.maps.Marker({
      position: latlng, 
      map: map, 
      title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
  });
}

function error(msg) {
  var s       = document.querySelector('#status');
  s.innerHTML = typeof msg == 'string' ? msg : "failed";
  s.className = 'fail';
}

// Este es el API HTML5 de geolocalizacion
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  error('not supported');
}