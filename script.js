const egg = document.getElementById('egg');
const scoreDisplay = document.getElementById('score');
let score = 0;

function randomPosition() {
    const gameArea = document.getElementById('gameArea');
    const x = Math.floor(Math.random() * (gameArea.clientWidth - egg.clientWidth));
    const y = Math.floor(Math.random() * (gameArea.clientHeight - egg.clientHeight));
    return { x, y };
}

function moveEgg() {
    const position = randomPosition();
    egg.style.left = `${position.x}px`;
    egg.style.top = `${position.y}px`;
}

egg.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveEgg();
});

function startGame() {
    moveEgg();
    setInterval(moveEgg, 1000);  // Pindahkan telur setiap 1 detik
}

startGame();
