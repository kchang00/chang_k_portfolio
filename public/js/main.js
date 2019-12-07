(() => {

    //getting portfolio links to open the lightbox, close icon to close lb
    let portfolioLinks = document.querySelectorAll('.p-link'),
        lightBox = document.querySelector('.lightbox'),
        lightBoxScroll = document.querySelector('.lightbox-scroll-con'),
        indexClass = document.querySelectorAll('[class*="project-index"]'),
        close = lightBox.querySelector('.close'),
        nextProjectBtn = lightBox.querySelector('.project-next-url'),
        previousProjectBtn = lightBox.querySelector('.project-previous-url');

    function closeStop() {
        lightBox.classList.remove('show-lb');
    }

    function scrollTopLightbox() {
        TweenMax.to(lightBoxScroll, 1, {scrollTo:0});
        console.log('scrolled!');
    }

    // makes sure lightbox loads at top every time
    function scrollTopLightbox2() {
        // set value higher than 0
        TweenMax.to(lightBoxScroll, 0.01, {scrollTo:0});
        console.log('scrolled!');
    }

    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // all data for single portfolio page
            // linking to root, then grabbing data attribute, converting to JSON
            var link = e.currentTarget,
                projectRoot = link.parentNode,
                // .project = data-project var in index.php
                // grabbing data associated with data-project attribute
                projectInfo = projectRoot.dataset.project,
                projectObj = JSON.parse(projectInfo),
                // grabbing data associated with data-index attribute
                projectIndex = projectRoot.dataset.index,
                // changes data from a string to an array
                // used to do math later (+(for next) or - 1(for previous) portfolio index)
                projectIndexObj = JSON.parse(projectIndex);

            //looping through all portfolio works with a class containing project-index
            indexClass.forEach(index => {
                // grabbing data from each work containing class
                let indexInfo = index.dataset.project,
                    indexObj = JSON.parse(indexInfo),
                    currentProjectInfo = projectObj,
                    nextProjectIndexObj = projectIndexObj + 1, 
                    previousProjectIndexObj = projectIndexObj - 1;

                    function updateProjectInfo() {
                        lightBox.querySelector('.project-title').innerHTML      = currentProjectInfo['Title'];
                        lightBox.querySelector('.project-subtitle').innerHTML   = currentProjectInfo['Subtitle'];
                        lightBox.querySelector('.project-desc').innerHTML       = currentProjectInfo['Description'];
                        lightBox.querySelector('.project-year').innerHTML       = currentProjectInfo['Year'];
                        lightBox.querySelector('.project-url').href             = currentProjectInfo['ProjectURL'];
                        projectObj = currentProjectInfo;
                        console.log('updated info', currentProjectInfo);
                    }

                    function setProjectInfo() {
                        currentProjectInfo = indexObj;
                        console.log('setting projects', currentProjectInfo);
                    }

                    // grabs single number returned from projectIndexObj
                    if (indexObj['ID'] == projectIndexObj) {
                        // sets project info to corresponding current id
                        setProjectInfo();
                        updateProjectInfo();
                    }else if (indexObj['ID'] == nextProjectIndexObj) {
                        // sets project info to corresponding next id on btn click
                        nextProjectBtn.addEventListener('click', function(e) {
                            console.log('next btn clicked');
                            setProjectInfo();
                            updateProjectInfo();
                            scrollTopLightbox();
                        });
                    }else if (indexObj['ID'] == previousProjectIndexObj) {
                        // sets project info to corresponding previous id
                        previousProjectBtn.addEventListener('click', function(e) {
                            console.log('previous btn clicked');
                            setProjectInfo();
                            updateProjectInfo();
                            scrollTopLightbox();
                        });
                    }
            });

            scrollTopLightbox2();
            lightBox.classList.add('show-lb');
        })
    });

    // portfolioLinks.forEach(link => link.addEventListener('click', showLb));
    close.addEventListener('click', closeStop);

})();