$(document).ready(function () {

    $(".owl-carousel").owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        loop: true,
        nav: true,
        margin: 10,
    });

    $('[data-toggle="tooltip"]').tooltip();

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
});
