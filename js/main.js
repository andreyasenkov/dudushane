function hideShowBurger() {
    if (screen.width <= 992) {
        $('.header-burger').addClass('header-burger-active');
        $('.header-control').appendTo('.header-nav');
    } else {
        $('.header-burger').removeClass('header-burger-active');
        $('.header-control').appendTo('.header-row');
    }
};

function removeBestContent() {
    if (screen.width <= 576) {
        $('.best-left-content__text').appendTo('.best-left');
        $('.best-left-content-search').appendTo('.best-left');
        $('.best-left-content__shop-now').appendTo('.best-left');
        $('.best-left-content').remove();
    } else {
        if (!($('.best-left-content').length)) {
            $('.best-left').append('<div class="best-left-content"></div>');
        }
        $('.best-left-content__text').appendTo('.best-left-content');
        $('.best-left-content-search').appendTo('.best-left-content');
        $('.best-left-content__shop-now').appendTo('.best-left-content');
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
    $(window).scroll(function () {
        let start = $(this).scrollTop();
        let startBlock = $('.product-container').offset().top;
        let endBlock = $('.product-cards-end').offset().top;
        if (start >= startBlock && start <= endBlock) {
            $('.product-cards__hide').css({ 'opacity': 1 });
        } else {
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


$(document).ready(function () {

    $(window).resize(function () {
        hideShowBurger();
        movingPerfect()
        removeBestContent()
    });

    hideShowBurger();

    removeBestContent()

    $('.header-burger-active').click(function () {
        $('.header-nav').addClass('is-active');
    });

    $('.header-nav-list-close').click(function () {
        $('.header-nav').removeClass('is-active');
    });

    $('.product-button').click(function () {
        $('.product-cards__hide').slideToggle(300)
        $('.product-cards-visible').slideToggle(300);
        $('.product-cards__hidden').slideToggle(300);
        addDisplay();
    });

    $('.product-cards-visible').click(function () {
        $('.product-cards__hide').slideToggle(300)
        $('.product-cards-visible').slideToggle(300);
        $('.product-cards__hidden').slideToggle(300);
        addDisplay();
    });

    $('.product-cards__hide').click(function () {
        $('.product-cards__hide').slideToggle(300)
        $('.product-cards-visible').slideToggle(300);
        $('.product-cards__hidden').slideToggle(300);
        addDisplay();
    });

    hideShowButtonHide();

});