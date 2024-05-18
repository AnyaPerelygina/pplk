/* eslint-disable no-new */
const sliderEmployees = document.querySelector('.employees__wrapper');
const buttonNext = document.querySelector('.employees__button--next');
const buttonPrev = document.querySelector('.employees__button--prev');

const initsSliderEmployees = () => {
  if (sliderEmployees) {
    // eslint-disable-next-line no-undef
    new Swiper(sliderEmployees, {
      navigation: {
        nextEl: buttonNext,
        prevEl: buttonPrev,
      },
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initsSliderEmployees();
  });
};

export {initsSliderEmployees};
