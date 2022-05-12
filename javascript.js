var beepOne = $("#beep")[0]
$(".sound")
    .mouseenter(function () {
        beepOne.play();
    });
var buttonOne = $("#button")[0]
$(".media")
    .mouseenter(function () {
        buttonOne.play();
    });

 // Navigation menu js 
let header = document.querySelector("header");
let scrollBtn = document.querySelector(".scroll-button a")

let val;

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        header.classList.add("sticky");
        scrollBtn.style.display = "block";
    }
    else{
        header.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}
// Side navigation menu js 
let body = document.querySelector("body")
let menu = document.querySelector(".navbar")
let menuBtn = document.querySelector(".menu-btn")
let cancelBtn = document.querySelector(".cancel-button")

menuBtn.onclick = function(){
    menu.classList.add("active")
    menuBtn.style.opacity = "0"
    menuBtn.style.pointerEvents = "none";
    body.style.overflowx = "hidden";
    scrollBtn.style.pointerEvents  =  "none";
}
cancelBtn.onclick = function(){
    menu.classList.remove("active")
    menuBtn.style.opacity = "1"
    menuBtn.style.pointerEvents = "auto";
    body.style.overflowx = "auto";
    scrollBtn.style.pointerEvents  =  "auto";
}
//  Side navagation bar close while clicking navigation links 
let navLinks = document.querySelectorAll(".sound li a");
for (var i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener("click", function() {
        menu.classList.remove("active") ;
        menuBtn.style.opacity = "1"
        menuBtn.style.pointerEvents = "auto";
        body.style.overflowx = "auto";
        scrollBtn.style.pointerEvents  =  "auto";
    })
}

