var chopstick =
{
    // init, something like a constructor
    init: function()
    {
        headerScroll();
        mobileNav();

        var $gallery = $('.js-gallery').flickity({
            accessibility: true,
            cellAlign: 'left',
            contain: true,
            freeScroll: false,
            selectedAttraction: 0.2,
            friction: 0.8,
            lazyLoad: true,
            percentPosition: true,
            prevNextButtons: true,
            pageDots: false,
            resize: true,
            setGallerySize: true,
            wrapAround: true
        });
    }
};
