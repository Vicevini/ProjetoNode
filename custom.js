//Menu mobile
$(document).ready(function() {
    $(".sidenav-trigger").sidenav();

    $(".scrollspy").scrollSpy({
        scrollOffset: 0
    });

    //Carousel
    $(".carousel.carousel-slider").carousel({
        fullWidth: true,
        indicators: true
    });

    //Modal
    $(".modal").modal();
    //Tabs
    $("ul.tabs").tabs();
    //Esconder Menu
    $(".hide-menu").click(function() {
        $(".button-colapse").sidenav("hide");
    });

    function autoplay() {
        $(".carousel").carousel("next");
        setTimeout(autoplay, 4500);
    }
    autoplay();
});

//Organizar rolagem da navbar para alterar background color

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 100) {
        $(".navbar").addClass("nav-color");
    } else {
        $(".navbar").removeClass("nav-color");
    }
});