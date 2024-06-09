document.addEventListener('DOMContentLoaded', function () {
/* MAJOR CHORD PLAYER */   
    var a_Major_audioPlayer = document.getElementById('A-Major_audioPlayer');
    var b_Major_audioPlayer = document.getElementById('B-Major_audioPlayer');
    var c_Major_audioPlayer = document.getElementById('C-Major_audioPlayer');
    var d_Major_audioPlayer = document.getElementById('D-Major_audioPlayer');
    var e_Major_audioPlayer = document.getElementById('E-Major_audioPlayer');
    var f_Major_audioPlayer = document.getElementById('F-Major_audioPlayer');
    var g_Major_audioPlayer = document.getElementById('G-Major_audioPlayer');


    var a_Major_playButton = document.getElementById('A-Major_playButton');
    var b_Major_playButton = document.getElementById('B-Major_playButton');
    var c_Major_playButton = document.getElementById('C-Major_playButton');
    var d_Major_playButton = document.getElementById('D-Major_playButton');
    var e_Major_playButton = document.getElementById('E-Major_playButton');
    var f_Major_playButton = document.getElementById('F-Major_playButton');
    var g_Major_playButton = document.getElementById('G-Major_playButton');

    a_Major_audioPlayer.src = 'srcs/audio/major/A_Major.mp3';
    b_Major_audioPlayer.src = 'srcs/audio/major/B_Major.mp3';
    c_Major_audioPlayer.src = 'srcs/audio/major/C_Major.mp3';
    d_Major_audioPlayer.src = 'srcs/audio/major/D_Major.mp3';
    e_Major_audioPlayer.src = 'srcs/audio/major/E_Major.mp3';
    f_Major_audioPlayer.src = 'srcs/audio/major/F_Major.mp3';
    g_Major_audioPlayer.src = 'srcs/audio/major/G_Major.mp3';


    a_Major_audioPlayer.addEventListener('ended', function () {
        updatePlayButtonIcon(a_Major_playButton, 'play');
    });
    b_Major_audioPlayer.addEventListener('ended', function () {
        updatePlayButtonIcon(b_Major_playButton, 'play');
    });
    c_Major_audioPlayer.addEventListener('ended', function () {
        updatePlayButtonIcon(c_Major_playButton, 'play');
    });
    d_Major_audioPlayer.addEventListener('ended', function () {
        updatePlayButtonIcon(d_Major_playButton, 'play');
    });
    e_Major_audioPlayer.addEventListener('ended', function () {
        updatePlayButtonIcon(e_Major_playButton, 'play');
    });
    f_Major_audioPlayer.addEventListener('ended', function () {
        updatePlayButtonIcon(f_Major_playButton, 'play');
    });
    g_Major_audioPlayer.addEventListener('ended', function () {
        updatePlayButtonIcon(g_Major_playButton, 'play');
    });

    a_Major_playButton.addEventListener('click', function () {
        togglePlay(a_Major_audioPlayer, a_Major_playButton);
    });
    b_Major_playButton.addEventListener('click', function () {
        togglePlay(b_Major_audioPlayer, b_Major_playButton);
    });
    c_Major_playButton.addEventListener('click', function () {
        togglePlay(c_Major_audioPlayer, c_Major_playButton);
    });
    d_Major_playButton.addEventListener('click', function () {
        togglePlay(d_Major_audioPlayer, d_Major_playButton);
    });
    e_Major_playButton.addEventListener('click', function () {
        togglePlay(e_Major_audioPlayer, e_Major_playButton);
    });
    f_Major_playButton.addEventListener('click', function () {
        togglePlay(f_Major_audioPlayer, f_Major_playButton);
    });
    g_Major_playButton.addEventListener('click', function () {
        togglePlay(g_Major_audioPlayer, g_Major_playButton);
    });
/* MINOR CHORD PLAYER */

var a_Minor_audioPlayer = document.getElementById('A-Minor_audioPlayer');
var b_Minor_audioPlayer = document.getElementById('B-Minor_audioPlayer');
var c_Minor_audioPlayer = document.getElementById('C-Minor_audioPlayer');
var d_Minor_audioPlayer = document.getElementById('D-Minor_audioPlayer');
var e_Minor_audioPlayer = document.getElementById('E-Minor_audioPlayer');
var f_Minor_audioPlayer = document.getElementById('F-Minor_audioPlayer');
var g_Minor_audioPlayer = document.getElementById('G-Minor_audioPlayer');


var a_Minor_playButton = document.getElementById('A-Minor_playButton');
var b_Minor_playButton = document.getElementById('B-Minor_playButton');
var c_Minor_playButton = document.getElementById('C-Minor_playButton');
var d_Minor_playButton = document.getElementById('D-Minor_playButton');
var e_Minor_playButton = document.getElementById('E-Minor_playButton');
var f_Minor_playButton = document.getElementById('F-Minor_playButton');
var g_Minor_playButton = document.getElementById('G-Minor_playButton');

a_Minor_audioPlayer.src = 'srcs/audio/Minor/A_Minor.mp3';
b_Minor_audioPlayer.src = 'srcs/audio/Minor/B_Minor.mp3';
c_Minor_audioPlayer.src = 'srcs/audio/Minor/C_Minor.mp3';
d_Minor_audioPlayer.src = 'srcs/audio/Minor/D_Minor.mp3';
e_Minor_audioPlayer.src = 'srcs/audio/Minor/E_Minor.mp3';
f_Minor_audioPlayer.src = 'srcs/audio/Minor/F_Minor.mp3';
g_Minor_audioPlayer.src = 'srcs/audio/Minor/G_Minor.mp3';


a_Minor_audioPlayer.addEventListener('ended', function () {
    updatePlayButtonIcon(a_Minor_playButton, 'play');
});
b_Minor_audioPlayer.addEventListener('ended', function () {
    updatePlayButtonIcon(b_Minor_playButton, 'play');
});
c_Minor_audioPlayer.addEventListener('ended', function () {
    updatePlayButtonIcon(c_Minor_playButton, 'play');
});
d_Minor_audioPlayer.addEventListener('ended', function () {
    updatePlayButtonIcon(d_Minor_playButton, 'play');
});
e_Minor_audioPlayer.addEventListener('ended', function () {
    updatePlayButtonIcon(e_Minor_playButton, 'play');
});
f_Minor_audioPlayer.addEventListener('ended', function () {
    updatePlayButtonIcon(f_Minor_playButton, 'play');
});
g_Minor_audioPlayer.addEventListener('ended', function () {
    updatePlayButtonIcon(g_Minor_playButton, 'play');
});

a_Minor_playButton.addEventListener('click', function () {
    togglePlay(a_Minor_audioPlayer, a_Minor_playButton);
});
b_Minor_playButton.addEventListener('click', function () {
    togglePlay(b_Minor_audioPlayer, b_Minor_playButton);
});
c_Minor_playButton.addEventListener('click', function () {
    togglePlay(c_Minor_audioPlayer, c_Minor_playButton);
});
d_Minor_playButton.addEventListener('click', function () {
    togglePlay(d_Minor_audioPlayer, d_Minor_playButton);
});
e_Minor_playButton.addEventListener('click', function () {
    togglePlay(e_Minor_audioPlayer, e_Minor_playButton);
});
f_Minor_playButton.addEventListener('click', function () {
    togglePlay(f_Minor_audioPlayer, f_Minor_playButton);
});
g_Minor_playButton.addEventListener('click', function () {
    togglePlay(g_Minor_audioPlayer, g_Minor_playButton);
});


    function togglePlay(audioPlayer, playButton) {
        if (audioPlayer.paused) {
            audioPlayer.play();
            updatePlayButtonIcon(playButton, 'pause');
        } else {
            audioPlayer.pause();
            updatePlayButtonIcon(playButton, 'play');
        }
    }

    function updatePlayButtonIcon(playButton, state) {
        var icon = playButton.querySelector('.fa');

        if (state === 'play') {
            icon.classList.remove('fa-pause-circle');
            icon.classList.add('fa-play-circle');
        } else if (state === 'pause') {
            icon.classList.remove('fa-play-circle');
            icon.classList.add('fa-pause-circle');
        }
    }
});