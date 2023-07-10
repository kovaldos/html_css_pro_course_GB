/* eslint-disable no-undef */

export const initProductPageSlider = () => {
  let productHeroSliderText = document.querySelector('.product-hero__slider-text');
  if (productHeroSliderText) {
    productHeroSliderText = new Swiper(productHeroSliderText, {
      watchOverflow: true,
      enabled: false,
      autoHeight: true,
      effect: 'fade',
    });
  }
  let productHeroSlider = document.querySelector('.product-hero__slider');
  if (productHeroSlider) {
    productHeroSlider = new Swiper(productHeroSlider, {
      watchOverflow: true,
      loop: false,
      speed: 800,
      controller: {
        control: productHeroSliderText,
      },
      navigation: {
        nextEl: '.product-hero__btn--next',
        prevEl: '.product-hero__btn--prev',
      },
    });
  }
};
