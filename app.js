const scoreP1Display = document.querySelector(".p1");
const scoreP2Display = document.querySelector(".p2");
const turnStatus = document.querySelector(".turn-status>h2");
const gameContainer = document.querySelector(".game-container");
const boxes = document.querySelectorAll(".boxes")
const boxOne = document.querySelector(".box-1");
const boxTwo = document.querySelector(".box-2");
const boxThree = document.querySelector(".box-3");
const boxFour = document.querySelector(".box-4");
const boxFive = document.querySelector(".box-5");
const boxSix = document.querySelector(".box-6");
const boxSeven = document.querySelector(".box-7");
const boxEight = document.querySelector(".box-8");
const boxNine = document.querySelector(".box-9");
const leftRight = document.querySelector(".l-r")
const topBottom = document.querySelector(".t-b")
const diagonal = document.querySelector(".diag")
const resetSwitch = document.querySelector(".reset-button")

let gCHeight = parseInt(window.getComputedStyle(gameContainer).getPropertyValue("height"))

diagonal.style.width = `${Math.round(Math.sqrt(gCHeight ** 2 + gCHeight ** 2)) - 32}px`
diagonal.style.top = `${gCHeight / 2 - 10}px`

let playerOneTurn = true;
let gameArray = [[], [], []];
let p1Score = 0
let p2Score = 0
// let gameArray = [["X", , "X"], ["O", "X", "O"], ["O", "X", "O"]];
let isGameOver = false;
// let isDecisive = false;
// let isGameDraw = false;
p1Entry = "X";
p2Entry = "O";


resetSwitch.addEventListener("click", () => {
	for (a of boxes) {
		a.disabled = false
		a.classList.remove("xed")
		a.classList.remove("ohd")
	}
	leftRight.classList.add("hidden")
	topBottom.classList.add("hidden")
	diagonal.classList.add("hidden")
	gameArray = [[], [], []];
	turnStatus.innerHTML = "Turn: Player 1";
	playerOneTurn = true;
	gameContainer.classList.remove("p1win")
	gameContainer.classList.remove("p2win")
})

boxOne.addEventListener("click", () => {
	boxOne.disabled = true
	if (playerOneTurn) {
		boxOne.classList.add("xed");
		playerOneTurn = false;
		gameArray[0][0] = p1Entry;
		turnStatus.innerHTML = "Turn: Player 2";
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxOne.classList.add("ohd");
		playerOneTurn = true;
		gameArray[0][0] = p2Entry;
		turnStatus.innerHTML = "Turn: Player 1";
		victory(checkStatus(p2Entry), p2Entry)
	}
});

boxTwo.addEventListener("click", () => {
	boxTwo.disabled = true
	if (playerOneTurn) {
		boxTwo.classList.add("xed");
		playerOneTurn = false;
		gameArray[0][1] = p1Entry;
		turnStatus.innerHTML = "Turn: Player 2";
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxTwo.classList.add("ohd");
		playerOneTurn = true;
		gameArray[0][1] = p2Entry;
		turnStatus.innerHTML = "Turn: Player 1";
		victory(checkStatus(p2Entry), p2Entry)
	}
});

boxThree.addEventListener("click", () => {
	if (playerOneTurn) {
		boxThree.classList.add("xed");
		boxThree.disabled = true
		playerOneTurn = false;
		gameArray[0][2] = p1Entry;
		turnStatus.innerHTML = "Turn: Player 2";
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxThree.classList.add("ohd");
		boxThree.disabled = true
		playerOneTurn = true;
		gameArray[0][2] = p2Entry;
		turnStatus.innerHTML = "Turn: Player 1";
		victory(checkStatus(p2Entry), p2Entry)
	}
});

boxFour.addEventListener("click", () => {
	if (playerOneTurn) {
		boxFour.classList.add("xed");
		boxFour.disabled = true
		playerOneTurn = false;
		gameArray[1][0] = p1Entry;
		turnStatus.innerHTML = "Turn: Player 2";
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxFour.classList.add("ohd");
		boxFour.disabled = true
		playerOneTurn = true;
		gameArray[1][0] = p2Entry;
		turnStatus.innerHTML = "Turn: Player 1";
		victory(checkStatus(p2Entry), p2Entry)
	}
});

boxFive.addEventListener("click", () => {
	if (playerOneTurn) {
		boxFive.classList.add("xed");
		boxFive.disabled = true
		playerOneTurn = false;
		gameArray[1][1] = p1Entry;
		turnStatus.innerHTML = "Turn: Player 2";
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxFive.classList.add("ohd");
		boxFive.disabled = true
		playerOneTurn = true;
		gameArray[1][1] = p2Entry;
		turnStatus.innerHTML = "Turn: Player 1";
		victory(checkStatus(p2Entry), p2Entry)
	}
});

boxSix.addEventListener("click", () => {
	if (playerOneTurn) {
		boxSix.classList.add("xed");
		boxSix.disabled = true
		playerOneTurn = false;
		gameArray[1][2] = p1Entry;
		turnStatus.innerHTML = "Turn: Player 2";
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxSix.classList.add("ohd");
		boxSix.disabled = true
		playerOneTurn = true;
		gameArray[1][2] = p2Entry;
		turnStatus.innerHTML = "Turn: Player 1";
		victory(checkStatus(p2Entry), p2Entry)
	}
});

boxSeven.addEventListener("click", () => {
	if (playerOneTurn) {
		boxSeven.classList.add("xed");
		boxSeven.disabled = true
		playerOneTurn = false;
		gameArray[2][0] = p1Entry;
		turnStatus.innerHTML = "Turn: Player 2";
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxSeven.classList.add("ohd");
		boxSeven.disabled = true
		playerOneTurn = true;
		gameArray[2][0] = p2Entry;
		turnStatus.innerHTML = "Turn: Player 1";
		victory(checkStatus(p2Entry), p2Entry)
	}
});

boxEight.addEventListener("click", () => {
	if (playerOneTurn) {
		boxEight.classList.add("xed");
		boxEight.disabled = true
		playerOneTurn = false;
		gameArray[2][1] = p1Entry;
		turnStatus.innerHTML = "Turn: Player 2";
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxEight.classList.add("ohd");
		boxEight.disabled = true
		playerOneTurn = true;
		gameArray[2][1] = p2Entry;
		turnStatus.innerHTML = "Turn: Player 1";
		victory(checkStatus(p2Entry), p2Entry)
	}
});

boxNine.addEventListener("click", () => {
	if (playerOneTurn) {
		boxNine.classList.add("xed");
		boxNine.disabled = true
		playerOneTurn = false;
		gameArray[2][2] = p1Entry;
		turnStatus.innerHTML = "Turn: Player 2";
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxNine.classList.add("ohd");
		boxNine.disabled = true
		playerOneTurn = true;
		gameArray[2][2] = p2Entry;
		turnStatus.innerHTML = "Turn: Player 1";
		victory(checkStatus(p2Entry), p2Entry)
	}
});


function checkStatus(playerEntry) {
	let winner = checkWinner(playerEntry);
	let fillCount = 0;
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			if (gameArray[i][j]) {
				fillCount++;
			}
		}
	}
	if (winner === "no winner" && fillCount === 9) {
		turnStatus.innerHTML = "Draw.";
		return "no winner";
	}
	if (winner === "no winner") {
		return winner;
	} else {
		return winner;
	}
}


function checkWinner(playerEntry) {
	if (gameArray[0][0] === playerEntry && gameArray[0][1] === playerEntry && gameArray[0][2] === playerEntry) {
		return "h1"
	}
	if (gameArray[1][0] === playerEntry && gameArray[1][1] === playerEntry && gameArray[1][2] === playerEntry) {
		return "h2"
	}
	if (gameArray[2][0] === playerEntry && gameArray[2][1] === playerEntry && gameArray[2][2] === playerEntry) {
		return "h3"
	}
	if (gameArray[0][0] === playerEntry && gameArray[1][0] === playerEntry && gameArray[2][0] === playerEntry) {
		return "v1"
	}
	if (gameArray[0][1] === playerEntry && gameArray[1][1] === playerEntry && gameArray[2][1] === playerEntry) {
		return "v2"
	}
	if (gameArray[0][2] === playerEntry && gameArray[1][2] === playerEntry && gameArray[2][2] === playerEntry) {
		return "v3"
	}
	if (gameArray[0][0] === playerEntry && gameArray[1][1] === playerEntry && gameArray[2][2] === playerEntry) {
		return "d1"
	}
	if (gameArray[0][2] === playerEntry && gameArray[1][1] === playerEntry && gameArray[2][0] === playerEntry) {
		return "d2"
	}
	return "no winner"
}

function victory(keyword, playerCode) {
	if (keyword === "no winner") {
		return
	} else {
		if (playerCode === "X") {
			scoreP1Display.innerHTML = ++p1Score;
			turnStatus.innerHTML = "Player 1 wins.";
			gameContainer.classList.add("p1win")
		} else {
			scoreP2Display.innerHTML = ++p2Score;
			turnStatus.innerHTML = "Player 2 wins.";
			gameContainer.classList.add("p2win")
		}
		for (a of boxes) {
			a.disabled = true
		}
		if (keyword === "h1") {
			leftRight.classList.remove("hidden")
			leftRight.style.top = `${(parseInt(window.getComputedStyle(boxOne).getPropertyValue("height")) - 10) / 2}px`
		}
		else if (keyword === "h2") {
			leftRight.classList.remove("hidden")
			leftRight.style.top = `${(parseInt(window.getComputedStyle(boxOne).getPropertyValue("height")) - 10) / 2 + parseInt(window.getComputedStyle(boxOne).getPropertyValue("height"))}px`
		}
		else if (keyword === "h3") {
			leftRight.classList.remove("hidden")
			leftRight.style.top = `${(parseInt(window.getComputedStyle(boxOne).getPropertyValue("height")) - 10) / 2 + parseInt(window.getComputedStyle(boxOne).getPropertyValue("height")) * 2}px`
		}
		else if (keyword === "v1") {
			topBottom.classList.remove("hidden")
			topBottom.style.left = `${(parseInt(window.getComputedStyle(boxOne).getPropertyValue("height")) - 10) / 2}px`
		}
		else if (keyword === "v2") {
			topBottom.classList.remove("hidden")
			topBottom.style.left = `${(parseInt(window.getComputedStyle(boxOne).getPropertyValue("height")) - 10) / 2 + parseInt(window.getComputedStyle(boxOne).getPropertyValue("height"))}px`
		}
		else if (keyword === "v3") {
			topBottom.classList.remove("hidden")
			topBottom.style.left = `${(parseInt(window.getComputedStyle(boxOne).getPropertyValue("height")) - 10) / 2 + parseInt(window.getComputedStyle(boxOne).getPropertyValue("height")) * 2}px`
		}
		else if (keyword === "d1") {
			diagonal.classList.remove("hidden")
			diagonal.style.transform = "translate(-51%, 0) rotate(45deg)"
		}
		else if (keyword === "d2") {
			diagonal.classList.remove("hidden")
			diagonal.style.transform = "translate(-51%, 0) rotate(135deg)"
		}
	}
}


console.log(gameArray);