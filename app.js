const btn1 = document.querySelector('.Crush');
const btn2 = document.querySelector('.Kick');
const btn3 = document.querySelector('.Snare');
const btn4 = document.querySelector('.Tom');
const btn5 = document.querySelector('.a');
const btn6 = document.querySelector('.b');
const btn7 = document.querySelector('.c');
const btn8 = document.querySelector('.d');

const crash = () => {
    btn5.play();
}

const Kick = () => {
    btn6.play();
}

const snare = () => {
    btn7.play();
}

const tom = () => {
    btn8.play();
}

window.addEventListener('keydown', (eve) => {
    if (eve.key == 'c'){
        btn5.play();
        btn1.classList.add('touchkey');
    }
    else if (eve.key == 'k'){
        btn6.play();
        btn2.classList.add('touchkey');
    }
    else if (eve.key == 's'){
        btn7.play();
        btn3.classList.add('touchkey');
    }
    else if (eve.key == 't') {
        btn8.play();
        btn4.classList.add('touchkey');
    }
    
})

window.addEventListener('keyup', (eve) => {
    if (eve.key == 'c'){
        btn1.classList.remove('touchkey');
    }
    else if (eve.key == 'k'){
        btn2.classList.remove('touchkey');
    }
    else if (eve.key == 's'){
        btn3.classList.remove('touchkey');
    }
    else if (eve.key == 't') {
        btn4.classList.remove('touchkey');
    }   
})