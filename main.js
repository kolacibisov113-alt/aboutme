let heroImg = document.querySelector('#hero-img')
let aboutImg = document.querySelector('#about-img')
let switchBtn = document.querySelector('.mode-switch')

let humanPhoto = 'nikolai.png'
let floppaPhoto = 'floppa.png'
let humanAbout = 'https://i.ibb.co/XkrMvFnF/cat3.png'
let floppaAbout = 'https://i.ibb.co/zWr4872R/cat1.png'

let isFloppa = false

function toggleMode(){
    isFloppa = !isFloppa

    if (isFloppa){
        heroImg.src = floppaPhoto
        heroImg.classList.add('floppa-mode')
        aboutImg.src = floppaAbout
        switchBtn.textContent = 'HUMAN MODE'
        document.querySelector('.logo').textContent = 'BigFloppa'
    } else {
        heroImg.src = humanPhoto
        heroImg.classList.remove('floppa-mode')
        aboutImg.src = humanAbout
        switchBtn.textContent = 'FLOPPA MODE'
        document.querySelector('.logo').textContent = 'FloppaDev'
    }
}
