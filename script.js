$(document).ready(function () {
  const showcase = document.getElementById('showcase');
  const showcase__txt = document.querySelectorAll('.showcase__txt');

  showcase__txt[0].classList.add('start-animation');
  showcase__txt[0].classList.remove('placeholder');

  showcase.addEventListener('slide.bs.carousel', e => {
    showcase__txt[e.from].classList.remove('start-animation');
  });

  showcase.addEventListener('slid.bs.carousel', e => {
    showcase__txt[e.to].classList.add('start-animation');
  });
});