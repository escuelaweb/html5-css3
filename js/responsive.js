

$(document).ready(function() {
  $(".toggle-menu").on("click", function () {
    // $(this).data("toggle") selector que debo mostrar
    $($(this).data("toggle")).toggleClass("show");

    // 
    // toggleClass();

  });


});

function success(position) {
  alert(position.coords.latitude);
}
function error(position) {
  alert("no funciona la geolocalizacion");
}


// Este es el API HTML5 de geolocalizacion
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  error('not supported');
}