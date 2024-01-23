const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function skewthegola(){

    var xscale = 1
    var yscale = 1

    var xprev = 0
    var yprev = 0

    window.addEventListener("mousemove", function(dets){

        clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev)
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev)      

        xprev = dets.clientX
        yprev = dets.clientY

        circuleFollower(xscale,yscale);

        var timeout = setTimeout(function(){

        document.querySelector("#mouse-follower").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`

        }, 100)

    })
}

function circuleFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
    document.querySelector("#mouse-follower").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`
    })
}

function firstPageAnime(){
    var tl = gsap.timeline();

    tl.from("#navbar",{
        y:'-10%',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInout
    })
    tl.to(".hidebox-text",{
        y: 0,
        duration: 1,
        stagger:.2,
        ease: Expo.easeInout
    })
    tl.from("#heading-bottom",{
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease: Expo.easeInout
    })
}

skewthegola();
circuleFollower();
firstPageAnime();

document.querySelectorAll(".elem").forEach(function(elem){

    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mousemove", function(dets){
       var diff = dets.clientY - elem.getBoundingClientRect().top;
       var diffrot = rotate - dets.clientX
       rotate = dets.clientX
       gsap.to(elem.querySelector("img"), {
        opacity:1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
       });
    });
});
document.querySelectorAll(".elem").forEach(function(elem){

    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mouseleave", function(dets){
       var diff = dets.clientY - elem.getBoundingClientRect().top;
       var diffrot = rotate - dets.clientX
       rotate = dets.clientX
       gsap.to(elem.querySelector("img"), {
        opacity:0,
        ease: Power3,
       });
    });
});

