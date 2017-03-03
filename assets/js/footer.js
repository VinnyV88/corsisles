var connections = [
    twitter = {
        link: "https://twitter.com/ReaganKingIsles",
        imgSrc: "assets/images/Twitter.png"
    }
];

for (var i = 0; i < connections.length; i++) {

    var $img = $('<img>').addClass('img-responsive link-ani footer-flex-item-logo').attr('src', connections[i].imgSrc);
    var $a = $('<a>').attr('href', connections[i].link).attr('target', '_blank');

    $a.html($img);

    $(".footer-connect").append($a);

};