


window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(e);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
});

// ALTERNATIVE METHOD NOTES
// DECLARING FUNCTION OF CLICK ON IMAGE/BUTTON
// function boom() {
//     const audio = document.getElementById("boom");
//     audio.currentTime = 0;
//     audio.play();
// }

// stop propegation