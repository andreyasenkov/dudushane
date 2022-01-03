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
    speed: 1800,
    slidesPerView: "auto",
    a11y: {
        prevSlideMessage: 'Previous slide',
        nextSlideMessage: 'Next slide',
    },
});

// peopel-swiper
const peopleSwiperButtonNext = document.querySelector('.people-swiper-button-next');
const peopleSwiperButtonPrev = document.querySelector('.people-swiper-button-prev');
const swiperPeople = new Swiper('.people-swiper', {
    speed: 1800,
    spaceBetween: 1,
    navigation: {
        nextEl: peopleSwiperButtonNext,
        prevEl: peopleSwiperButtonPrev,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        992: {
            slidesPerView: 1,
        },
    },
    a11y: {
        prevSlideMessage: 'Previous human',
        nextSlideMessage: 'Next human',
    },
});