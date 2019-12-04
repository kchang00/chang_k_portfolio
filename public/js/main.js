(() => {

    //getting portfolio links to open the lightbox, close icon to close lb
    let portfolioLinks = document.querySelectorAll('.u-link'),
        lightBox = document.querySelector('.lightbox'),
        close = lightBox.querySelector('.close');

    function showLb() {
        lightBox.classList.add('show-lb');
    }

    function closeStop() {
        lightBox.classList.remove('show-lb');
    }

    portfolioLinks.forEach(link => link.addEventListener('click', showLb));
    close.addEventListener('click', closeStop);

})();