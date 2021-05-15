$(document).ready(function() {

    // Sticky navigation

    $('.js-features-section').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

    //Scroll to buttons

    $('.js-scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js-plans-section').offset().top}, 1000);
    });

    $('.js-scroll-to-features').click(function() {
        $('html, body').animate({scrollTop: $('.js-features-section').offset().top}, 1000);
    });

    //Animations on scroll

    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animate__animated animate__fadeIn')
    }, {
        offset: '50%'
    });

    $('.js-wp-2').waypoint(function(direction) {
        $('.js-wp-2').addClass('animate__animated animate__fadeInUp')
    }, {
        offset: '50%'
    });

    $('.js-wp-3').waypoint(function(direction) {
        $('.js-wp-3').addClass('animate__animated animate__fadeIn')
    }, {
        offset: '50%'
    });

    $('.js-wp-4').waypoint(function(direction) {
        $('.js-wp-4').addClass('animate__animated animate__pulse')
    }, {
        offset: '20%'
    });

    //Mobile menu

    $('.js-mobile-menu').click(function() {
        var nav = $('.js-main-nav');
        nav.slideToggle(200);
    });

});