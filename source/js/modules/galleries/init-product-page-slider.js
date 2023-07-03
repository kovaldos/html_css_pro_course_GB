/* eslint-disable no-undef */
/* eslint-disable no-new */
export const initProductPageSlider = () => {
  const productPageSlider = document.querySelector('.product-hero__slider');

  new Swiper(productPageSlider, {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
