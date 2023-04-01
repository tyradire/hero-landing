document.addEventListener('DOMContentLoaded', () => {
  console.log('Скрипт загружен')
  const flags = document.querySelectorAll('.animate-side__flag');
  console.log(flags);
  setTimeout(() => {
    flags.forEach(elem => {
      elem.style.animation = 'testAnimation 20s infinite linear'
      elem.style.opacity = 1
    })
  }, 2600);
});