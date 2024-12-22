const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.news__control--next',
    prevEl: '.news__control--prev',
  },
  pagination: {
    el: '.news__dots',
  },
  breakpoints: {
    // // when window width is >= 788px
    788: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 1250px
    1250: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  }
};

const swiper = new Swiper('.swiper', swiperParams);