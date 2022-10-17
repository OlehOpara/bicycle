function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

// burger

(function () {
    const burger = document.querySelector('.menu__icon');
    const menu = document.getElementsByClassName('menu__body')[0];
    burger.addEventListener('click', () => {
        burger.classList.toggle('menu_active');
        menu.classList.toggle('active');
    });
}());

// slider

if ($('.slider__body').length > 0) {
    $('.slider__body').slick({
        // autoplay: true,
        // infinite: false,
        dots: true,
        arrows: false,
        accessibility: false,
        slidesToShow: 1,
        autoPlaySpeed: 3000,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {}
        }]
    });
}

