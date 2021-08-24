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
/* $(window).on( "load", function() { 
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
}) */

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



document.getElementsByClassName('photo')[0].addEventListener("click", fillIt);

function fillIt() {
    let chosenSrc = this.getElementsByTagName('img')[0].src;
    let fullIt = document.getElementById('fullscreen');
    let fullImage = fullIt.getElementsByTagName('img')[0];
    console.log(fullImage.src);
    fullIt.classList.add('active');
    fullImage.src = chosenSrc;
}

document.getElementById('fullscreen').getElementsByTagName('img')[0].addEventListener("click", unfillIt);

function unfillIt() {
    document.getElementById('fullscreen').classList.remove('active');
}