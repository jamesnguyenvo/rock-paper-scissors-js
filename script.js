const scoreboard = document.querySelector('.score');
var scoreValues = document.createElement('p');
const playerChoiceButton = document.querySelectorAll('.choice');

function computerPlay() {
    let choice = Math.floor((Math.random() * 3))
    if (choice == 0) {
        return 'rock';
    } else if (choice == 1) {
        return 'paper';
    } else if (choice == 2) {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        alert('Draw! You both chose ' + playerSelection);
        return 'draw';
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        alert('You win! You beat scissors with rock.');
        return 'win';
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        alert('You lose. You lost to paper with rock.');
        return 'lose';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        alert('You lose. You lost to scissors with paper.');
        return 'lose';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        alert('You win! You beat rock wth paper.');
        return 'win';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        alert('You lose. You lost to rock with scissors.')
        return 'lose';
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        alert('You win! You beat paper with scissors.');
        return 'win';
    }
}

function updateScore(result, scores) {
    if (result === 'draw') {
        scores['draws'] += 1;
    } else if (result === 'win') { 
        scores['wins'] += 1;
    } else {
        scores['losses'] += 1;
    }
    scoreValues.textContent = 'wins: ' + scores['wins'] +
                              ' losses: ' + scores['losses'] +
                              ' draws: ' + scores['draws'];
    scoreboard.appendChild(scoreValues);
}

function game() { 
    let playerChoice, computerChoice;
    let scores = {wins: 0, losses: 0, draws: 0};
    
    playerChoiceButton.forEach((button) => {
        button.addEventListener('click', function () {
            playerChoice = button.id;
            computerChoice = computerPlay();
            result = playRound(playerChoice, computerChoice);
            updateScore(result, scores);
        });
    });
    

    // for (let i = 0; i < 5; i++) {
    //     let properInput = false;
        
    //     while (!(properInput)) {
    //         playerChoice = prompt('Type in your choice of rock, paper, or scissors.');
    //         if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
    //             properInput = true;
    //         } else {
    //             alert('Please enter a valid input.');
    //         }
    //     }

    //     // computer makes choice
    //     computerChoice = computerPlay();
    //     // compare choices
    //     result = playRound(playerChoice, computerChoice);
    //     updateScore(result, scores);
    // }

    // if (scores['wins'] > scores['losses']) {
    //     alert(`You win! with a score of ${scores['wins']} to ${scores['losses']}.`);
    // } else if (scores['wins'] < scores['losses']) {
    //     alert(`You lose with a score of ${scores['wins']} to ${scores['losses']}.`);
    // } else {
    //     alert('Draw!');
    // }

}

game();
