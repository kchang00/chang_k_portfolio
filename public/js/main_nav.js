(() => {
    let 	hamburger			= document.querySelector('.hamburger'),
            mainNav 			= document.querySelector('.main-nav');
            hamNavCon 			= document.querySelector('.hamburger-nav-con');

    console.log("hamburger working");

	function hamburgerMenu() {
        mainNav.classList.toggle('slide-toggle');
        hamNavCon.classList.toggle('slide-toggle');
        // hamburger.classList.toggle('expanded');
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
    
    hamburger.addEventListener('click', hamburgerMenu);

})();