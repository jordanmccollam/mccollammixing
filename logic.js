$(document).ready(function() {

    var musicOn = false;

    var audio = "";


    // ANCHOR Samples
    $("#play-btn").on('click', function() {
        selectSong();
    })

    $("#stop-btn").on('click', function() {
        if (musicOn === true) {
            audio.pause(); 
            musicOn = false;
            $("#currently-playing").html("No music playing currently");
        }
    })

    $(".carousel-btn").on('click', function() {
        if (musicOn === true) {
            audio.pause(); 
            musicOn = false;
            $("#currently-playing").html("No music playing currently");
        }
    })

    function selectSong() {
        if (musicOn === false && document.getElementById("dance").classList.contains("active") == true) {
            audio = new Audio('Music/dance.wav');
            audio.play();
            musicOn = true;
            $("#currently-playing").html("Dance in the River - Paul Mah and the Drifting Boats");
        }
        else if (musicOn === false && document.getElementById("openwindows").classList.contains("active") == true) {
            audio = new Audio('Music/openwindows.wav');
            audio.play();
            musicOn = true;
            $("#currently-playing").html("Open Windows - Ethan Thomas");
        }
        else if (musicOn === false && document.getElementById("thief").classList.contains("active") == true) {
            audio = new Audio('Music/thief.mp3');
            audio.play();
            musicOn = true;
            $("#currently-playing").html("Thief - Brennvn");
        }
        else if (musicOn === false && document.getElementById("talk").classList.contains("active") == true) {
            audio = new Audio('Music/talk.mp3');
            audio.play();
            musicOn = true;
            $("#currently-playing").html("Talk - Jordan River");
        }
    };





// END of jQuery
})