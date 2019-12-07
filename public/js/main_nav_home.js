(() => {
    let 	hamburger			= document.querySelector('.hamburger'),
          mainNav 			= document.querySelector('.main-nav');
          hamNavCon 		= document.querySelector('.hamburger-nav-con');
          mainNavCon    = document.querySelector('.main-nav-con');
          logo          = document.querySelector('.logo').getElementsByTagName('img')[0];
          mainNavA      = document.querySelector('.main-nav').getElementsByTagName('a')[0];

    // console.log("hamburger working");

	function hamburgerMenu() {
        mainNav.classList.toggle('slide-toggle');
        hamNavCon.classList.toggle('slide-toggle');
        // hamburger.classList.toggle('expanded');
        if (hamNavCon.classList.contains('slide-toggle')) {
          logo.src = "public/images/logo_colour.svg";
          logo.classList.add('logo-bg');
        } 
        else {
          logo.src = "public/images/logo.svg";
          logo.classList.remove('logo-bg');
        }
    }

  function closeMenu() {
    console.log('close menu function firing');
    mainNav.classList.remove('slide-toggle');
    hamNavCon.classList.remove('slide-toggle');
    hamburger.classList.remove('is-active');
  }

    // code from: https://codepen.io/alisonhall/pres/GJVEpO
    var toggles = document.querySelectorAll(".c-hamburger");
  
    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };
  
    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }

    window.onscroll = function(){
      var pageScroll = window.pageYOffset;
      pageHeight = window.screen.height * 0.75;
  
      if (pageScroll > pageHeight) {
        mainNav.classList.add("scroll-menu");
        logo.src = "public/images/logo_colour.svg";
        logo.classList.add('logo-bg');
        hamburger.classList.add('hamburger-bg');
        hamburger.classList.add("hamburger-scroll-menu");
        }
        else {
        mainNav.classList.remove("scroll-menu");
        logo.src = "public/images/logo.svg";
        logo.classList.remove('logo-bg');
        hamburger.classList.remove('hamburger-bg');
        hamburger.classList.remove("hamburger-scroll-menu");
        }
      }
    
    
    hamburger.addEventListener('click', hamburgerMenu);
    mainNavA.addEventListener('click', closeMenu);


})();