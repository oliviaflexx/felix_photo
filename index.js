// Open/close navigation when clicked .nav-icon
function nav() {
    let icon = document.getElementById('icon')
    let nav = document.getElementById('nav')
    navList = nav.classList
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


    





