$(document).ready(function () {
  const showcase = document.getElementById('showcase');
  const showcase__txt = document.querySelectorAll('.showcase__txt');
  const firstTimeShowing = document.querySelectorAll('.first-time-showing');

  setTimeout(() => {
    showcase__txt[0].classList.add('start-animation');
  }, '1000');
  
  setTimeout(() => {
    firstTimeShowing.forEach(elem => {
      elem.classList.remove('first-time-showing');
    });
  }, '1500');

  showcase.addEventListener('slide.bs.carousel', e => {
    setTimeout(() => {
      showcase__txt[e.to].classList.add('start-animation');
    }, '200');
  });

  showcase.addEventListener('slid.bs.carousel', e => {
    showcase__txt[e.from].classList.remove('start-animation');
  });
});