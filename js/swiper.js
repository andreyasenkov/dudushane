// best-swiper
const swiperBest = new Swiper('.best-swiper', {
    autoplay: {
        delay: 3000
    },
    speed: 1800,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
    },
});

// sponsors-swiper
const swiperSponsors = new Swiper('.sponsors-swiper', {
    autoplay: {
        delay: 3000
    },
    loop: true,
    speed: 800,
    slidesPerView: "auto",
    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
    },
});

// peopel-swiper
const swiperPeople = new Swiper('.people-swiper', {
    speed: 1800,
    navigation: {
        nextEl: '.people-swiper__button-next',
        prevEl: '.people-swiper__button-prev',
    },
    hashNavigation: {
        watchState: true,
    },
    a11y: {
        prevSlideMessage: 'Previous human',
        nextSlideMessage: 'Next human',
    },
});