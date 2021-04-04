var userScore = 0;
var computerScore = 0;
var userScore_h1 = document.querySelector(".user-score");
var computerScore_h1 = document.querySelector(".computer-score");
const paper = document.querySelector(".paper");
const stone = document.querySelector(".stone");
const scissor = document.querySelector(".scissor");
const message = document.querySelector(".message");

function game(userChoice) {
	var choice = convertToWord(userChoice);
	const number = Math.floor(Math.random() * 3);
	const choices = ["r", "p", "s"];
	const computerChoices = choices[number];
	switch (userChoice + computerChoices) {
	case 'rs':
	case 'pr':
	case 'sp':
		message.innerHTML = `${convertToWord(userChoice)}<sub>(User)</sub>destroys ${convertToWord(computerChoices)}<sub>(Computer)</sub>.You win 🔥🔥`;
		document.getElementById(choice).classList.add('green-glow');
		setTimeout(function () {
			document.getElementById(choice).classList.remove('green-glow')
		}, 300);
		userScore++;
		console.log(userScore + " " + computerScore);
		break;
	case 'sr':
	case 'rp':
	case 'ps':
		message.innerHTML = `${convertToWord(computerChoices)}<sub>(User)</sub>destroys ${convertToWord(userChoice)}<sub>(Computer)</sub>.You Lose 💩💩`;
		document.getElementById(choice).classList.add('red-glow');
		setTimeout(function () {
			document.getElementById(choice).classList.remove('red-glow')
		}, 300);
		computerScore++;
		console.log(userScore + " " + computerScore) break;
	case 'rr':
	case 'pp':
	case 'ss':
		message.innerHTML = `${convertToWord(userChoice)}<sub>(User)</sub>and ${convertToWord(computerChoices)}<sub>(Computer)</sub>.Its Draw`;
		document.getElementById(choice).classList.add('brown-glow');
		setTimeout(function () {
			document.getElementById(choice).classList.remove('brown-glow')
		}, 300);
		console.log(userScore + " " + computerScore);
		break;
	}
	userScore_h1.innerHTML = `${userScore}`;
	computerScore_h1.innerHTML = `${computerScore}`;
	if (userScore === 15 || computerScore === 15) {
		if (userScore > computerScore) {
			message.innerHTML = `${convertToWord(userChoice)}beats ${convertToWord(computerChoices)}.You win the match 🏆🏆`;
		} else {
			message.innerHTML = `${convertToWord(computerChoices)}beats ${convertToWord(userChoice)}.You Lose the match 🤗🤗`;
		}
		userScore = 0;
		computerScore = 0;
	}
}

function convertToWord(letter) {
	if (letter === 'r') {
		return letter = "Stone";
	} else if (letter === 's') {
		return letter = "Scissor";
	} else if (letter === 'p') {
		return letter = "Paper";
	}
}

function main() {
	paper.addEventListener("click", function () {
		game("p");
	});
	scissor.addEventListener("click", function () {
		game("s");
	});
	stone.addEventListener("click", function () {
		game("r");
	});
}
main();
