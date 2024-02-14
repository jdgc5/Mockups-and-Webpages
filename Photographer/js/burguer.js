$(document).ready(function() {
  var menuToggle = $("#menu-toggle");

  menuToggle.on("click", function() {
      if ($(this).hasClass("active")) {
          $(this).removeClass("active");
      } else {
          $(this).addClass("active");
      }
  });
});
