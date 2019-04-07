function listener() {
    let gameCounter = 0;
    let points = 0;
    let loss = 0;
    let draw = 0;

    const rockButton = document.getElementById('rock-button');
    const paperButton = document.getElementById('paper-button');
    const scissorsButton = document.getElementById('scissors-button');
    const resetButton = document.getElementById('reset-button');
    let announcement = document.getElementsByClassName('game-info')[0];

    rockButton.addEventListener("click", () => {
        const result = randomNumber();

        if (result === 'scissors') {
            points++;
            gameCounter++;
            if (gameCounter > 2) {
                finalResult(points, loss, draw);
            }
            announcement.innerText = `Round ${gameCounter},  Rock vs. Scissors, You’ve WON!`;
        } else if (result === 'paper') {
            loss++;
            gameCounter++;
            if (gameCounter > 2) {
                finalResult(points, loss, draw);
            }
            announcement.innerText = `Round ${gameCounter},  Rock vs. Paper, You’ve LOST!`;
        } else {
            draw++;
            gameCounter++;
            announcement.innerText = `Round ${gameCounter},  Rock vs. Rock, a draw`;
            if (gameCounter > 2) {
                finalResult(points, loss, draw);
            }
        }
    });
    paperButton.addEventListener("click", () => {
        const result = randomNumber();
        if (randomNumber() === 'rock') {
            points++;
            gameCounter++;
            if (gameCounter > 2) {
                finalResult(points, loss, draw);
            }
            announcement.innerText = `Round ${gameCounter},  Paper vs. Rock, You’ve WON!`;
        } else if (result === 'scissors') {
            loss++;
            gameCounter++;
            if (gameCounter > 2) {
                finalResult(points, loss, draw);
            }
            announcement.innerText = `Round ${gameCounter},  Paper vs. Scissors, You’ve LOST!`;
        } else {
            draw++;
            gameCounter++;
            announcement.innerText = `Round ${gameCounter},  Paper vs. Paper, a draw`;
            if (gameCounter > 2) {
                finalResult(points, loss, draw);
            }
        }
    });
    scissorsButton.addEventListener('click', () => {
        const result = randomNumber();
        if (result === 'paper') {
            points++;
            gameCounter++;
            if (gameCounter > 2) {
                finalResult(points, loss, draw);
            }
            announcement.innerText = `Round ${gameCounter},  Scissors vs. Paper, You’ve WON!`;
        } else if (result === 'rock') {
            loss++;
            gameCounter++;
            if (gameCounter > 2) {
                finalResult(points, loss, draw);
            }
            announcement.innerText = `Round ${gameCounter},  Scissors vs. Rock, You’ve LOST!`;
        } else {
            draw++;
            gameCounter++;
            announcement.innerText = `Round ${gameCounter},  Scissors vs. Scissors, a draw`;
            if (gameCounter > 2) {
                finalResult(points, loss, draw);
            }
        }
    });
    resetButton.addEventListener('click', () => {
        announcement.innerText = ``;
        gameCounter = 0;
        points = 0;
        loss = 0;
        draw = 0;
    });
}


