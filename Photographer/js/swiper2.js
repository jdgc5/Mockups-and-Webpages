var swiper = new Swiper(`.swiper-slide2`, {
    slidesPerView: 3,
    spaceBetween: 5,
    pagination: {
        el: `.swiper-pagination`,
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
        },

        501: {
            slidesPerView: 1,
        },

        769: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        1025: {
            slidesPerView: 1.15,
            spaceBetween: 10,
        },
    },
});
