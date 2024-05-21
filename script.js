document.querySelector('#play').addEventListener('click', function(){
    document.querySelector('#video').play()
    document.querySelector('#play').classList.add('hidden')

    setInterval(function(){
        document.querySelector('#video').pause()

    },13000)
})