gsap.set('.btnforvideo',{opacity:0,y:10,scale:0});

setInterval(function(){
    gsap.to('.load',{
        y:-100,
        opacity:0,
        ease:"power1.out"
    },"same")
    gsap.to('.btnforvideo',{
        y:0,
        delay:0.2,
        scale:1,
        opacity:1,
        ease:"power2.in"
    })
    

},6000)

document.querySelector('.btnforvideo').addEventListener('click', function(){
    document.querySelector('.btnforvideo').classList.add('scale-0');
    let tl = gsap.timeline();
    tl.to('.loader',{
        opacity:0,
        z:0,
        ease:"power2.out"
    });
    document.querySelector('#video').play()
    setInterval(function(){
        document.querySelector('#video').pause()

    },11000);
    tl.to('#video',{
        opacity:0,
        delay:11
    })
    
})


window.addEventListener("scroll",function(dets){
    console.log(dets)
})