const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("show");
});

const language = document.querySelector(".language");
const button = document.querySelector(".language-btn");

button.addEventListener("click", (e) => {
    e.stopPropagation();
    language.classList.toggle("active");
});

document.addEventListener("click", () => {
    language.classList.remove("active");
});

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");

let started = false;

/* Autoplay setelah interaksi pertama */

function startMusic(){

    if(started) return;

    started=true;

    music.volume=0;

    music.play();

    let volume=0;

    const fade=setInterval(()=>{

        volume+=0.02;

        music.volume=volume;

        if(volume>=0.35){

            music.volume=0.35;

            clearInterval(fade);

        }

    },100);

}

document.addEventListener("click", startMusic,{once:true});

document.addEventListener("touchstart", startMusic,{once:true});

/* Tombol Mute */

musicBtn.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicBtn.innerHTML='<i class="ri-volume-up-fill"></i>';

        musicBtn.classList.remove("muted");

    }

    else{

        music.pause();

        musicBtn.innerHTML='<i class="ri-volume-mute-fill"></i>';

        musicBtn.classList.add("muted");

    }

});