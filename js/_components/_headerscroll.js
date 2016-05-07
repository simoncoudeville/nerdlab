var headerScroll = function()
{
    var header = $('.js-header');
    var body = $('body');
    var headerOffset = $('.js-header').offset().top;

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();


        // if (scroll >= 1) {
        //     body.addClass("shrink");
        // } else {
        //     header.removeClass("shrink");
        // }

        if (scroll >= headerOffset) body.addClass('has-fixed-header');
        else body.removeClass('has-fixed-header');

    });
};
