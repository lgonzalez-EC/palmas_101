(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);


    // Initiate AOS
    AOS.init();

    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Navbar animation on scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.nav-bar').addClass('navbar-scrolled');
        } else {
            $('.nav-bar').removeClass('navbar-scrolled');
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel (uses the Swiper library)
    const swiper = new Swiper('.testimonial-swiper', {
        loop: true,
        autoplay: {
        delay: 5000,
        },
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
    navigation: {
        nextEl: '.testimonial-swiper .swiper-button-next',
        prevEl: '.testimonial-swiper .swiper-button-prev',
    },
        breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 30
        }
        }
    });

 
})(jQuery);
