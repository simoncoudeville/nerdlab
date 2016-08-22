var headerScroll = function()
{
    var header = $('.js-header');
    var headerOffset = $('.js-header').outerHeight();
    console.log(headerOffset);

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= headerOffset/3) {
            header.addClass("is-shrinken");
            console.log(scroll);
        } else {
            header.removeClass("is-shrinken");
            console.log(scroll);
        }
    });
};
