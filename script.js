const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const track = document.querySelector(".carousel-track");


let scrollStep = 270;

rightBtn.addEventListener("click", () => {
    if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0;
    }
    track.scrollBy({ left: scrollStep, behavior: 'smooth' });
});

leftBtn.addEventListener("click", () => {
    if (track.scrollLeft === 0) {
        track.scrollLeft = track.scrollWidth / 2;
    }
    track.scrollBy({ left: -scrollStep, behavior: 'smooth' });
});