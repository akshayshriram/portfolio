var logoswiper = new Swiper('.swiper', {
    effect: 'cards',
    grabCursor: true,
    cardsEffect: {
        perSlideOffset: 10, // Space between cards in px
        perSlideRotate: 0, // Rotation of cards in degrees
    },

    //autoplay: {
    //  delay: 5000,
    //},
    pagination: {
        el: ".test-pagination",
        clickable: true,
    },
    on: {
        slideChange: function() {
            $('.content-item').removeClass('show fade-in');
            var activeIndex = this.activeIndex;
            var activeContentId = '#content' + (activeIndex + 1);
            $(activeContentId).addClass('show');

            setTimeout(function() {
                $(activeContentId).addClass('fade-in');
            }, 50);
        }
    }
});