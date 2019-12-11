(() => {

    //getting portfolio links to open the lightbox, close icon to close lb
    let portfolioLinks = document.querySelectorAll('.p-link'),
        lightBox = document.querySelector('.lightbox'),
        lightBoxScroll = document.querySelector('.lightbox-scroll-con'),
        indexClass = document.querySelectorAll('[class*="project-index"]'),
        close = lightBox.querySelector('.close'),
        projectNavBtns = lightBox.querySelectorAll('.project-nav-button');


    function closeStop() {
        lightBox.classList.remove('show-lb');
    }

    function scrollTopLightbox() {
        TweenMax.to(lightBoxScroll, 1, { scrollTo: 0 });
        console.log('scrolled!');
    }

    // makes sure lightbox loads at top every time
    function scrollTopLightbox2() {
        // set value higher than 0
        TweenMax.to(lightBoxScroll, 0.01, { scrollTo: 0 });
        console.log('scrolled!');
    }

    portfolioLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // all data for single portfolio page
            // linking to root, then grabbing data attribute, converting to JSON
            var link = e.currentTarget,
                projectRoot = link.parentNode,
                // .project = data-project var in index.php
                // grabbing data associated with data-project attribute
                projectInfo = projectRoot.dataset.project,
                projectObj = JSON.parse(projectInfo),
                // grabbing data associated with data-index attribute
                projectIndex = projectRoot.dataset.index;

            updateProjectInfo(projectObj, projectIndex);

            projectNavBtns.forEach(ele => {
                ele.addEventListener('click', function (e) {
                    var currentBtn = e.currentTarget,
                        currentIndex = lightBox.dataset.currentIndex,
                        navDirection = currentBtn.dataset.nav,
                        // setting next and previous btns
                        // shorthand if else statement
                        futureIndex = navDirection === 'next' ? ++currentIndex : --currentIndex,
                        futureIndex = futureIndex > indexClass.length ? 1 : futureIndex,
                        futureIndex = futureIndex < 1 ? indexClass.length : futureIndex,
                        futureProject = document.querySelector('.project-index-' + futureIndex);
                    console.log(currentIndex);
                    console.log(futureIndex);

                    //Verify if the future index exists
                    if (futureProject) {
                        var projectInfo = futureProject.dataset.project,
                            projectObj = JSON.parse(projectInfo),
                            // grabbing data associated with data-index attribute
                            projectIndex = futureProject.dataset.index;

                        console.log(projectObj);
                        console.log(projectIndex);
                        updateProjectInfo(projectObj, projectIndex);
                        scrollTopLightbox();
                    }else{
                        //TODO: what if we don't find it??
                    }
                });
            });

            function updateProjectInfo(currentProjectInfo, projectIndex) {
                lightBox.dataset.currentIndex = projectIndex;
                lightBox.querySelector('.project-title').innerHTML = currentProjectInfo['Title'];
                lightBox.querySelector('.project-subtitle').innerHTML = currentProjectInfo['Subtitle'];
                lightBox.querySelector('.project-desc').innerHTML = currentProjectInfo['Description'];
                lightBox.querySelector('.project-year').innerHTML = currentProjectInfo['Year'];
                lightBox.querySelector('.project-url').href = currentProjectInfo['ProjectURL'];

                // php explode function was not changing values, I tried to do it in JS here
                var separateDeliverables = projectObj['Deliverables'].split(',');
                separateDeliverables.forEach(deliverable => {
                    let deliverablesList = lightBox.querySelector('.project-deliverables');
                    var li = document.createElement('li');
                    var deliverableListItem = deliverablesList.appendChild(li);
                    deliverableListItem.innerHTML = deliverable;
                })

                // var separateImages = projectObj['Imgs'].split(',');
                // separateImages.forEach(img => {
                //     let projectImg = lightBox.querySelector('.project-image');
                //     projectImg.style.background = './public/images/', img;
                // })

                // resetting lightbox info value
                projectObj = currentProjectInfo;
                console.log('updated info', currentProjectInfo);
            }
            scrollTopLightbox2();
            lightBox.classList.add('show-lb');
        })
    });

    // portfolioLinks.forEach(link => link.addEventListener('click', showLb));
    close.addEventListener('click', closeStop);

})();