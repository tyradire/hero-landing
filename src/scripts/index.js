document.addEventListener('DOMContentLoaded', () => {

  const dataUrl = 'https://baconipsum.com/api/?type=lucky';

  const heroInput = document.querySelector('.form__input');
  const flags = document.querySelectorAll('.animate-side__flag');
  const description = document.querySelector('.user-side__description');

  setTimeout(() => {
    flags.forEach(elem => {
      elem.style.animation = 'testAnimation 20s infinite linear'
      elem.style.opacity = 1
    })
  }, 2600);

  function testFunc(e) {
    const regex = /[!@#$%^&*()]/;
    if (e.key.match(regex)) e.preventDefault();
  }
  heroInput.addEventListener('keypress', (e) => testFunc(e))

  fetch(dataUrl)
    .then(res => res.json())
    .then(res => description.textContent = res[0])
});