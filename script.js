$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //Slide-up Script
    $('.scroll-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0
        });
    });

    //toggle menu/navbar sript
    $(".btn-menu").click(function () {
        $(".navbar .menu").toggleClass("active");
        $(".btn-menu i").toggleClass("active");
    });

    //typing animation
    var typed = new Typed(".typing", {
        strings: ["Desenvolvedor", "Front End", "Designer Gráfico", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });

    var typed = new Typed(".typing-2", {
        strings: ["Desenvolvedor", "Front End", "Designer Gráfico", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });


    // owl carrosel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

});