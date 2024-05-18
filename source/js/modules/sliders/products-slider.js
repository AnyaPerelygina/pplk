/* eslint-disable no-new */
const sliderProducts = document.querySelector('.products__list');
const buttonNext = document.querySelector('.products__button--next');
const buttonPrev = document.querySelector('.products__button--prev');

const initsSliderProducts = () => {
  if (sliderProducts) {
    // eslint-disable-next-line no-undef
    new Swiper(sliderProducts, {
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
      pagination: {
        el: '.products__pagination',
        type: 'bullets',
        centeredSlides: true,
        slidesPerView: 1,
        clickable: true,
      },
      loop: true,
      speed: 500,
      spaceBetween: 20,
      slidesPerView: 1,
      allowTouchMove: true,
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initsSliderProducts();
  });
};

export {initsSliderProducts};
