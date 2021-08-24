// Open/close navigation when clicked .nav-icon
function nav() {
    let icon = document.getElementById('icon')
    let nav = document.getElementById('nav')
    let navList = nav.classList
    if (navList.contains('active')) {
        icon.classList.remove('rotate_animation');
        nav.classList.remove('active');
    } else {
        icon.classList.add('rotate_animation');
        nav.classList.add('active');
    }
}

// Intersection observer //

window.addEventListener("load", (event) => {
    const places = document.querySelectorAll('.fade-in');

    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('appear');
            }
        });
    });

    places.forEach(image => {
    observer.observe(image);
    });
})


// Fullscreen photo
try {
    var photoElements = document.getElementsByClassName("photo");

    for (var i = 0; i < photoElements.length; i++) {
        photoElements[i].addEventListener('click', fillIt, false);
    }

    function fillIt() {
        let chosenSrc = this.getElementsByTagName('img')[0].src;
        let fullIt = document.getElementById('fullscreen');
        let fullImage = fullIt.getElementsByTagName('img')[0];
        fullIt.classList.add('active');
        fullImage.src = chosenSrc;
    }

    document.getElementById('fullscreen').getElementsByTagName('img')[0].addEventListener("click", unfillIt);

    function unfillIt() {
        document.getElementById('fullscreen').classList.remove('active');
    }

} catch (error) {
    console.error()
}



// check if its a mobile device to change video to photo
function checkMatch(x) {
    if (x.matches) { // If media query matches
        backVidCon = document.getElementsByClassName("video-container")[0]
        backVid = backVidCon.getElementsByTagName('video')[0].remove();
        backVidCon.innerHTML += "<img id='mobile' src='/photos/st_lucia/st_lucia17.jpg'></img>";
    }
  }
  
  var x = window.matchMedia("(max-width: 480px)")
  checkMatch(x)

