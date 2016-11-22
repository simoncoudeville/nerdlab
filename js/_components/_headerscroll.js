var headerScroll = function()
{
    var header = $('.js-header');
    var headerOffset = $('.js-header').outerHeight();

    header.scrollToFixed();

    // $(window).scroll(function() {
    //     var scroll = $(window).scrollTop();
    //
    //     if (scroll >= headerOffset) {
    //         header.addClass("is-shrinken");
    //     } else {
    //         header.removeClass("is-shrinken");
    //     }
    // });
};
