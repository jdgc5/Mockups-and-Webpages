
    document.addEventListener('DOMContentLoaded', function () {
      if (typeof Swiper !== 'undefined') {
        const swiper = new Swiper('.swiper-container', {
          direction: 'vertical',
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        });
      }
    });