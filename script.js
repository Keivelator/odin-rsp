function getComputerChoice() {
    let rando = Math.floor(Math.random() * 3);

    if (rando === 0) return 'rock';
    if (rando === 1) return 'scissors';
    if (rando === 2) return 'paper';
}

function getPlayerChoice() {
    while (0 < 1) {
        let choice = prompt("Choose rock, scissors or paper...");
        if (choice.toLowerCase() === 'rock'
        || choice.toLowerCase() === 'scissors'
        || choice.toLowerCase() === 'paper') {
        	const lowCasedChoice = choice.toLowerCase();
			return lowCasedChoice;
        } else {
            alert("Please enter the right choice");
        }
    }
}

function playRound() {
	let playerSelection = getPlayerChoice();
	let computerSelection = getComputerChoice();

	//return "It's a tie!" etc
    let roundStatus = judgeRound(playerSelection, computerSelection);

	printRoundResult(playerSelection,
		computerSelection,
		roundStatus);

	incrementScore(roundStatus);
}

function judgeRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) return "It's a tie!";
	if (playerSelection === 'rock') {
		if (computerSelection === 'scissors') return "You win!";
		if (computerSelection === 'paper') return "You lose!";
	} else if (playerSelection === 'scissors') {
		if (computerSelection === 'rock') return "You lose!";
		if (computerSelection === 'paper') return "You win!";
	} else if (playerSelection === 'paper') {
		if (computerSelection === 'rock') return "You win!";
		if (computerSelection === 'scissors') return "You lose!";
	}
}

function printRoundResult(playerSelection, computerSelection, roundStatus) {
	console.log(`You used ${playerSelection} and computer used ${computerSelection}`);
	console.log(roundStatus);
}

function game (rounds) {
    for (i = 1; i <= rounds; i++) {
		playRound();
    }

	printGameResult(playerScore, computerScore);
}

function printGameResult(playerScore, computerScore) {
	console.log(`Player score is ${playerScore} and Computer score is ${computerScore}`);
	if (playerScore === computerScore) {
		console.log('The whole game is a tie!');
	} else if (playerScore > computerScore) {
		console.log('The victor is the player!');
	} else if (playerScore < computerScore) {
		console.log('The victor is the computer!');
	} 
}

function incrementScore(roundStatus) {
	if (roundStatus === "It's a tie!") playerScore += 0;
	if (roundStatus === "You win!") playerScore++;
	if (roundStatus === "You lose!") computerScore++;
}

function resetScore() {
	playerScore = 0;
	computerScore = 0;
}

let playerScore = 0;
let computerScore = 0;

game(10);