export const toggleBurgerMenu = () => {
  const burgerButton = document.querySelector('[data-burger-btn]');
  const burgerOverlay = document.querySelector('[data-burger-overlay]');
  const burgerBody = document.querySelector('[data-burger-body]');

  if (burgerButton && burgerOverlay && burgerBody) {

    burgerButton.addEventListener('click', () => {
      burgerOverlay.classList.toggle('main-nav__overlay--is-active');
      burgerBody.classList.toggle('main-nav__wrapper--is-active');
      document.body.classList.add('scroll-lock');
    });

    const closeButton = document.querySelector('.main-nav__close');
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        burgerOverlay.classList.remove('main-nav__overlay--is-active');
        burgerBody.classList.remove('main-nav__wrapper--is-active');
        document.body.classList.remove('scroll-lock');
      });
    }
    burgerOverlay.addEventListener('click', (event) => {
      if (event.target === burgerOverlay) {
        burgerOverlay.classList.remove('main-nav__overlay--is-active');
        burgerBody.classList.remove('main-nav__wrapper--is-active');
        document.body.classList.remove('scroll-lock');
      }
    });
  }
};
