var headerScroll = function()
{
    var header = $('.js-header');
    var headerOffset = $('.js-header').outerHeight();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= headerOffset/3) {
            header.addClass("is-shrinken");
        } else {
            header.removeClass("is-shrinken");
        }
    });
};
