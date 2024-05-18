/* eslint-disable no-new */
const sliders = document.querySelectorAll('.products__list');
const buttonsNext = document.querySelectorAll('.products__button--next');
const buttonsPrev = document.querySelectorAll('.products__button--prev');

const initsSliderProducts = () => {
  sliders.forEach((slider, index) => {
    const buttonNext = buttonsNext[index];
    const buttonPrev = buttonsPrev[index];

    if (slider) {
      // eslint-disable-next-line no-undef
      new Swiper(slider, {
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
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initsSliderProducts();
});

export {initsSliderProducts};
