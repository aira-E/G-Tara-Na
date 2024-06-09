const vinyl = document.querySelector(".vinyl");
const next_btn = document.querySelector("#carousel-control-next-testimonials");
const prev_btn = document.querySelector("#carousel-control-prev-testimonials");
const testimonial_container = document.querySelector(".testimonial_container");

let rotateDeg = 0;
let colorIndex = 0;

const colors = [
    "linear-gradient(210deg, rgb(10, 15, 27) 11.03%, rgb(10, 15, 27) 41.41%, rgb(84, 35, 35) 127.76%)",  
    "linear-gradient(210deg, rgb(10, 15, 27) 11.03%, rgb(10, 15, 27) 41.41%, rgba(52, 210, 212, 0.71) 127.76%)",
    "linear-gradient(210deg, rgb(10, 15, 27) 11.03%, rgb(10, 15, 27) 41.41%, rgba(168, 249, 79, 0.47) 127.76%)",
    "linear-gradient(210deg, rgb(10, 15, 27) 11.03%, rgb(10, 15, 27) 41.41%, rgb(50, 87, 143) 127.76%)"
];

next_btn.addEventListener('click', () => {
    rotateDeg = rotateDeg + 25;
    vinyl.style.transition = "transform 0.5s ease-in-out"; 
    vinyl.style.transform = "rotate(" + rotateDeg + "deg)";
    changeBackgroundColor();
});

prev_btn.addEventListener('click', () => {
    rotateDeg = rotateDeg - 25;
    vinyl.style.transition = "transform 0.5s ease-in-out"; 
    vinyl.style.transform = "rotate(" + rotateDeg + "deg)";
    changeBackgroundColor();
});

function changeBackgroundColor() {
    testimonial_container.style.background = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}
