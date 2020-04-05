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
        videosSection = lightBox.querySelector('.project-videos'),
        processSection = lightBox.querySelector('.project-process');


    function closeStop() {
        lightBox.classList.remove('show-lb');
        videosSection.innerHTML = '';
    }

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

    document.addEventListener('DOMContentLoaded', function() {
        // code by Maximillian Laumeister: https://www.maxlaumeister.com/articles/hide-related-videos-in-youtube-embeds/
        if (window.hideYTActivated) return;
        let onYouTubeIframeAPIReadyCallbacks=[];
        for (let playerWrap of document.querySelectorAll(".hytPlayerWrap")) {
            let playerFrame=playerWrap.querySelector("iframe");
            let tag=document.createElement('script');
            tag.src="https://www.youtube.com/iframe_api";
            let firstScriptTag=document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            let onPlayerStateChange=function(event) {
                if (event.data==YT.PlayerState.ENDED){playerWrap.classList.add("ended");
            }else if (event.data==YT.PlayerState.PAUSED){
                playerWrap.classList.add("paused");
            }else if (event.data==YT.PlayerState.PLAYING){
                playerWrap.classList.remove("ended"); 
                playerWrap.classList.remove("paused");}
            };
            
            let player;
            onYouTubeIframeAPIReadyCallbacks.push(function() { 
                player=new YT.Player(playerFrame,{events:{'onStateChange': onPlayerStateChange}});
            }); 
            
            playerWrap.addEventListener("click", function(){
                let playerState=player.getPlayerState();
                if (playerState==YT.PlayerState.ENDED){
                    player.seekTo(0);
                }else if (playerState==YT.PlayerState.PAUSED){
                    player.playVideo();}
            });
        }
        
        window.onYouTubeIframeAPIReady=function(){
            for (let callback of onYouTubeIframeAPIReadyCallbacks){callback();}
        }; 

        window.hideYTActivated=true;
    });

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
                processSection.innerHTML = '';
            }

            function updateProjectInfo(currentProjectInfo, projectIndex) {
                lightBox.dataset.currentIndex = projectIndex;

                // TESTING AREA BEGIN

                // AJAX ATTEMPT 2

                // request = new XMLHttpRequest();
                // request.open('POST', 'index.php', true);
                // request.setRequestHeader('Content-type', 'application/json');
                // request.send(projectIndex);
                // console.log(projectIndex);

                // AJAX ATTEMPT 1
                // function ajax(file, params, callback) {

                //     // creating index.php url
                //     var url = file + '?' + params;
                    
                //     // loop through object and assemble the url
                //     // var notFirst = false;
                //     // for (var key in params) {
                //     //     if (params.hasOwnProperty(key)) {
                //     //     url += (notFirst ? '&' : '') + key + "=" + params[key];
                //     //     }
                //     //     notFirst = true;
                //     // }
                    
                //     // create a AJAX call with url as parameter
                //     var xmlhttp = new XMLHttpRequest();
                //     xmlhttp.onreadystatechange = function() {
                //         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //         callback(xmlhttp.responseText);
                //         }
                //     };
                //     xmlhttp.open('GET', url, true);
                //     xmlhttp.send();
                // }
                
                // ajax('index.php', projectIndexObj, function(response) {
                //     // add here the code to be executed when data comes back to this page      
                //     // for example console.log(response) will show the AJAX response in console
                //     console.log(response);
                // });

                // TESTING AREA END

                // separate columns with multiple comma separated values
                var separateDeliverables = currentProjectInfo['Deliverables'].split(','),
                    separateTeam = currentProjectInfo['Team'].split(','),
                    separateImages = currentProjectInfo['Imgs'].split(','),
                    separateVideos = currentProjectInfo['Video'].split(','),
                    separateImagesProcess = currentProjectInfo['ProcessImgs'].split(','),
                    separateStripImages = separateImages.map(str => str.replace(/\s/g, '')),
                    separateStripVideos = separateVideos.map(str => str.replace(/\s/g, '')),
                    separateStripImagesProcess = separateImagesProcess.map(str => str.replace(/\s/g, ''));

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
                        div.classList.add('hytPlayerWrap');
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

                if (currentProjectInfo['ProcessTitle']) {
                    var section = document.createElement('section');
                    var section2 = document.createElement('section');
                    var div = document.createElement('div');
                    var div2 = document.createElement('div');
                    var h2 = document.createElement('h2');
                    var h22 = document.createElement('h2');
                    var h3 = document.createElement('h3');
                    var p = document.createElement('p');

                    section.classList.add('pwork-process-con');
                    section2.classList.add('pwork-process-visuals');
                    processSection.appendChild(section);
                    processSection.appendChild(section2);
                    section.appendChild(div);
                        div.appendChild(h2);
                            h2.innerHTML = currentProjectInfo['ProcessTitle'];
                        div.appendChild(h3);
                            h3.innerHTML = currentProjectInfo['ProcessSubtitle'];
                    section.appendChild(p);
                            p.innerHTML = currentProjectInfo['ProcessDescription'];
                    section2.appendChild(h22);
                        h22.classList.add('hidden');
                        h22.innerHTML = 'Process Visuals';

                    separateStripImagesProcess.forEach(img => {
                        var created_img = document.createElement('img');
                        created_img.src="/public/images/" + img;
                        created_img.alt="Process Image";
                        section2.appendChild(created_img);
                    })

                }else{
                    processSection.innerHTML = '';
                }

                // // set up next image
                // lightBox.querySelector('.project-next-url').style.backgroundImage = "url('./public/images/" + separateStripImages[0] + "')";

                // resetting lightbox info value
                projectObj = currentProjectInfo;

                // window.location.href = "index.php?portfolio=" + projectIndex;
            }
            scrollTopLightbox2();
            lightBox.classList.add('show-lb');
        })
    });

    // portfolioLinks.forEach(link => link.addEventListener('click', showLb));
    portfolioLinks.forEach(link => link.addEventListener('keypress', function(e) {
        if(accessibleClick(event) === true){
            link.click();
        }
      }));

    close.addEventListener('click', closeStop);

})();