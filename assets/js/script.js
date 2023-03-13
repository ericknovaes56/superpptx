const slide = document.querySelector(".slide")
const left  =document.getElementById("left")
const right  =document.getElementById("right")

left.addEventListener("click", ()=>{
    move(-300)
})
right.addEventListener("click", ()=>{
    move(300)
    if (slide.scrollLeft + slide.clientWidth >= slide.scrollWidth){
        move('-'+slide.clientWidth + slide.scrollLeft)
    }
})

setInterval(() => {
    move(300)
    if (slide.scrollLeft + slide.clientWidth >= slide.scrollWidth){
        move('-'+slide.clientWidth + slide.scrollLeft)
    }
}, 5000);
function move(value){
    slide.scrollBy(value,0)
}
ScrollReveal().reveal('.revel',{ reset: true, delay: 36 });