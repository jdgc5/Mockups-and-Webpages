$(document).ready(function() {
  // Función para manejar el evento de scroll
  
  $('.m-button-up').hide();
  $(window).scroll(function() {
      var alto = screen.height;
      //console.log(alto);
      // Verificar la posición de desplazamiento para el botón
      if ($(this).scrollTop() >= alto ) {
          $('.m-button-up').fadeIn();
      } else {
          $('.m-button-up').fadeOut(); 
      }

      // Verificar la posición de desplazamiento para el header
      if ($(this).scrollTop() >= 150) {
          $('header').removeClass('translucida').addClass('fija');
      } else {
          $('header').removeClass('fija').addClass('translucida');
      }

      if ($(this).scrollTop() >= alto) {
        $('nav').addClass('menu-sticky');
    } else {
        $('nav').removeClass('menu-sticky');
    }
  });

  // Click event para desplazarse suavemente hacia arriba
  $('#m-button-up').click(function( e ) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0}, 500);
      return false;
  });


  // Verificar posición de desplazamiento inicial para el header al cargar la página
  if ($(window).scrollTop() >= 150) {
      $('header').removeClass('translucida').addClass('fija');
  } else {
      $('header').removeClass('fija').addClass('translucida');
  }
});
