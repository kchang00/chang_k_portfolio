(() => {

    //getting portfolio links to open the lightbox, close icon to close lb
    let portfolioLinks = document.querySelectorAll('.p-link'),
        lightBox = document.querySelector('.lightbox'),
        lightBoxScroll = document.querySelector('.lightbox-scroll-con'),
        indexClass = document.querySelectorAll('[class*="project-index"]'),
        close = lightBox.querySelector('.close'),
        projectNavBtns = lightBox.querySelectorAll('.project-nav-button'), 
        deliverablesList = lightBox.querySelector('.project-deliverables'),
        teamList = lightBox.querySelector('.project-team'),
        imagesSection = lightBox.querySelector('.project-images'),
        lightBoxDesc = lightBox.querySelector('.lb-desc'),
        videosSection = lightBox.querySelector('.project-videos');


    function closeStop() {
        lightBox.classList.remove('show-lb');
        videosSection.innerHTML = '';
    }

    function scrollTopLightbox() {
        TweenMax.to(lightBoxScroll, 1, { scrollTo: 0 });
        lightBoxDesc.style.opacity = '0';
        setTimeout(function() { 
            lightBoxDesc.classList.remove('fade-in');
            void lightBoxDesc.offsetWidth;
            lightBoxDesc.classList.add('fade-in');
            lightBoxDesc.style.opacity = '1';
        }, 950);
    }

    // makes sure lightbox loads at top every time
    function scrollTopLightbox2() {
        // set value higher than 0
        TweenMax.to(lightBoxScroll, 0.01, { scrollTo: 0 });
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

            clearInfo();
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

                    //Verify if the future index exists
                    if (futureProject) {
                        var projectInfo = futureProject.dataset.project,
                            projectObj = JSON.parse(projectInfo),
                            // grabbing data associated with data-index attribute
                            projectIndex = futureProject.dataset.index;

                        clearInfo();
                        updateProjectInfo(projectObj, projectIndex);
                        scrollTopLightbox();
                    }else{
                        //TODO: what if we don't find it??
                    }
                });
            });

            function clearInfo() {
                deliverablesList.innerHTML = '';
                teamList.innerHTML = '';
                imagesSection.innerHTML = '';
                videosSection.innerHTML = '';
            }

            function updateProjectInfo(currentProjectInfo, projectIndex) {
                lightBox.dataset.currentIndex = projectIndex;
                // separate columns with multiple comma separated values
                var separateDeliverables = currentProjectInfo['Deliverables'].split(','),
                    separateTeam = currentProjectInfo['Team'].split(','),
                    separateImages = currentProjectInfo['Imgs'].split(','),
                    separateVideos = currentProjectInfo['Video'].split(','),
                    separateStripImages = separateImages.map(str => str.replace(/\s/g, '')),
                    separateStripVideos = separateVideos.map(str => str.replace(/\s/g, ''));

                separateDeliverables.forEach(deliverable => {
                    var li = document.createElement('li');
                    var deliverableListItem = deliverablesList.appendChild(li);
                    deliverableListItem.innerHTML = deliverable;
                })

                separateTeam.forEach(team => {
                    var li = document.createElement('li');
                    var teamListItem = teamList.appendChild(li);
                    teamListItem.innerHTML = team;
                })

                separateStripImages.forEach(img => {
                    var div = document.createElement('div');
                    div.classList.add('pwork-img');
                    div.style.backgroundImage = "url('./public/images/" + img + "')";
                    imagesSection.appendChild(div);
                })

                separateStripVideos.forEach(video => {

                    if (video) {
                        var div = document.createElement('div');
                        var iframe = document.createElement('iframe');
                        div.classList.add('embed-container');
                        iframe.innerHTML = '';
                        iframe.src = video;
                        videosSection.appendChild(div);
                        div.appendChild(iframe);
                    }else {
                        videosSection.innerHTML = '';
                    }
                })

                lightBox.querySelector('.project-title').innerHTML = currentProjectInfo['Title'];
                lightBox.querySelector('.project-subtitle').innerHTML = currentProjectInfo['Subtitle'];
                lightBox.querySelector('.project-desc').innerHTML = currentProjectInfo['Description'];
                lightBox.querySelector('.project-year').innerHTML = currentProjectInfo['Year'];
                lightBox.querySelector('.project-url').href = currentProjectInfo['ProjectURL'];
                lightBox.querySelector('.project-url').href = currentProjectInfo['ProjectURL'];
                // set up next image
                // lightBox.querySelector('.project-next-url').style.backgroundImage = "url('./public/images/" + separateStripImages[0] + "')";

                // resetting lightbox info value
                projectObj = currentProjectInfo;
            }

            scrollTopLightbox2();
            lightBox.classList.add('show-lb');
        })
    });

    // portfolioLinks.forEach(link => link.addEventListener('click', showLb));
    close.addEventListener('click', closeStop);

})();