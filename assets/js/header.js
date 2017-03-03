emergence.init();

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        // $('.logo').attr('src', 'assets/images/corsisles2.svg');
        // $('.byname').addClass("byname-sm");
        // $('.byname').removeClass("byname-lg");
        $('.navbar').addClass("navbar-sm");
        $('.navbar').removeClass("navbar-lg");
        $('.logo').addClass("logo-sm");
        $('.logo').removeClass("logo-lg");
    } else {
        // $('.logo').attr('src', 'assets/images/corsisles2.svg');
        // $('.byname').removeClass("byname-sm");
        // $('.byname').addClass("byname-lg");
        $('.navbar').removeClass("navbar-sm");
        $('.navbar').addClass("navbar-lg");
        $('.logo').removeClass("logo-sm");
        $('.logo').addClass("logo-lg");
    }
});