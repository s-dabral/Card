var container = document.querySelector(".container");
var card = document.querySelector(".card");
var shoe = document.querySelector(".shoe img")
var title  = document.querySelector(".info h1")
var title1  = document.querySelector(".info h3")
var buttons = document.querySelector(".sizes")

container.addEventListener("mousemove",(e)=>{
    var xAngle = (window.innerWidth/2-e.pageX)/10;
    var yAngle = (window.innerWidth/2-e.pageY)/10;
    card.style.transform= `rotateY(${xAngle}deg) rotateX(${yAngle}deg)`
})
container.addEventListener("mouseenter",(e)=>{
    card.style.transition="none"
    shoe.style.transform="translateZ(200px) rotate(-45deg)"
    title.style.transform="translatez(150px)"
    title1.style.transform="translatez(100px)"
    buttons.style.transform = "translateZ(50px)"
})
container.addEventListener("mouseleave",(e)=>{
    card.style.transform = "rotateY(0deg)"
    card.style.transition="1s ease"
    shoe.style.transform="translateZ(0px) rotate(0deg)"
    title.style.transform="translatez(0px)"
    title1.style.transform="translatez(0px)"
    buttons.style.transform = "translateZ(0px)"
})