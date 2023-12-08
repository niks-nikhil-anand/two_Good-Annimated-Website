const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

let video = document.querySelector(".videourl");
let playbtn = document.querySelector("#play");

video.addEventListener("mouseenter" , function(){
    gsap.to(playbtn,{
        scale : 1,
        opacity : 1
    })
})
video.addEventListener("mouseleave" , function(){
    gsap.to(playbtn,{
        scale : 0,
        opacity : 0
    })
})

video.addEventListener("mousemove" , function(dets){
    // console.log(dets.y)
    gsap.to(playbtn,{
        left : dets.x - 50,
        top : dets.y - 80
    })
})


// Page 01 - Annimation 

gsap.from("#page1 .text-area h1" , {
    y:100,
    opacity:0,
    delay:0.5,
    duration:0.9,
    stagger:0.3
} )

gsap.from("#page1 .video-container" , {
     scale : 0.8,
    opacity:0,
    delay:1.3,
    duration:0.5
} )
