const buttonSounds =("boom", "clap", "hihat", "kick","openhat");

// SOUNDS

// const boom = new Audio('sounds/boom.wav')
// const clap = new Audio('sounds/clap.wav')
// const hihat = new Audio('sounds/hihat.wav')
// const kick = new Audio('sounds/kick.wav')
// const openhat = new Audio('sounds/openhat.wav')
// const ride = new Audio('sounds/ride.wav')
// const snare = new Audio('sounds/snare.wav')
// const tink = new Audio('sounds/tink.wav')
// const tom = new Audio('sounds/tom.wav')

const a = new Audio('sounds/boom.wav')
const clap = new Audio('sounds/clap.wav')
const hihat = new Audio('sounds/hihat.wav')
const kick = new Audio('sounds/kick.wav')
const openhat = new Audio('sounds/openhat.wav')
const ride = new Audio('sounds/ride.wav')
const snare = new Audio('sounds/snare.wav')
const tink = new Audio('sounds/tink.wav')
const tom = new Audio('sounds/tom.wav')


// const a = document.getElementById("a")
// const s = document.getElementById("s")
// const d = document.getElementById("d")
// const f = document.getElementById("f")
// const g = document.getElementById("g")
// const h = document.getElementById("h")
// const j = document.getElementById("j")
// const k = document.getElementById("k")
// const l = document.getElementById("l")

// this is how to input external files 

//  sound variables


// key presses
// how to handle events(keyboard events)


// clicks!
// how to access mouse clicks 


// a.addEventListener("click", () => {
//     boom.currentTime = 0;
//     boom.play();
// })
// s.addEventListener("click", () => {
//     clap.currentTime = 0;
//     clap.play();
// })
// d.addEventListener("click", () => {
//     hihat.play();
// })
// f.addEventListener("click", () => {
//     kick.play();
// })
// g.addEventListener("click", () => {
//     openhat.play();
// })
// h.addEventListener("click", () => {
//     ride.play();
// })
// j.addEventListener("click", () => {
//     snare.play();
// })
// k.addEventListener("click", () => {
//     tink.play();
// })
// l.addEventListener("click", () => {
//     tom.play();
// })

//
window.addEventListener('click', function(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(e);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play(e);
});


window.addEventListener('keydown', function(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(e);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play(a);
});

// ALTERNATIVE METHOD NOTES
// DECLARING FUNCTION OF CLICK ON IMAGE/BUTTON
// function boom() {
//     const audio = document.getElementById("boom");
//     audio.currentTime = 0;
//     audio.play();
// }

// stop propegation