const noButton = document.querySelector('.no');
const yesButton = document.querySelector('.yes');
const heartContainer = document.querySelector('.heart-container');

noButton.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noButton.clientWidth);
    const y = Math.random() * (window.innerHeight - noButton.clientHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', () => {
    const giantHeart = document.createElement('div');
    giantHeart.className = 'giant-heart';

    const loveText = document.createElement('p');
    loveText.textContent = 'Eu te amo';
    loveText.style.position = 'absolute';
    loveText.style.top = '60%';
    loveText.style.left = '30%';
    loveText.style.transform = 'translate(-50%, -50%)'; // Centraliza o texto horizontal e verticalmente
    loveText.style.color = 'black'; // Ajuste a cor do texto conforme necessário

    giantHeart.appendChild(loveText); 

    document.body.appendChild(giantHeart);
    setTimeout(() => {
        giantHeart.remove();
    }, 3000);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${window.innerHeight}px`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
    
}

function playAudio() {
    var audio = document.getElementById("musica");
    audio.play();
}

window.addEventListener('DOMContentLoaded', playAudio);

setInterval(createHeart, 300);