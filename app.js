// SOUNDS
// Defining sounds as CONTSTANT VARIABLES with 'New Audio'

const boomSfx = new Audio('sounds/boom.wav')
const clapSfx = new Audio('sounds/clap.wav')
const hiHatSfx = new Audio('sounds/hihat.wav')
const kickSfx = new Audio('sounds/kick.wav')
const openHatSfx = new Audio('sounds/openhat.wav')
const rideSfx = new Audio('sounds/ride.wav')
const snareSfx = new Audio('sounds/snare.wav')
const tinkSfx = new Audio('sounds/tink.wav')
const tomSfx = new Audio('sounds/tom.wav')

// CONNECTING VARIABLES TO BUTTONS'TOGGLE' ANIMATION
const btnBoom = document.getElementById("a");
const btnClap = document.getElementById("s");
const btnHiHat = document.getElementById("d");
const btnKick = document.getElementById("f");
const btnOpenHat = document.getElementById("g");
const btnRide = document.getElementById("h");
const btnSnare = document.getElementById("j");
const btnTink = document.getElementById("k");
const btnTom = document.getElementById("l");


// KEYBOARD EVENTS
// Monitors the input in the browser (window) with the METHOD .addEventListener checking for the EVENT type KEYDOWN

window.addEventListener('keydown', (e) => {
    const key = e; // DEFINES the EVENT (e) as a variable named (KEY)
    console.log(e); // Console logs the EVENT, not need but good to check in console it's coming through
        if (e.key === "a") { // start of a IF / ELSE IF LOOP // checks if the EVENT listned to in line 17 
        boomSfx.currentTime = 0; // sets playback time 0 allowing it to be repeated / overlapped
        btnBoom.classList.toggle('animate'); // Uses Element.classList to temp CSS 'animate' attribute (toggle to)
        setTimeout(() => {
            btnBoom.classList.toggle('animate'); 
        }, 50) // Sets ms time for return to previous state
        boomSfx.play(e);


    } else if (e.key === "s"){
        clapSfx.currentTime = 0;
        btnClap.classList.toggle('animate');
        setTimeout(() => {
            btnClap.classList.toggle('animate');
        }, 50)
        clapSfx.play(e);


    }else if (e.key === "d"){
        hiHatSfx.currentTime = 0;
        btnHiHat.classList.toggle('animate');
        setTimeout(() => {
            btnHiHat.classList.toggle('animate');
        }, 50)
        hiHatSfx.play(e);


    }else if (e.key === "f"){
        kickSfx.currentTime = 0;
        btnKick.classList.toggle('animate');
        setTimeout(() => {
            btnKick.classList.toggle('animate');
        }, 50)
        kickSfx.play(e);


    }else if (e.key === "g"){
        openHatSfx.currentTime = 0;
        btnOpenHat.classList.toggle('animate');
        setTimeout(() => {
            btnOpenHat.classList.toggle('animate');
        }, 50)
        openHatSfx.play(e);


    }else if (e.key === "h"){
        rideSfx.currentTime = 0;
        btnRide.classList.toggle('animate');
        setTimeout(() => {
            btnRide.classList.toggle('animate');
        }, 50)
        rideSfx.play(e);


    }else if (e.key === "j"){
        snareSfx.currentTime = 0;
        btnSnare.classList.toggle('animate');
        setTimeout(() => {
            btnSnare.classList.toggle('animate');
        }, 50)
        snareSfx.play(e);


    }else if (e.key === "k"){
        tinkSfx.currentTime = 0;
        btnTink.classList.toggle('animate');
        setTimeout(() => {
            btnTink.classList.toggle('animate');
        }, 50)
        tinkSfx.play(e);


    }else if (e.key === "l"){
        tomSfx.currentTime = 0;
        btnTom.classList.toggle('animate');
        setTimeout(() => {
            btnTom.classList.toggle('animate');
        }, 50)
        tomSfx.play(e);}

    }
);


// BUTTON CLICKS
// Clunky, need to revise

const a = document.getElementById("a")
const s = document.getElementById("s")
const d = document.getElementById("d")
const f = document.getElementById("f")
const g = document.getElementById("g")
const h = document.getElementById("h")
const j = document.getElementById("j")
const k = document.getElementById("k")
const l = document.getElementById("l")



a.addEventListener("click", () => {
    boomSfx.currentTime = 0;
    boomSfx.play();
})
s.addEventListener("click", () => {
    clapSfx.currentTime = 0;
    clapSfx.play();
})
d.addEventListener("click", () => {
    hiHatSfx.currentTime = 0;
    hiHatSfx.play();
})
f.addEventListener("click", () => {
    kickSfx.currentTime = 0;
    kickSfx.play();
})
g.addEventListener("click", () => {
    openHatSfx.currentTime = 0;
    openHatSfx.play();
})
h.addEventListener("click", () => {
    rideSfx.currentTime = 0;
    rideSfx.play();
})
j.addEventListener("click", () => {
    snareSfx.currentTime = 0;
    snareSfx.play();
})
k.addEventListener("click", () => {
    tinkSfx.currentTime = 0;
    tinkSfx.play();
})
l.addEventListener("click", () => {
    tomSfx.currentTime = 0;
    tomSfx.play();
})

