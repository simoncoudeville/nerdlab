var chopstick =
{
    // init, something like a constructor
    init: function()
    {
        headerScroll();
        mobileNav();

        var $gallery = $('.js-gallery').flickity({
            accessibility: true,
            autoPlay: false,
            cellAlign: 'left',
            cellSelector: undefined,
            contain: true,
            draggable: true,
            freeScroll: false,
            selectedAttraction: 0.2,
            friction: 0.8,
            initialIndex: 0,
            lazyLoad: true,
            percentPosition: true,
            prevNextButtons: false,
            pageDots: false,
            resize: true,
            rightToLeft: false,
            setGallerySize: false,
            watchCSS: false,
            wrapAround: true,
            arrowShape: {
                x0: 10,
                x1: 60, y1: 50,
                x2: 70, y2: 40,
                x3: 30
            }
        });
    }
};
