var chopstick =
{
    // init, something like a constructor
    init: function()
    {
        headerScroll();
        mobileNav();

        $('.js-gallery').slick({
            focusOnSelect: true,
            edgeFriction: 2,
            mobileFirst: true,
            variableWidth: true,
            arrows: false,

            responsive: [{

                breakpoint: 767,
                settings: {
                    centerMode: true
                }

            }]
        });
    }
};
