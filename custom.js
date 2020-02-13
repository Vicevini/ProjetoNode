//Menu mobile
$(document).ready(function() {
    $(`.sidenav-trigger`).sidenav();
});

//Organizar rolagem da navbar para alterar background color

$(window).on("scroll", function() {
    if ($(window).scrollTop() > 100) {
        $(".navbar").addClass("nav-color");
    } else {
        $(".navbar").removeClass("nav-color");
    }
});