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

  function hamburgerAnimation(){
    if (hamburger.classList.contains('is-active') === true){
      hamburger.classList.remove("is-active");
    }else{
      hamburger.classList.add("is-active");
    }
  }

  function hamburgerMenuToggle() {
    hamburgerAnimation();
    // shows hamburger menu
    mainNav.classList.toggle('slide-toggle');
    hamNavCon.classList.toggle('slide-toggle');
    // changes colours
    logoHamColour();
  }

  function hamburgerMenuClose(){
    hamburger.classList.remove("is-active");
    mainNav.classList.remove('slide-toggle');
    hamNavCon.classList.remove('slide-toggle');
    logoHamColour();
  }

  // closes menu if user resizes browser window (changes to desktop)
  desktopQuery.onchange = function(e) {
    if (e.matches) {
      hamburgerMenuClose();
    }
  };

  // on homepage, porfolio link href is changed so page doesn't reload
  // if portfolio link is clicked on homepage, closes hamburger menu
  if (heroExists){
    mainNavA.href = '#portfolio-lightbox-con';
    mainNavA.addEventListener('click', hamburgerMenuClose);
  }else{
    mainNavA.href = 'index.php#portfolio-lightbox-con';
  }
  
  window.addEventListener('DOMContentLoaded', logoHamColour);
  window.addEventListener('scroll', logoHamColour);
  hamburger.addEventListener('click', hamburgerMenuToggle);

})();