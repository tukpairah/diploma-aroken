(function () {
    document.addEventListener('DOMContentLoaded', () => {

        document.addEventListener('click', function (e) {
            const burgerIcon = e.target.closest('.burger-icon');
            const navLink = e.target.closest('.nav__link');

            if (!burgerIcon && !navLink) return;

            if (window.innerWidth > 900) return;

            document.body.classList.toggle('body--opened-menu');
        });
    });
})();

new Swiper('.hero__swiper', {
    slidesPerView: 2,
    spaceBetween: 40,

    navigation: {
        nextEl: '.hero-section__next',
        prevEl: '.hero-section__prev',
    },

    loop: true,

    breakpoints: {
        601: {
            slidesPerView: 3,
        },
        801: {
            spaceBetween: 32,
        },
        1101: {
            slidesPerView: 3,
        }
    }
});




