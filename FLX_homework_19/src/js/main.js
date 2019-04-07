let wrapper = document.getElementsByClassName('wrapper')[0];

const mainPage =
    `<div class="main-wrapper">
        <div class="rules-section">
            <h2>Game rules:</h2>
            <ul class="list-section">
                <li>Scissors beats a paper</li>
                <li>Paper beats a rock</li>
                <li>Rock beats a scissors</li>
                <li>And we play three rounds!</li>
            </ul>
            <h1>Let’s play!</h1>
        </div>
        <div class="button-section">
            <button id="rock-button">Rock</button>
            <button id="paper-button">Paper</button>
            <button id="scissors-button">Scissors</button>
            <button id="reset-button">Reset</button>
        </div>
        <div class="img-section">
        <img class="img" src="./img/gif.gif" alt="rock,paper,scissors">
        </div>
        <p class="game-info"></p>
    </div>`;
wrapper.innerHTML = mainPage;
listener();

