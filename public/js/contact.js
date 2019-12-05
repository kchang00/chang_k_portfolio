(() => {

let form = document.querySelector('#contact-form'),
    submitPopup = document.querySelector('#submit-msg'),
    lightBox = submitPopup.querySelector('.lightbox');

// form.onsubmit = function () {
//     lightBox.classList.add('show-lb');
// }

function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    lightBox.classList.add('show-lb');
    /* do what you want with the form */

    // You must return false to prevent the default form behavior
    return false;
}

if (form.attachEvent) {
    form.attachEvent("submit", processForm);
} else {
    form.addEventListener("submit", processForm);
}

})();