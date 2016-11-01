/**
 * @author Designers <designers@wijs.be>
 *
 */

var videoBackground = function()
{
    var container = $('.js-video-container');
    var video = container.attr('data-video');
    var fallback = container.attr('data-video-fallback');
    var htmlVideo ="<video class='c-background-video' preload autoplay loop muted><source src='" + video + ".webm' type='video/webm'><source src='" + video + ".mp4' type='video/mp4'></video>";
    var htmlFallback = "<div class='c-background-image' style='" + fallback + "'></div>";

    // check if the browser allows autoplay

    if (Modernizr.videoautoplay) {
        console.log("nope");
        container.prepend(htmlVideo);
    }
};
