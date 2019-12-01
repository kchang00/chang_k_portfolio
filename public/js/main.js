// this is a partially revealing module pattern - just a variation on what we've already done

const myVM = (() => {
    // get the user buttons and fire off an async DB query with Fetch

    let userButtons = document.querySelectorAll('.u-link'),
        lightBox = document.querySelector('.lightbox');
        // iframe = lightBox.querySelector('iframe');

    
    //create the tools list
    function renderTools(tools) {
        return `<ul class="u-social">
                    ${tools.map(item => `<li>${item}</li>`).join('')}
                </ul>
                `
    }

    // var work is not dependent on var as defined in home.hbs or index.js
    function parseUserData(work) {
        let targetDiv = lightBox.querySelector('.lb-desc');
        let targetImg = lightBox.querySelector('img');
        // let targetTitle = lightBox.querySelector('h3');
        let targetVideo = lightBox.querySelector('iframe');

        let workContent =  `

            <div class="pwork-con">
                <div class="pwork-desc">
                    <h3>${work.Title}</h3>
                    
                    <h4>What is It?</h4>
                    <p>${work.Description}</p>
                </div>

                <div class="pwork-sidebar">
                    <h4>Earliest Version</h4>
                    <p>${work.First}</p>

                    <h4>Tools Used</h4>
                    <!-- loop through tools here -->
                    ${renderTools(work.Tools)}
                </div>
            </div>

            <div class="video-con">
                <div class='embed-container'>
                    <iframe src='${work.URL}' frameborder='0' allowfullscreen></iframe>
                </div>
            </div>
        `;

        targetDiv.innerHTML = workContent;
        targetImg.src = work.currentSrc;
        targetVideo.src = work.URL;
        // targetTitle.innerHTML = work.currentH3;

        lightBox.classList.add('show-lb');

    }

    function getUserData(event) {
        // preventing browser from calling up new url, it doesn't exist
        event.preventDefault();
        // debugger;
        // href= 1, 2, 3 depending on which anchor tag you click
        let url = `/work/${this.getAttribute('href')}`;
        let currentImg = this.previousElementSibling.getAttribute('src');
        // let currentTitle = this.previousElementSibling.getAttribute('src');

        //called a promise
        //fetches database content (or an API endpoint)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // take the existing img src from the layout (work) and use it in lightbox
                data.currentSrc = currentImg;
                // data.currentH3 = currentTitle;
                parseUserData(data);
            })
            .catch((err) => console.log(err));
    }

    // function stopVideo() {
    //     var iframe = document.querySelector('iframe');
    //     iframe.currentTime = 0;
    //     iframe.pause();
    // }

    userButtons.forEach(button => button.addEventListener('click', getUserData));
    // make the lightbox close btn work

    let close = lightBox.querySelector('.close');
    // let iframe = lightBox.querySelector('iframe');
    

    function closeStop() {
        // iframe.currentTime = 0;
        // iframe.pause();
        lightBox.classList.remove('show-lb');
    }

    close.addEventListener('click', closeStop);

    // lightBox.querySelector('.close').addEventListener('click', function() {
    //     lightBox.classList.remove('show-lb');
    // });
    

})();