$(document).ready(function () {
    // Mobile Side Menu 
    $('.menu-btn').click(function () {
        $('.xs-nav').show();
        $('.main-xs-nav').addClass('inscreen');
        $('.main-xs-nav').removeClass('outscreen');
        $('body').css("overflow", "hidden");
        $('html').css("overflow", "hidden");
    });
    $('.xs-nav').click(function () {
        $('.xs-nav').fadeOut(500);
        $('.main-xs-nav').addClass('outscreen');
        $('.main-xs-nav').removeClass('inscreen');
        $('body').css("overflow", "auto");
        $('html').css("overflow", "auto");
    });
    $(".nav-links").click(function (e) {
        e.stopPropagation();
    });

    $('.search-btn').click(function () {
        if ($(window).width() < 992) {
            $('.search-pop').fadeIn(500);
            $('body').css("overflow", "hidden");
            $('html').css("overflow", "hidden");
        } else {
            $('.search-input').addClass("search-inner");
            $('.search-input').removeClass("search-outer");
            $('.open-search').css("display", "none");
            $('.search-button').css("display", "flex");
        }
    });
    if ($(window).width() > 992) {
        $('body').click(function () {
            $('.search-input').removeClass("search-inner");
            $('.search-input').addClass("search-outer");
            $('.open-search').css("display", "flex");
            $('.search-button').css("display", "none");
        });
        $(".flex-fix").click(function (e) {
            e.stopPropagation();
        });
    }
    $('.search-pop').click(function () {
        $('.search-pop').fadeOut(500);
        $('body').css("overflow", "auto");
        $('html').css("overflow", "auto");
    });
    $(".search").click(function (e) {
        e.stopPropagation();
    });

    if ($(window).width() < 992) {
        $(".videos").addClass("owl-carousel");
        $(".videos").addClass("owl-theme");
        $('.videos').owlCarousel({
            items: 1,
            margin: 15,
            autoplay: false,
            autoplayTimeout: 2500,
            rtl: true,
            loop: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,

                },
                480: {
                    items: 2,

                },
                767: {
                    items: 2,

                },

            }
        });
    } else {
        $(".videos").removeClass("owl-carousel");
        $(".videos").removeClass("owl-theme");
    }
    if ($(window).width() < 992) {
        $(".prices").addClass("owl-carousel");
        $(".prices").addClass("owl-theme");
        $('.prices').owlCarousel({
            items: 1,
            margin: 15,
            autoplay: false,
            autoplayTimeout: 2500,
            rtl: true,
            loop: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1,

                },
                480: {
                    items: 2,

                },
                767: {
                    items: 2,

                },

            }
        });
    } else {
        $(".prices").removeClass("owl-carousel");
        $(".prices").removeClass("owl-theme");
    }

});