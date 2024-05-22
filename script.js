gsap.set('.btnforvideo',{opacity:0,y:10})

setInterval(function(){
    gsap.to('.load',{
        y:-100,
        opacity:0,
        ease:"power1.out"
    },"same")
    gsap.to('.btnforvideo',{
        y:0,
        delay:0.2,
        opacity:1,
        ease:"power2.in"
    })
    

},6000)

document.querySelector('.btnforvideo').addEventListener('click', function(){
    gsap.to('.loader',{
        opacity:0,
        ease:"power2.out"
    })
    document.querySelector('#video').play()
    setInterval(function(){
        document.querySelector('#video').pause()

    },11000)
})