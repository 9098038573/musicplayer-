jQuery(document).ready(function($){ // Conflict hatane ke liye $ pass kiya gaya hai

    var jsFolder = "https://amazingaudioplayer.com/wp-content/uploads/amazingaudioplayer/8/audioplayerengine/";

    // 1. Player Initialization
    var amazingObj = jQuery("#amazingaudioplayer-8").amazingaudioplayer({
        jsfolder:jsFolder,
        tracklistarrowimage:"tracklistarrow-48-16-0.png",
        timeformatlive:"%CURRENT% /%LIVE%",
        volumeimagewidth:24,
        barbackgroundimage:"",
        tracklistarrowimageheight:16,
        showtime:true,
        titleinbarwidth:100,
        showprogress:true,
        random:false,
        titleformat:"%TITLE%",
        height:600,
        loopimage:"loop-24-24-0.png",
        prevnextimage:"prevnext-48-48-1.png",
        showinfo:true,
        imageheight:200,
        skin:"DarkBox",
        responsive:true,
        loopimagewidth:24,
        showstop:false,
        prevnextimageheight:48,
        infoformat:"%ARTIST% <br />%ALBUM%<br />%INFO%",
        tracklistbackgroundimage:"",
        showloading:false,
        forcefirefoxflash:false,
        tracklistscroll:true,
        preloadaudio:true,
        showvolumebar:true,
        imagefullwidth:true,
        width:340,
        showimage:true,
        showloop:true,
        volumeimage:"volume-24-24-0.png",
        playpauseimagewidth:48,
        loopimageheight:24,
        tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%-</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",
        prevnextimagewidth:48,
        titleinbarwidthmode:"fixed",
        forceflash:false,
        tracklistarrowimagewidth:48,
        playpauseimageheight:48,
        showbackgroundimage:false,
        stopimage:"stop-24-24-0.png",
        showvolume:true,
        playpauseimage:"playpause-48-48-1.png",
        forcehtml5:true,
        showprevnext:true,
        backgroundimage:"",
        loadingformat:"Loading...",
        progressheight:8,
        showtracklistbackgroundimage:false,
        titleinbarscroll:true,
        showtitle:true,
        defaultvolume:100,
        showtitleinbar:false,
        heightmode:"auto",
        titleinbarformat:"%TITLE%",
        showtracklist:true,
        stopimageheight:24,
        volumeimageheight:24,
        stopimagewidth:24,
        volumebarheight:72,
        noncontinous:false,
        stopotherplayers:true,
        showbarbackgroundimage:false,
        volumebarpadding:8,
        imagewidth:100,
        timeformat:"%CURRENT% ",
        autoplay:true,
        fullwidth:false,
        loop:1,
        tracklistitem:10
    });

    // 2. Lock Screen (Media Session API) Integration
    if ('mediaSession' in navigator) {
        
        // Jab gaana bajna shuru ho (Play Event)
        amazingObj.bind("amazingaudioplayer.played", function(event, data) {
            var trackIndex = data.index;
            var trackInfo = amazingObj.amazingaudioplayer("gettrack", trackIndex);

            if (trackInfo) {
                navigator.mediaSession.metadata = new MediaMetadata({
                    title: trackInfo.title || "Unknown Title",
                    artist: trackInfo.artist || "Unknown Artist",
                    album: trackInfo.album || "Amazing Player",
                    artwork: [
                        { src: trackInfo.image || jsFolder + "default-art.png", sizes: '512x512', type: 'image/png' }
                    ]
                });
            }
        });

        // Lock Screen Controls (Buttons) logic
        navigator.mediaSession.setActionHandler('play', function() { 
            amazingObj.amazingaudioplayer("playaudio"); 
        });
        navigator.mediaSession.setActionHandler('pause', function() { 
            amazingObj.amazingaudioplayer("pauseaudio"); 
        });
        navigator.mediaSession.setActionHandler('previoustrack', function() { 
            amazingObj.amazingaudioplayer("prev"); 
        });
        navigator.mediaSession.setActionHandler('nexttrack', function() { 
            amazingObj.amazingaudioplayer("next"); 
        });
    }

});
