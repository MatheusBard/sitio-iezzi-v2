$(document).ready(function () {

  const slidingHeader = document.getElementById('sliding-header');
  const showcase = document.getElementById('showcase');
  const showcase__txt = document.querySelectorAll('.showcase__txt');
  const firstTimeShowing = document.querySelectorAll('.first-time-showing');

  if(!!window.IntersectionObserver) {
    const showcaseObserver = new IntersectionObserver (entries => {
      if(!entries[0].isIntersecting) slidingHeader.classList.add('show')
      else slidingHeader.classList.remove('show');
    }, {
      rootMargin: "-1px"
    });

    showcaseObserver.observe(showcase);
  }  

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


  $('img[data-enlarge]').click(function() {
    let src = $(this).attr('src');
    let modal;
  
    function removeModal() {
      modal.remove();
      $('body').off('keyup.modal-close');
    }
    modal = $('<div>').css({
      backgroundColor: 'rgba(0,0,0,.75)',
      backgroundImage: 'url("' + src + '")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: '10000',
      top: '0',
      left: '0',
      cursor: 'zoom-out'
    }).click(function() {
      console.log(src);
      removeModal();
    }).appendTo('body');
    
    //handling ESC
    $('body').on('keyup.modal-close', function(e) {
      if (e.key === 'Escape') {
        removeModal();
      }
    });
  });
});