var mobileNav = function()
{
    var header = $('.js-header');
    var nav = $('.js-nav');
    var trigger = $('.js-nav-trigger');
    var triggerUp = $('.js-nav-trigger-up');

    trigger.on('click', function() {
        $(this).toggleClass('is-active');
        nav.slideToggle('fast');
        // header.toggleClass('has-visible-nav');
    });

    triggerUp.on('click', function() {
        trigger.removeClass('is-active');
        nav.slideUp('fast');
        // header.toggleClass('has-visible-nav');
    });
};
