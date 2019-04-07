function randomNumber() {

    const img = document.getElementsByClassName('img')[0];
    const int = Math.floor(Math.random() * Math.floor(3));
    hideRules();
    switch (int) {
        case 0:
            img.setAttribute('src', './img/rock.jpg');
            img.setAttribute('alt', 'rock');
            return 'rock';
        case 1:
            img.setAttribute('src', './img/paper.jpg');
            img.setAttribute('alt', 'paper');
            return 'paper';
        case 2:
            img.setAttribute('src', './img/scissors.jpg');
            img.setAttribute('alt', 'scissors');
            return 'scissors';
    }

}

function hideRules() {
    let rulesSection = document.getElementsByClassName('rules-section')[0];
    rulesSection.style.display = 'none';
}
