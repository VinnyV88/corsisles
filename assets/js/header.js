emergence.init();

$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.logo').attr('src', 'assets/images/ViVi_Web_Logo.svg');
        $('.byname').addClass("byname-sm");
        $('.byname').removeClass("byname-lg");
        $('.navbar').addClass("navbar-sm");
        $('.navbar').removeClass("navbar-lg");
        $('.logo').addClass("logo-sm");
        $('.logo').removeClass("logo-lg");
    } else {
        $('.logo').attr('src', 'assets/images/ViVi_Web_logo_03.svg');
        $('.byname').removeClass("byname-sm");
        $('.byname').addClass("byname-lg");
        $('.navbar').removeClass("navbar-sm");
        $('.navbar').addClass("navbar-lg");
        $('.logo').removeClass("logo-sm");
        $('.logo').addClass("logo-lg");
    }
});