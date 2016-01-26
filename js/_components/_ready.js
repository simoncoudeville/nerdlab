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
