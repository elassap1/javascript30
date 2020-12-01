window.addEventListener('keydown', function(e){
    const cl = e;
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if(!audio)return;

    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`.keys[data-key="${e.keyCode}"]`);

    key.classList.add('play');
});

function removeTransition(e){
    if(e.propertyName !== 'transform')
    return;
    this.classList.remove('play');
}

const keys = document.querySelectorAll('.keys');
    keys.forEach(keys =>  keys.addEventListener('transitionend',removeTransition));
