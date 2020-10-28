(() => {
  let   hamburger		= document.querySelector('.hamburger'),
        mainNav 		= document.querySelector('.main-nav'),
        hamNavCon 	= document.querySelector('.hamburger-nav-con'),
        logo        = document.querySelector('.logo').getElementsByTagName('img')[0],
        heroExists  = document.getElementsByClassName('hero').length,
        mainNavA    = mainNav.getElementsByTagName('a')[0],
        desktopQuery = window.matchMedia('(min-width: 1024px)');
        
  // console.log('nav working');
  function logoHamColour(){
      var pageScroll = window.pageYOffset;
          pageHeight = window.screen.height * 0.75;
      // if hamburger nav is expanded, logo and hamburger should be full colour regardless of scrolling position
      // if hero does not exist (meaning it's not the home page), keep logo and hamburger full colour
    if (hamNavCon.classList.contains('slide-toggle') || pageScroll > pageHeight || !heroExists){
      // controls nav links on desktop
      mainNav.classList.add('scroll-menu');
      logo.src = "public/images/logo_colour.svg";
      logo.classList.add('logo-bg');
      hamburger.classList.add('hamburger-bg');
      hamburger.classList.add('hamburger-scroll-menu');
    }else{
      mainNav.classList.remove("scroll-menu");
      logo.src = "public/images/logo.svg";
      logo.classList.remove('logo-bg');
      hamburger.classList.remove('hamburger-bg');
      hamburger.classList.remove('hamburger-scroll-menu');
    }
  }

  function hamburgerMenuClose(){
    mainNav.classList.remove('slide-toggle');
    hamNavCon.classList.remove('slide-toggle');
  }

  function hamburgerMenu() {
      // controls hamburger animation
      if (hamburger.classList.contains('is-active') === true){
          hamburger.classList.remove("is-active");
      }else{
          hamburger.classList.add("is-active");
      }
      // shows hamburger menu
      mainNav.classList.toggle('slide-toggle');
      hamNavCon.classList.toggle('slide-toggle');
      // changes colours
      logoHamColour();
  }

  // closes menu at desktop at other sizes
  // but not at homepage, v strange
  desktopQuery.onchange = function(e) {
    if (e.matches) {
      hamburger.classList.remove("is-active");
      hamburgerMenuClose();
      logoHamColour();
    }
  };

  // on homepage, porfolio link href is changed so page doesn't reload
  // if portfolio link is clicked on homepage, closes hamburger menu
  if (heroExists){
    mainNavA.href = '#portfolio-lightbox-con';
    desktopQuery.onchange = function(e) {
      console.log('changed');
      if (!e.matches) {
        // as soon as the page is smaller than 1024, desktop nav breaks
        console.log('smaller');
        mainNavA.addEventListener('click', hamburgerMenu);
      }else{
        console.log('bigger');
      }
    };
    if (desktopQuery.matches){
      console.log('start big');
    }else{
      // smaller than 1024
      // no matter what, if the page is smaller than 1024 the first time, gonna trigger 
      console.log('start small');
      mainNavA.addEventListener('click', hamburgerMenu);
    }
  }else{
    mainNavA.href = 'index.php#portfolio-lightbox-con';
  }
  
  window.addEventListener('DOMContentLoaded', logoHamColour);
  window.addEventListener('scroll', logoHamColour);
  hamburger.addEventListener('click', hamburgerMenu);

})();