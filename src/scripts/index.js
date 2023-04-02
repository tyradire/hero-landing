document.addEventListener('DOMContentLoaded', () => {

  const dataUrl = 'https://baconipsum.com/api/?type=lucky';

  const heroInput = document.querySelector('.form__input');
  const flags = document.querySelectorAll('.animate-side__flag');
  const description = document.querySelector('.user-side__description');
  const headerMenu = document.querySelector('.header__menu');
  const burgerMenuButton = document.querySelector('.header__button-menu');
  const checkboxMenuButton = document.querySelector('.header__checkbox-menu');

  let windowSize = 0;
  let screenType = 'desktop';

  const setWindowSize = () => {
    windowSize = window.innerWidth
    if (windowSize > 992) {
      screenType = 'desktop';
      burgerMenuButton.style.display = 'none';
    }
    else if (windowSize < 600) {
      screenType = 'mobile';
      burgerMenuButton.style.display = 'block';
    } else if (windowSize < 769) {
      screenType = 'tablet';
      burgerMenuButton.style.display = 'block';
    }
    else {
      screenType = 'laptop';
      burgerMenuButton.style.display = 'none';
    }
  }

  const startAnimation = () => {
    if (windowSize > 600) {
      setTimeout(() => {
        flags.forEach(elem => {
          elem.style.animation = 'testAnimation 20s infinite linear'
          elem.style.opacity = 1
        })
      }, 2600);
    } else return;
  }

  function testFunc(e) {
    const regex = /[!@#$%^&*()]/;
    if (e.key.match(regex)) e.preventDefault();
  }
  heroInput.addEventListener('keypress', (e) => testFunc(e))

  window.addEventListener("resize", setWindowSize);

  const openMobileMenu = () => {
    headerMenu.classList.toggle('header__menu_opened');
  }

  checkboxMenuButton.addEventListener('change', openMobileMenu)
  
  const initialization = () => {
    setWindowSize();
    fetch(dataUrl)
    .then(res => res.json())
    .then(res => description.textContent = res[0]);
    startAnimation();
  }

  initialization();
});