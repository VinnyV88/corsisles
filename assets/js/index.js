var portfolio = [
    playoffs = {
        link: "./playoffs.html",
        imgSrc: "assets/images/playoffs385x257.png",
        caption: "Playoff Odds",
        // githubLink: "https://github.com/VinnyV88/week-3-game#hangman-breaking-bad-edition",
        synopsis: "An interactive chart that shows the Islanders chances of making the playoffs and their point totals, day by day."
    },
    shots = {
        link: "./shots.html",
        imgSrc: "assets/images/shots385x257.png",
        caption: "Shot Location",
        // githubLink: "https://github.com/VinnyV88/week-4-game#star-wars-rpg",
        synopsis: "An interactive grahic that shows all the shots taken by Islander players, and wether the shot resulted in a goal. You can subset the the view by game number, player, and game situation."
    },
    games = {
        link: "./games.html",
        imgSrc: "assets/images/games385x257.png",
        caption: "Game Scores",
        // githubLink: "https://github.com/VinnyV88/TriviaGame#trivia-game-wwewwf-edition",
        synopsis: "An interactive chart that shows each Islander players' Game Score, with the ability to subset the chart by game numbers."
    }
];

var $row;

for (var i = 0; i < portfolio.length; i++) {

    var $div = $('<div>').addClass("col-md-6 portfolio-flex-container").attr("data-emergence", "hidden");
    var $img = $('<img>').addClass('img-responsive link-ani flex-item-port-img').attr('src', portfolio[i].imgSrc).attr('alt', portfolio[i].caption);
    var $a = $('<a>').attr('href', portfolio[i].link);
    var $caption = $('<div>').addClass('flex-item-caption-hdr').text(portfolio[i].caption);
    var $captionBody = $('<div>').addClass('flex-item-caption-body').text(portfolio[i].synopsis);
    var $captionLink = $('<div>').addClass('flex-item-caption-button');
    var $aButton = $('<a>').attr('href', portfolio[i].link).addClass('caption-button').text("Goto the Chart");

    $a.html($img);
    $captionLink.append($aButton);

    $div.append($a);
    $div.append($caption);
    $div.append($captionBody);
    $div.append($captionLink);

    if ((i % 2) === 0) {
        $row = $('<div>').addClass('row');
        $row.append($div);

        //if we have an odd number of portfolio elements and we are 
        //processing the last one, write the div
        if ((portfolio.length - i) === 1) $('.port-well').append($row);
    } else {
        $row.append($div);
        $('.port-well').append($row);
    }
};