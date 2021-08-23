// Open/close navigation when clicked .nav-icon
$(document).ready(function(){
    $('.nav-icon').click(function(){
        $('.nav-icon').toggleClass('active');
        $("nav").toggleClass('active');
        $("main").toggleClass('not-active');
    });
    $('.black-overlay').click(function(){
        $('.nav-icon').removeClass('active');
        $("nav").removeClass('active');
        $("main").removeClass('active');
    });
    
});
