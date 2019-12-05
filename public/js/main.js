(() => {

    //getting portfolio links to open the lightbox, close icon to close lb
    let portfolioLinks = document.querySelectorAll('.p-link'),
        lightBox = document.querySelector('.lightbox'),
        close = lightBox.querySelector('.close');

    function closeStop() {
        lightBox.classList.remove('show-lb');
    }

    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // all data for single portfolio page
            // linking to root, then grabbing data attribute, converting to JSON
            var link = e.currentTarget,
                projectRoot = link.parentNode,
                // .project = data-project var in index.html
                projectInfo = projectRoot.dataset.project,
                projectObj = JSON.parse(projectInfo);

                console.log(projectRoot.dataset.nextproject);

                // next and previous project data (for links on portfolio page)
                // projectNext = projectRoot.nextElementSibling,
                // projectPrevious = projectRoot.previousElementSibling,
                // projectNextInfo = projectNext.dataset.project,
                // projectPreviousInfo = projectPrevious.dataset.project,
                // projectNextObj = JSON.parse(projectNextInfo),
                // projectPreviousObj = JSON.parse(projectPreviousInfo);

            lightBox.querySelector('.project-title').innerHTML      = projectObj['Title'];
            lightBox.querySelector('.project-subtitle').innerHTML   = projectObj['Subtitle'];
            lightBox.querySelector('.project-desc').innerHTML       = projectObj['Description'];
            lightBox.querySelector('.project-year').innerHTML       = projectObj['Year'];
            lightBox.querySelector('.project-url').href             = projectObj['ProjectURL'];

            //previous project values
            // lightBox.querySelector('.project-previous-title').innerHTML   = projectPreviousObj['Title'];
            // lightBox.querySelector('.project-previous-url').href   = projectPreviousObj['ID'];
            // // next project values
            // lightBox.querySelector('.project-next-title').innerHTML   = projectNextObj['Title'];
            // lightBox.querySelector('.project-next-url').href   = projectNextObj['ID'];

            // if(projectPreviousObj['Title'] != null) {
            //     return;
            // } else {
            //     lightBox.querySelector('.project-previous-title').innerHTML   = projectPreviousObj['Title'];
            // }

            // if(projectNextObj['Title'] != null) {
            //     return;
            // } else {
            //     lightBox.querySelector('.project-next-title').innerHTML   = projectNextObj['Title'];
            // }

            // console.log(projectPreviousObj['Title']);
            // console.log(projectNextObj['Title']);

            lightBox.classList.add('show-lb');
        })
    });

    // portfolioLinks.forEach(link => link.addEventListener('click', showLb));
    close.addEventListener('click', closeStop);

})();