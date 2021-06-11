// *gameBoard module intialization
const gameBoard = (function () {
	let board = [null, null, null, null, null, null, null, null, null];
	// let board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];

	function getGameBoard() {
		return board;
	}

	function resetGameBoard() {
		board = [null, null, null, null, null, null, null, null, null];
	}

	function setGameBoardValue(index, entry) {
		if (!board[index]) {
			board[index] = entry;
		}
	}

	function getTileStatus(index) {
		return board[index];
	}

	function isGameDraw() {
		return board.every((item) => !(item === null));
	}

	return {
		getGameBoard,
		resetGameBoard,
		setGameBoardValue,
		getTileStatus,
		isGameDraw,
	};
})();

// * playerModule module initialization
const playerModule = (function () {
	function player(name, entry, id) {
		return { name, entry, score: 0, id };
	}

	const playerOne = player("Player 1", "X", 0);
	const playerTwo = player("Player 2", "O", 1);

	function updatePlayerOneInfo(key, value) {
		if (playerOne.hasOwnProperty(key)) {
			playerOne[key] = value;
		}
	}

	function updatePlayerTwoInfo(key, value) {
		if (playerTwo.hasOwnProperty(key)) {
			playerTwo[key] = value;
		}
	}

	function getPlayerOne() {
		return {
			name: playerOne.name,
			entry: playerOne.entry,
			id: playerOne.id,
		};
	}

	function getPlayerTwo() {
		return {
			name: playerTwo.name,
			entry: playerTwo.entry,
			id: playerTwo.id,
		};
	}

	function incrementPlayerOneScore() {
		playerOne.score++;
	}
	function incrementPlayerTwoScore() {
		playerTwo.score++;
	}

	function resetScores() {
		playerOne.score = 0;
		playerTwo.score = 0;
	}

	function getScores() {
		return [playerOne.score, playerTwo.score];
	}

	return {
		updatePlayerOneInfo,
		updatePlayerTwoInfo,
		getPlayerOne,
		getPlayerTwo,
		incrementPlayerOneScore,
		incrementPlayerTwoScore,
		resetScores,
		getScores,
	};
})();

// * gameStatus module initialization
const gameStatus = (function () {
	let winningEntries = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	let turnCounter = 0;
	function playerArray() {
		return [playerModule.getPlayerOne(), playerModule.getPlayerTwo()];
	}

	function changeTurn() {
		turnCounter++;
		displayController.cachedDOM.turnStatus.textContent = `${
			getCurrentPlayer().name
		}'${
			getCurrentPlayer().name[getCurrentPlayer().name.length - 1] === "s"
				? ""
				: "s"
		} turn`;
	}

	function resetTurn() {
		turnCounter = 0;
		displayController.cachedDOM.turnStatus.textContent = `${
			getCurrentPlayer().name
		}'${
			getCurrentPlayer().name[getCurrentPlayer().name.length - 1] === "s"
				? ""
				: "s"
		} turn`;
	}

	function getCurrentPlayer() {
		return playerArray()[turnCounter % 2];
	}

	function checkOutcome() {
		for (let item of winningEntries) {
			if (
				gameBoard.getGameBoard()[item[0]] == getCurrentPlayer().entry &&
				gameBoard.getGameBoard()[item[1]] == getCurrentPlayer().entry &&
				gameBoard.getGameBoard()[item[2]] == getCurrentPlayer().entry
			) {
				return `${winningEntries.indexOf(item)}`;
			}
		}
		if (gameBoard.isGameDraw()) {
			return `D`;
		}
	}

	function gameOver() {
		let combo = checkOutcome();
		let iL = displayController.cachedDOM.indicationLines;
		displayController.disableTiles();
		if (combo === "D") {
			console.log("draw");
			displayController.cachedDOM.turnStatus.textContent = "Game is a draw.";
		} else {
			displayController.cachedDOM.turnStatus.textContent = `${
				getCurrentPlayer().name
			} wins`;
			displayController.cachedDOM.gameContainer.classList.add(
				`id${getCurrentPlayer().id}`
			);
			displayController.cachedDOM.gameContainer.classList.remove(
				`id${+!getCurrentPlayer().id}`
			);

			if (!getCurrentPlayer().id) playerModule.incrementPlayerOneScore();
			else playerModule.incrementPlayerTwoScore();

			displayController.cachedDOM.scoreBoardScore[0].textContent =
				playerModule.getScores()[0];
			displayController.cachedDOM.scoreBoardScore[1].textContent =
				playerModule.getScores()[1];

			if (Number(combo) < 3) {
				iL[0].style.top = `${Number(combo) * 100 + 45}px`;
				iL[0].classList.remove("invisible");
			} else if (Number(combo) < 6) {
				iL[1].style.left = `${(Number(combo) % 3) * 100 + 45}px`;
				iL[1].classList.remove("invisible");
			} else {
				/* iL[2].style.setProperty(
					"--scaling",
					`${-1 * (Number(combo) % 2) || 1}`
				); */
				iL[2].style.transform = `scaleX(${
					-1 * (Number(combo) % 2) || 1
				}) rotate(45deg)`;
				iL[2].classList.remove("invisible");
			}
		}
		console.log(combo);
	}

	return { getCurrentPlayer, changeTurn, checkOutcome, gameOver, resetTurn };
})();

// * displayController module initialization
const displayController = (function () {
	const cachedDOM = {
		gameContainer: document.querySelector(".game-container"),
		boxes: document.querySelectorAll(".boxes"),
		scoreBoard: document.querySelector(".score"),
		scoreBoardScore: document.querySelectorAll(".score span"),
		indicationLines: document.querySelectorAll(".lines"),
		turnStatus: document.querySelector(".turn-status"),
		resetButtons: document.querySelectorAll(".reset-button"),
		modal: document.querySelector(".modal"),
	};

	function tileClickFunction() {
		let index = this.dataset.index;
		if (!gameBoard.isGameDraw()) {
			if (!gameBoard.getTileStatus(index)) {
				gameBoard.setGameBoardValue(index, gameStatus.getCurrentPlayer().entry);
				this.classList.add(gameStatus.getCurrentPlayer().entry);
				this.disabled = true;
				if (gameStatus.checkOutcome()) {
					gameStatus.gameOver();
				} else gameStatus.changeTurn();
			}
		}
	}

	function disableTiles() {
		cachedDOM.boxes.forEach((item) => {
			item.disabled = true;
		});
	}
	function enableTiles() {
		cachedDOM.boxes.forEach((item) => {
			item.disabled = false;
		});
	}

	function resetBoard() {
		gameBoard.resetGameBoard();
		cachedDOM.indicationLines.forEach((item) => {
			item.classList.add("invisible");
		});
		cachedDOM.boxes.forEach((item) => {
			item.classList.remove("X");
			item.classList.remove("O");
			item.disabled = false;
		});
		gameStatus.changeTurn();
	}

	function resetScoreBoard() {
		playerModule.resetScores();
		cachedDOM.scoreBoardScore.forEach((item) => {
			item.textContent = 0;
		});
		gameStatus.resetTurn();
	}

	cachedDOM.boxes.forEach((item) => {
		item.addEventListener("click", tileClickFunction);
	});

	cachedDOM.turnStatus.textContent = `${gameStatus.getCurrentPlayer().name}'${
		gameStatus.getCurrentPlayer().name[
			gameStatus.getCurrentPlayer().name.length - 1
		] === "s"
			? ""
			: "s"
	} turn`;

	cachedDOM.resetButtons[0].addEventListener("click", resetBoard);
	cachedDOM.resetButtons[1].addEventListener("click", () => {
		resetBoard();
		resetScoreBoard();
	});

	return { cachedDOM, disableTiles, enableTiles, resetBoard };
})();

(function () {
	let scoreBoard = document.querySelector(".score");
	let turnStatus = document.querySelector(".turn-status");
	let parent = document.querySelector(".modal");
	parent.classList.remove("hidden");
	let closeButton = parent.querySelector(".close-button");
	let submitButton = parent.querySelector("button");

	let inputs = parent.querySelectorAll("input");

	closeButton.addEventListener("click", () => {
		parent.classList.add("hidden");
	});

	submitButton.addEventListener("click", (evt) => {
		evt.preventDefault();
		if (inputs[0].value && inputs[1].value) {
			playerModule.updatePlayerOneInfo("name", inputs[0].value);
			playerModule.updatePlayerTwoInfo("name", inputs[1].value);
		}
		parent.classList.add("hidden");
		turnStatus.textContent = `${gameStatus.getCurrentPlayer().name}'${
			gameStatus.getCurrentPlayer().name[
				gameStatus.getCurrentPlayer().name.length - 1
			] === "s"
				? ""
				: "s"
		} turn`;

		scoreBoard.dataset.one = playerModule.getPlayerOne().name;
		scoreBoard.dataset.two = playerModule.getPlayerTwo().name;
	});
})();
