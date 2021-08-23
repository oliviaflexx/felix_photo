// Open/close navigation when clicked .nav-icon
function nav() {
    let icon = document.getElementById('icon')
    let nav = document.getElementById('nav')
    nav_list = nav.classList
    console.log(nav_list)
    if (nav_list.contains('active')) {
        icon.classList.remove('rotate_animation');
        nav.classList.remove('active');
    } else {
        icon.classList.add('rotate_animation');
        nav.classList.add('active');
    }
    
}