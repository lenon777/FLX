function finalResult(points, loss, draw) {
    const mainWrapper = document.getElementsByClassName('main-wrapper')[0];
    const buttonSection = document.getElementsByClassName('button-section')[0];
    const rulesSection = document.getElementsByClassName('rules-section')[0];
    mainWrapper.removeChild(buttonSection);
    rulesSection.innerHTML = `
    <h1>GAME OVER</h1>
    `;
    const img = document.getElementsByClassName('img')[0];
    const gameInfo = document.getElementsByClassName('game-info')[0];

    if (points >= 2 || (points === 1 && draw === 2)) {
        setTimeout(() => {

            img.setAttribute('src', './img/winner.jpg');
            img.setAttribute('alt', 'winner');
            gameInfo.innerHTML = 'You are a winner!'
        }, 2000)
    } else if (loss >= 2 || (loss === 1 && draw === 2)) {
        setTimeout(() => {
            img.setAttribute('src', './img/looser.gif');
            img.setAttribute('alt', 'looser');
            gameInfo.innerHTML = 'You are a looser!'
        }, 3000)
    } else if (draw === 3 || (points === 1 && loss === 1 && draw === 1)) {
        setTimeout(() => {
            img.setAttribute('src', './img/draw.jpg');
            img.setAttribute('alt', 'draw');
            gameInfo.innerHTML = 'A Draw!'
        }, 3000)
    }

    const newGameBtn = document.createElement('button');
    newGameBtn.setAttribute('class', 'new-game-button');
    newGameBtn.innerText = 'Play again';
    wrapper.appendChild(newGameBtn);
    newGameBtn.onclick = () => {
        location.reload();
    };
}
