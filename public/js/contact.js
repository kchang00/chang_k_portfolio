(() => {

let form             = document.querySelector('#contact-form'),
    submitPopup      = document.querySelector('#submit-msg'),
    lightBox         = submitPopup.querySelector('.lightbox'),
    close            = lightBox.querySelector('.close'),
    submitBtn        = form.querySelector('.btn-large');

    function closePopup() {
        submitPopup.classList.add('hidden');
    }

    function showLightbox()  {
        lightBox.classList.add('show-lb');
    }

    close.addEventListener('click', closePopup);
    submitBtn.addEventListener('click', showLightbox);
})();