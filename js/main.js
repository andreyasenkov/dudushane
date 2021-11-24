function hideShowBurger() {
    if (screen.width < 992) {
        $('.header__burger').addClass('header__burger_active');
        $('.header-control').appendTo('.header__burger_active');
        $('.header__nav-list').appendTo('.header__burger');
        $('.header__burger_span-wrapper').attr('aria-label', 'button menu');
    } else {
        $('.header__burger').removeClass('header__burger_active');
        $('.header-control').appendTo('.header-row');
        $('.header__nav-list').appendTo('.header__nav');
        $('.header__burger_span-wrapper').attr('aria-label', '');
    }
};

function addDisplay() {
    let displayHidden = $('.product-cards__hidden').css('display');
    let displayHide = $('.product-cards__hidden').css('display');
    if (displayHidden === 'block') {
        $('.product-cards__hidden').css('display', 'flex');
    };
    if (displayHide === 'block') {
        $('.product-cards__hidden').css('display', 'flex');
    }

};

function hideShowButtonHide() {
    $(window).scroll(function() {
        let start = $(this).scrollTop();
        console.log(start);
        let startBlock = $('.product-container').offset().top;
        console.log(startBlock);
        let endBlock = $('.total-container').offset().top;
        console.log(endBlock);
        if (start >= startBlock && start <= endBlock) {
            console.log('yes');
            $('.product-cards__hide').css({ 'opacity': 1 });
        } else {
            console.log('no');
            $('.product-cards__hide').css({ 'opacity': 0 });
        }
    })
};

function movingPerfect() {
    if (screen.width < 768) {
        $('.perfect-right').appendTo('.perfect-left__heading');
    } else {
        $('.perfect-right').appendTo('.perfect-row');

    }
}


$(document).ready(function() {

    $(window).resize(function() {
        hideShowBurger();
        movingPerfect()
    });

    hideShowBurger();

    $('.header__burger_span-wrapper').click(function() {
        $('.header__burger').toggleClass('header__burger_open');
    });

    $('.product-button').click(function() {
        $('.product-cards__hide').slideToggle(300)
        $('.product-cards__visible').slideToggle(300);
        $('.product-cards__hidden').slideToggle(300);
        addDisplay();
    });

    $('.product-cards__visible').click(function() {
        $('.product-cards__hide').slideToggle(300)
        $('.product-cards__visible').slideToggle(300);
        $('.product-cards__hidden').slideToggle(300);
        addDisplay();
    });

    $('.product-cards__hide').click(function() {
        $('.product-cards__hide').slideToggle(300)
        $('.product-cards__visible').slideToggle(300);
        $('.product-cards__hidden').slideToggle(300);
        addDisplay();
    });

    hideShowButtonHide();

});