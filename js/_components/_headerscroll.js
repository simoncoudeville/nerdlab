var headerScrollSettings
chopstick.headerScroll =
{
    settings:
    {
        headerScroll: $('.js-header')
    },

    init: function()
    {
        headerScrollSettings = chopstick.headerScroll.settings;
        chopstick.headerScroll.headerScrollContent();
    },

    headerScrollContent: function ()
    {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 30) {
                headerScrollSettings.headerScroll.addClass("shrink");
            } else {
                headerScrollSettings.headerScroll.removeClass("shrink");
            }
        });
    }
};
