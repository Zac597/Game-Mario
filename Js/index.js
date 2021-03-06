const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const Jump =  () => {
    mario.classList.add('Jump-animation')

    setTimeout(() => {

    mario.classList.remove('Jump-animation')

    }, 500)
}

const loop = setInterval(() => {



    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition)

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;


        mario.src = '/imgs/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px'

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', Jump);