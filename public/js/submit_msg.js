(() => {
    let submitPopup      = document.querySelector('#submit-msg'),
        lightBox         = submitPopup.querySelector('.lightbox'),
        close            = lightBox.querySelector('.close');
    
        function closePopup() {
            submitPopup.classList.add('hidden');
        }

    // code from: https://uxdesign.cc/how-to-trap-focus-inside-modal-to-make-it-ada-compliant-6a50f9a70700
    // add all the elements inside modal which you want to make focusable
    const   focusableElements     = 'button, input, select, textarea, [tabindex]:not([tabindex="-1"]), #submit-close-btn',
            modal                 = lightBox,
            firstFocusableElement = modal.querySelectorAll(focusableElements)[0], // get first element to be focused inside modal
            focusableContent      = modal.querySelectorAll(focusableElements),
            lastFocusableElement  = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

    document.addEventListener('keydown', function(e) {
        let isTabPressed = e.key === 'Tab' || e.keyCode === 9;

        if (!isTabPressed) {
            return;
        }

        if (e.shiftKey) { // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus(); // add focus for the last focusable element
                e.preventDefault();
            }
        } else { // if tab key is pressed
            if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                firstFocusableElement.focus(); // add focus for the first focusable element
                e.preventDefault();
            }
        }  
    });

    firstFocusableElement.focus();

    function accessibleClick(event){
        if(event.type === 'click'){
            return true;
        }
        else if(event.type === 'keypress'){
            var code = event.charCode || event.keyCode;
            if((code === 32)|| (code === 13)){
                return true;
            }
        }
        else{
            return false;
        }
    }

    close.addEventListener('keypress', function(e) {
        if(accessibleClick(e) === true){
            close.click();
        }
    });
    
    close.addEventListener('click', closePopup);

})();