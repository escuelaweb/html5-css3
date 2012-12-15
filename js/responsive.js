

$(document).ready(function() {
  $(".toggle-menu").on("click", function () {
    // $(this).data("toggle") selector que debo mostrar
    $($(this).data("toggle")).toggleClass("show");

    // 
    // toggleClass();

  });
});