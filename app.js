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

	function isGameOver() {
		return board.every((item) => !(item === null));
	}

	return {
		getGameBoard,
		resetGameBoard,
		setGameBoardValue,
		getTileStatus,
		isGameOver,
	};
})();

// * playerModule module initialization
const playerModule = (function () {
	function player(name, entry) {
		return { name, entry, score: 0 };
	}

	const playerOne = player("Player 1", "X");
	const playerTwo = player("Player 2", "O");

	function updatePlayerOneInfo(key, value) {
		if (playerOne.hasOwnProperty(key)) {
			playerOne[key] = value;
		}
	}

	function updatePlayerTwoInfo(key, value) {
		if (playerOne.hasOwnProperty(key)) {
			playerOne[key] = value;
		}
	}

	function getPlayerOne() {
		return {
			name: playerOne.name,
			entry: playerOne.entry,
			score: playerOne.score,
		};
	}

	function getPlayerTwo() {
		return {
			name: playerTwo.name,
			entry: playerTwo.entry,
			score: playerTwo.score,
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

	return {
		updatePlayerOneInfo,
		updatePlayerTwoInfo,
		getPlayerOne,
		getPlayerTwo,
		incrementPlayerOneScore,
		incrementPlayerTwoScore,
		resetScores,
	};
})();

// * gameStatus module initialization
const gameStatus = (function () {
	let turnCounter = 0;
	let playerArray = [playerModule.getPlayerOne(), playerModule.getPlayerTwo()];
	currentPlayer = playerArray[0];

	function changeTurn() {
		turnCounter++;
	}

	function getCurrentPlayer() {
		return playerArray[turnCounter % 2];
	}

	function checkOutcome() {
		// * return true/false
	}

	return { getCurrentPlayer, changeTurn, checkOutcome };
})();

// * displayController module initialization
const displayController = (function () {
	function tileClickFunction() {
		let index = this.dataset.index;
		if (!gameBoard.isGameOver()) {
			if (!gameBoard.getTileStatus(index)) {
				gameBoard.setGameBoardValue(index, gameStatus.getCurrentPlayer().entry);
				console.log(`clicked tile ${index}`);
				this.classList.add(gameStatus.getCurrentPlayer().entry);
				// * checkOutcome()
				gameStatus.changeTurn();
				console.log(gameBoard.getGameBoard());
			}
		} else {
			console.log("game over");
		}
	}

	let gameContainer = document.querySelectorAll(".boxes");
	gameContainer.forEach((item) => {
		item.addEventListener("click", tileClickFunction);
	});
	// console.log(`scoreboard`);
})();
