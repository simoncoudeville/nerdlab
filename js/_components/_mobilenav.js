var mobileNav = function()
{
    var header = $('.js-header');
    var trigger = $('.js-nav-trigger');

    trigger.on('click', function() {
        $(this).toggleClass('is-active');
        header.toggleClass('has-visible-nav');
    });
};
