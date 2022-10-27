$(document).ready(function () {
  
  const menuToggle = document.getElementById('menu-toggle');
  const menuMobile = document.getElementById('menu-mobile');
  
  const slidingHeader = document.getElementById('sliding-header');
  const showcase = document.getElementById('showcase');
  const showcase__txt = document.querySelectorAll('.showcase__txt');
  const firstTimeShowing = document.querySelectorAll('.first-time-showing');

  if(!!window.IntersectionObserver) {
    const showcaseObserver = new IntersectionObserver (entries => {
      if(!entries[0].isIntersecting) slidingHeader.classList.add('test')
      else slidingHeader.classList.remove('test');
    }, {
      rootMargin: "-1px"
    });

    showcaseObserver.observe(showcase);
  }

  menuToggle.addEventListener('click', () => {
    menuMobile.classList.toggle('opened');
    console.log(menuMobile);
  })

  // Animação da primeira PALAVRA ao carregar a página
  setTimeout(() => {
    showcase__txt[0].classList.add('start-animation');
  }, '1000');
  
  // Animação dos botões do carrossel ao carregar a página
  setTimeout(() => {
    firstTimeShowing.forEach(elem => {
      elem.classList.remove('first-time-showing');
    });
  }, '1500');

  // Animação das PALAVRAS ao mudar de slide
  showcase.addEventListener('slide.bs.carousel', e => {
    setTimeout(() => {
      showcase__txt[e.to].classList.add('start-animation');
    }, '200');
  });

  showcase.addEventListener('slid.bs.carousel', e => {
    showcase__txt[e.from].classList.remove('start-animation');
  });
});