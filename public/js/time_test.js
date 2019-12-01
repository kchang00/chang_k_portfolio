(function(){

	var 	d 			= new Date();
	const 	h 			= d.getHours();
			greeting 	= document.querySelector('.js-greeting');

	function swapDate() {
		if (h <= 11) { // before or at 11 o'clock
			greeting.innerHTML = " Good Morning";
		}
		else if (h <= 16) { // before or at 4 o'clock
			greeting.innerHTML = " Good Afternoon";
		}
		else if (h <= 24) { // before or at 12 o'clock
			greeting.innerHTML = " Good Evening";
		}
	}

	swapDate();

})();

// https://www.kirupa.com/animations/creating_scroll_activated_animations.htm