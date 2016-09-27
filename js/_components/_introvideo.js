/**
 * @author Designers <designers@wijs.be>
 *
 */

var chopstickIntroVideo = function()
{
    var intro = $('.js-intro-video');
    var video = intro.attr('data-video');
    var breakpoint = 1100;
    var html ="<video class='c-background-video' preload autoplay loop muted><source src='" + video + ".webm' type='video/webm'><source src='" + video + ".mp4' type='video/mp4'></video>";

    // check if the browser allows autoplay

    if (Modernizr.videoautoplay) {
        intro.prepend(html);
    }
};
