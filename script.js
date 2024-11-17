var curs = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-b")

//qury selector is used to move html documnts into java scrit
document.addEventListener("mousemove",function(dets){
    // console.log(dets.y)
    curs.style.left=dets.x+"px"
    curs.style.top=dets.y+"px"
    blur.style.left=dets.x-150+"px"
    blur.style.top=dets.y-150+"px"
})


gsap.to("#nav",{
    backgroundColor : "#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers :true,
        start:"top -10%",
        end:"top -10%",
        scrub:1

    }
    
});

gsap.to("#main",{

    backgroundColor:"#000",
    duration:3,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30vh",
        end:"top -70vh",
        scrub:2,
        // scrub se time duration ka pta lgta


    }

});