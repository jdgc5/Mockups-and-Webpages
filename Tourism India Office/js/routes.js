var timelineSwiper = new Swiper('.timeline .swiper-container', {
    direction: 'horizontal',
    speed: 1000,
    pagination: '.swiper-pagination',
    paginationBulletRender: function (swiper, index, className) {
      let year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
      let content = `<span class="${className}">${year}</span>`
      return content;
    },
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    breakpoints: {
      768: {
        direction: 'horizontal' } } 
  });