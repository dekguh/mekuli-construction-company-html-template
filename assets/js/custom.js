/*
Nama: Mekuli - Construction Company HTML Template
Author: dekguh
Version: 1.0.0
*/
(function() {
    /* preloader */
    $(window).on('load', function() {
        $('.preloader-loading').addClass('animated fadeOutLeft delay-1s slow');
        $('.preloader-block-1').delay(1500).animate({
            left: '-100%'
        }, 3000);
        $('.preloader-block-2').delay(1500).animate({
            right: '-100%'
        }, 3000);
        $('.preloader-wrapper').delay(4500).fadeOut();
    });

    /* navbar */
    $('.navbar-link.dropdown').on('click', function() {
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parent('.navbar-item.dropdown').children('.navbar-dropdown').slideUp();
        } else {
            $('.navbar-menu').find('.navbar-link.dropdown.active').removeClass('active');
            $('.navbar-menu').find('.navbar-dropdown').slideUp();
            $(this).addClass('active');
            $(this).parent('.navbar-item.dropdown').children('.navbar-dropdown').slideDown();
        }
    });
    $('.navbar-open').on('click', function() {
        $('.navbar-side').removeClass('close-side');
        $('.navbar-side').addClass('open-side');
    });
    $('.navbar-close').on('click', function() {
        $('.navbar-side').removeClass('open-side');
        $('.navbar-side').addClass('close-side');
    });

    /* background image */
    $('.bg-image').each(function(index) {
        $(this).css('background-image', 'url("' + $(this).data('bg-image') + '")');
    });

    /* header carousel */
    $('#headerCarousel').owlCarousel({
        loop: true,
        margin: 0,
        stagePadding: 0,
        items: 1,
        dots: false,
        nav: true,
        animateIn: 'fadeIn',
        animateOut: 'rotateOut',
        smartSpeed: 3000,
        navSpeed: 3000,
    });

    /* team carousel */
    $('#teamCarousel').owlCarousel({
        loop: true,
        margin: 30,
        stagePadding: 0,
        items: 1,
        dots: false,
        nav: true,
        smartSpeed: 3000,
        navSpeed: 3000,
        responsiveClass: true,
        responsive: {
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    /* testimonial carousel */
    $('#testimonialCarousel').owlCarousel({
        loop: true,
        margin: 30,
        stagePadding: 0,
        items: 1,
        dots: false,
        nav: true,
        smartSpeed: 3000,
        navSpeed: 3000,
        responsiveClass: true,
        responsive: {
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    });

    /* sidebar testimonial carousel */
    $('#sidebarTestimonialCarousel').owlCarousel({
        loop: true,
        margin: 30,
        stagePadding: 0,
        items: 1,
        dots: false,
        nav: true,
        smartSpeed: 3000,
        navSpeed: 3000,
    });

    /* project info image carousel */
    $('#projectImageCarousel').owlCarousel({
        loop: false,
        margin: 0,
        stagePadding: 0,
        items: 1,
        dots: false,
        nav: true,
        smartSpeed: 3000,
        navSpeed: 3000,
    });

    /* service 2 carousel */
    $('#service2Carousel').owlCarousel({
        loop: true,
        margin: 0,
        stagePadding: 0,
        items: 1,
        dots: false,
        nav: true,
        smartSpeed: 3000,
        navSpeed: 3000,
    });

    /* about 3 carousel */
    $('#about3Carousel').owlCarousel({
        loop: true,
        margin: 30,
        stagePadding: 0,
        items: 1,
        dots: false,
        nav: true,
        smartSpeed: 3000,
        navSpeed: 3000,
    });

    /* nav carousel */
    $('.owl-carousel .owl-nav button.owl-prev').each(function(index) {
        $(this).html('<i class="fas fa-chevron-left"></i>');
    });
    $('.owl-carousel .owl-nav button.owl-next').each(function(index) {
        $(this).html('<i class="fas fa-chevron-right"></i>');
    });

    /* scroll top */
    $(window).on('scroll', function() {
        if($(this).scrollTop() >= 200) {
            $('.button-top').css('display', 'block');
        } else {
            $('.button-top').css('display', 'none');
        }
    });
    $('.btn-scroll-top').on('click', function() {
        $('html, body').animate({
            scrollTop: $('html').position().top
        }, 3000);
    });

    /* acordion */
    $('.btn-accordion').on('click', function() {
        if($(this).parent('.accordion-header').hasClass('active')) {
            $(this).parent('.accordion-header').removeClass('active');
            $(this).parent('.accordion-header').parent('.faq-accordion').children('.accordion-body').slideUp();
        } else {
            $('.accordion-header.active').parent('.faq-accordion').children('.accordion-body').slideUp();
            $('.accordion-header.active').removeClass('active');
            $(this).parent('.accordion-header').addClass('active');
            $(this).parent('.accordion-header').parent('.faq-accordion').children('.accordion-body').slideDown();
        }
    });

})(window.jQuery);