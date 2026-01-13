let heroImg = document.querySelector('#hero-img')
let aboutImg = document.querySelector('#about-img')
let switchBtn = document.querySelector('.mode-switch')

let humanPhoto = '/nikolai.png'
let floppaPhoto = '/floppa.png'
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

function createSnowflakes(count = 50) {
    const container = document.createElement('div');
    container.className = 'snow-container';
    document.body.appendChild(container);

    for (let i = 0; i < count; i++) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.style.left = Math.random() * 100 + '%';
        flake.style.animationDuration = (Math.random() * 4 + 3) * 1.3 + 's';
        flake.style.animationDelay = Math.random() * 5 + 's'; // можно больше задержку
        flake.style.opacity = Math.random() * 0.7 + 0.3;
        flake.style.width = flake.style.height = Math.random() * 4 + 3 + 'px';

        container.appendChild(flake);
    }
}

createSnowflakes(60);

let block = document.querySelector('.about-card')
document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 35 * dx / window.innerWidth / 2
    let angleY = 35 * dy / window.innerHeight / 2
    block.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})
    let angleY = 35 * dy / window.innerHeight / 2
    block.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})
