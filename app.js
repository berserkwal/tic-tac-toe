const scoreP1Display = document.querySelector(".p1");
const scoreP2Display = document.querySelector(".p2");
const turnStatus = document.querySelector(".turn-status>h2");
const gameContainer = document.querySelector(".game-container");
const boxes = document.querySelectorAll(".boxes")
const leftRight = document.querySelector(".l-r")
const topBottom = document.querySelector(".t-b")
const diagonal = document.querySelector(".diag")
const resetSwitch = document.querySelector(".reset-button");
const p1Info = document.querySelector(".p1-info")
const p2Info = document.querySelector(".p2-info")
const scoreLabels = document.querySelector(".score")

let playerOne = prompt("Enter the name of Player 1") || "Player 1"
let playerTwo = prompt("Enter the name of Player 2") || "Player 2"

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

turnStatus.innerHTML = `${playerOne}'s turn.`;
scoreLabels.setAttribute("data-one", playerOne)
scoreLabels.setAttribute("data-two", playerTwo)
p1Info.innerText = playerOne
p2Info.innerText = playerTwo

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

	playerOneTurn ? turnStatus.innerHTML = `${playerOne}'s turn.` : turnStatus.innerHTML = `${playerTwo}'s turn.`
	gameContainer.classList.remove("p1win")
	gameContainer.classList.remove("p2win")
})

boxes[0].addEventListener("click", () => {
	boxes[0].disabled = true
	if (playerOneTurn) {
		boxes[0].classList.add("xed");
		playerOneTurn = false;
		gameArray[0][0] = p1Entry;
		turnStatus.innerHTML = `${playerTwo}'s turn.`;
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxes[0].classList.add("ohd");
		playerOneTurn = true;
		gameArray[0][0] = p2Entry;
		turnStatus.innerHTML = `${playerOne}'s turn.`;
		victory(checkStatus(p2Entry), p2Entry)
	}
});

boxes[1].addEventListener("click", () => {
	boxes[1].disabled = true
	if (playerOneTurn) {
		boxes[1].classList.add("xed");
		playerOneTurn = false;
		gameArray[0][1] = p1Entry;
		turnStatus.innerHTML = `${playerTwo}'s turn.`;
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxes[1].classList.add("ohd");
		playerOneTurn = true;
		gameArray[0][1] = p2Entry;
		turnStatus.innerHTML = `${playerOne}'s turn.`;
		victory(checkStatus(p2Entry), p2Entry)
	}
});

boxes[2].addEventListener("click", () => {
	if (playerOneTurn) {
		boxes[2].classList.add("xed");
		boxes[2].disabled = true
		playerOneTurn = false;
		gameArray[0][2] = p1Entry;
		turnStatus.innerHTML = `${playerTwo}'s turn.`;
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxes[2].classList.add("ohd");
		boxes[2].disabled = true
		playerOneTurn = true;
		gameArray[0][2] = p2Entry;
		turnStatus.innerHTML = `${playerOne}'s turn.`;
		victory(checkStatus(p2Entry), p2Entry)
	}
});

boxes[3].addEventListener("click", () => {
	if (playerOneTurn) {
		boxes[3].classList.add("xed");
		boxes[3].disabled = true
		playerOneTurn = false;
		gameArray[1][0] = p1Entry;
		turnStatus.innerHTML = `${playerTwo}'s turn.`;
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxes[3].classList.add("ohd");
		boxes[3].disabled = true
		playerOneTurn = true;
		gameArray[1][0] = p2Entry;
		turnStatus.innerHTML = `${playerOne}'s turn.`;
		victory(checkStatus(p2Entry), p2Entry)
	}
});

boxes[4].addEventListener("click", () => {
	if (playerOneTurn) {
		boxes[4].classList.add("xed");
		boxes[4].disabled = true
		playerOneTurn = false;
		gameArray[1][1] = p1Entry;
		turnStatus.innerHTML = `${playerTwo}'s turn.`;
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxes[4].classList.add("ohd");
		boxes[4].disabled = true
		playerOneTurn = true;
		gameArray[1][1] = p2Entry;
		turnStatus.innerHTML = `${playerOne}'s turn.`;
		victory(checkStatus(p2Entry), p2Entry)
	}
});

boxes[5].addEventListener("click", () => {
	if (playerOneTurn) {
		boxes[5].classList.add("xed");
		boxes[5].disabled = true
		playerOneTurn = false;
		gameArray[1][2] = p1Entry;
		turnStatus.innerHTML = `${playerTwo}'s turn.`;
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxes[5].classList.add("ohd");
		boxes[5].disabled = true
		playerOneTurn = true;
		gameArray[1][2] = p2Entry;
		turnStatus.innerHTML = `${playerOne}'s turn.`;
		victory(checkStatus(p2Entry), p2Entry)
	}
});

boxes[6].addEventListener("click", () => {
	if (playerOneTurn) {
		boxes[6].classList.add("xed");
		boxes[6].disabled = true
		playerOneTurn = false;
		gameArray[2][0] = p1Entry;
		turnStatus.innerHTML = `${playerTwo}'s turn.`;
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxes[6].classList.add("ohd");
		boxes[6].disabled = true
		playerOneTurn = true;
		gameArray[2][0] = p2Entry;
		turnStatus.innerHTML = `${playerOne}'s turn.`;
		victory(checkStatus(p2Entry), p2Entry)
	}
});

boxes[7].addEventListener("click", () => {
	if (playerOneTurn) {
		boxes[7].classList.add("xed");
		boxes[7].disabled = true
		playerOneTurn = false;
		gameArray[2][1] = p1Entry;
		turnStatus.innerHTML = `${playerTwo}'s turn.`;
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxes[7].classList.add("ohd");
		boxes[7].disabled = true
		playerOneTurn = true;
		gameArray[2][1] = p2Entry;
		turnStatus.innerHTML = `${playerOne}'s turn.`;
		victory(checkStatus(p2Entry), p2Entry)
	}
});

boxes[8].addEventListener("click", () => {
	if (playerOneTurn) {
		boxes[8].classList.add("xed");
		boxes[8].disabled = true
		playerOneTurn = false;
		gameArray[2][2] = p1Entry;
		turnStatus.innerHTML = `${playerTwo}'s turn.`;
		victory(checkStatus(p1Entry), p1Entry)
	} else {
		boxes[8].classList.add("ohd");
		boxes[8].disabled = true
		playerOneTurn = true;
		gameArray[2][2] = p2Entry;
		turnStatus.innerHTML = `${playerOne}'s turn.`;
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
		playerOneTurn = true;
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
			turnStatus.innerHTML = `${playerOne} wins.`;
			gameContainer.classList.add("p1win")
			playerOneTurn = true
		} else {
			scoreP2Display.innerHTML = ++p2Score;
			turnStatus.innerHTML = `${playerTwo} wins.`;
			gameContainer.classList.add("p2win")
			playerOneTurn = false
		}
		for (a of boxes) {
			a.disabled = true
		}
		if (keyword === "h1") {
			leftRight.classList.remove("hidden")
			leftRight.style.top = `${(parseInt(window.getComputedStyle(boxes[0]).getPropertyValue("height")) - 10) / 2}px`
		}
		else if (keyword === "h2") {
			leftRight.classList.remove("hidden")
			leftRight.style.top = `${(parseInt(window.getComputedStyle(boxes[0]).getPropertyValue("height")) - 10) / 2 + parseInt(window.getComputedStyle(boxes[0]).getPropertyValue("height"))}px`
		}
		else if (keyword === "h3") {
			leftRight.classList.remove("hidden")
			leftRight.style.top = `${(parseInt(window.getComputedStyle(boxes[0]).getPropertyValue("height")) - 10) / 2 + parseInt(window.getComputedStyle(boxes[0]).getPropertyValue("height")) * 2}px`
		}
		else if (keyword === "v1") {
			topBottom.classList.remove("hidden")
			topBottom.style.left = `${(parseInt(window.getComputedStyle(boxes[0]).getPropertyValue("height")) - 10) / 2}px`
		}
		else if (keyword === "v2") {
			topBottom.classList.remove("hidden")
			topBottom.style.left = `${(parseInt(window.getComputedStyle(boxes[0]).getPropertyValue("height")) - 10) / 2 + parseInt(window.getComputedStyle(boxes[0]).getPropertyValue("height"))}px`
		}
		else if (keyword === "v3") {
			topBottom.classList.remove("hidden")
			topBottom.style.left = `${(parseInt(window.getComputedStyle(boxes[0]).getPropertyValue("height")) - 10) / 2 + parseInt(window.getComputedStyle(boxes[0]).getPropertyValue("height")) * 2}px`
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