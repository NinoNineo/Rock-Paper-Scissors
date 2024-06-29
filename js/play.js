const paper = document.getElementById('paper');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const playyyyy = document.getElementById('ground');
const text = document.getElementById('textBox');
const computer = document.getElementById('ai');
const paperAi = document.getElementById('paperai');
const compRock = document.getElementById('rockai');
const compScissors = document.getElementById('scissorsai');
const winPanel = document.getElementById('win');
const winText = document.getElementById('winTitle');
const reBTN = document.getElementById('reBTN');
const scoreText = document.getElementById('score');
let score = 0;
function onButtoClick(user) {
    let AIval = Math.floor(Math.random() * 3) + 1;
    let aiChoice;
    if (AIval == 1) {
        aiChoice = 'paper';
        paperAi.style.display = 'block';
    } else if (AIval == 2) {
        compRock.style.display = 'block';
        aiChoice = 'rock';
    } else {
        compScissors.style.display = 'block';
        aiChoice = 'scissors';
    }
    scoreText.innerHTML = score;
    if (user == aiChoice) {
        paper.style.pointerEvents = 'none';
        rock.style.pointerEvents = 'none';
        scissors.style.pointerEvents = 'none';
        winPanel.style.display = 'block';
        winText.innerHTML = "DRAW";
    }
    else if ((user == 'rock' && aiChoice == 'scissors') ||
        (user == 'paper' && aiChoice == 'rock') ||
        (user == 'scissors' && aiChoice == 'paper')) {
        paper.style.pointerEvents = 'none';
        rock.style.pointerEvents = 'none';
        scissors.style.pointerEvents = 'none';
        winPanel.style.display = 'block';
        winText.innerHTML = "YOU WIN!";
        score++;
        scoreText.innerHTML = score;
    }
    else {
        paper.style.pointerEvents = 'none';
        rock.style.pointerEvents = 'none';
        scissors.style.pointerEvents = 'none';
        winPanel.style.display = 'block';
        winText.innerHTML = "YOU LOSE";
        score--;
        if (score <= 0) {
            score = 0;
        }
        scoreText.innerHTML = score;
    }
}
paper.addEventListener("click", function () {
    rock.style.display = 'none';
    scissors.style.display = 'none';
    playyyyy.style.backgroundImage = 'none';
    text.style.display = 'flex';
    computer.style.display = 'block';
    playyyyy.style.width = '700px';
    onButtoClick('paper');
});
scissors.addEventListener("click", function () {
    paper.style.display = 'none';
    rock.style.display = 'none';
    playyyyy.style.backgroundImage = 'none';
    text.style.display = 'flex';
    computer.style.display = 'block';
    playyyyy.style.width = '700px';
    onButtoClick('scissors');
});
rock.addEventListener("click", function () {
    paper.style.display = 'none';
    scissors.style.display = 'none';
    playyyyy.style.backgroundImage = 'none';
    text.style.display = 'flex';
    computer.style.display = 'block';
    playyyyy.style.width = '700px';
    rock.style.marginLeft = '-28px';
    onButtoClick('rock');
});
reBTN.addEventListener('click', function () {
    paper.style.display = 'block';
    rock.style.display = 'block';
    scissors.style.display = 'block';
    playyyyy.style.backgroundImage = '';
    paperAi.style.display = 'none';
    compRock.style.display = 'none';
    compScissors.style.display = 'none';
    rock.style.margin = 'auto';
    text.style.display = 'none';
    computer.style.display = 'none';
    playyyyy.style.width = '';
    winPanel.style.display = 'none';
    paper.style.pointerEvents = 'auto';
    rock.style.pointerEvents = 'auto';
    scissors.style.pointerEvents = 'auto';
});