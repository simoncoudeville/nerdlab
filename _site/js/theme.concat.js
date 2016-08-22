// // ---
// // Add smooth page transitions for an app like feel
// // -
// // Source: https://github.com/weblinc/jquery.smoothState.js
// // ---
//
// Smoothstate only works if history is supported so we use a Modernizr wrapper
if (Modernizr.history) {

    $(function() {
        'use strict';
        var options = {
            debug: false,
            prefetch: true,
            cacheLength: 2,
            onStart: {
                duration: 400, // Duration of our animation
                render: function ($container) {
                    // Add your CSS animation reversing class
                    $container.removeClass('is-finished');
                    $container.addClass('is-exiting');
                    // $("html, body").animate({ scrollTop: 0 });

                    // Restart your animation
                    smoothState.restartCSSAnimations();
                }
            },
            onReady: {
                duration: 500, // Duration of our animation
                render: function ($container, $newContent) {
                    // Remove your CSS animation reversing class
                    $container.removeClass('is-exiting');
                    $container.addClass('is-finished');
                    // Inject the new content
                    $container.html($newContent);
                    pluginLoader();
                }
            }
            // ,
            // onAfter: function($container, $newContent) {
            //     // load javascript
            //     pluginLoader();
            // }
        },

        smoothState = $('#js-smoothstate').smoothState(options).data('smoothState');
    });
}

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

var mobileNav = function()
{
    var $navItem = $('.js-nav-main-item');
};

var mobileNav = function()
{
    var header = $('.js-header');
    var trigger = $('.js-nav-trigger');

    trigger.on('click', function() {
        $(this).toggleClass('is-active');
        header.toggleClass('has-visible-nav');
    });
};

var readySettings
chopstick.ready =
{
    settings:
    {
        ready: $('body')
    },

    init: function()
    {
        readySettings = chopstick.ready.settings;
        chopstick.ready.readyContent();
    },

    readyContent: function ()
    {
        readySettings.ready.addClass("is-ready");
        setTimeout(function(){
            readySettings.ready.addClass("is-finished");
        }, 450);
    }
};

// Load all your plugins in the pluginLoader function.
var pluginLoader = function() {
    $(chopstick.init);
}
pluginLoader();
