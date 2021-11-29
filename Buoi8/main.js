// Query Selector

const elPriNumber = document.querySelector("#primary-number");
const elSecNumber = document.querySelector("#secondary-number");
const elOperator = document.querySelector("#operator");
const elInput = document.querySelector("input#result");

const elTime = document.querySelector("div.time");
const elScore = document.querySelector("span.score");

const elBanner = document.querySelector(".banner");
const elButtonStart = document.querySelector("button#start");

// Global variable
let firstGame = true;
const timePlay = 30;
let result;
let score;

// Event listener

elButtonStart.addEventListener("click", function () {
	eventStartGame();
});

elInput.addEventListener("change", function () {
	if (elInput.value === "") {
		alert("You did not provide an answer!");
	}

	if (Number(elInput.value) === result) {
		eventCorrectAnswer();
	} else {
		eventWrongAnswer();
	}
});

// Function event

function eventStartGame() {
	elTime.innerText = String(timePlay);
	elBanner.classList.add("hidden");
	toggleButtonStart();
	rollNumberAndOperator();
	countDown();
	elInput.disabled = false;
}
function eventTimeout() {
	elButtonStart.classList.remove("hidden");
	alert(`Your score is: ${Number(elScore.innerText)}`);
	blankPage();
}

function eventWrongAnswer() {
	elBanner.classList.remove("hidden");
	wrongBanner();
}
function eventCorrectAnswer() {
	elBanner.classList.remove("hidden");
	correctBanner();
	renderScore(++score);
	elInput.value = "";
	rollNumberAndOperator();
}

// Functions

function toggleButtonStart() {
	if (firstGame) {
		firstGame = false;
		elButtonStart.innerText = "Try again!";
	}
	score = 0;
	elButtonStart.classList.add("hidden");
}

function countDown() {
	let seconds = 0;
	let interval = setInterval(function () {
		seconds++;
		if (timePlay - seconds > -1) {
			elTime.innerText = String(timePlay - seconds);
		}
		if (seconds > timePlay) {
			clearInterval(interval);
			eventTimeout();
		}
	}, 1000);
}

function rollNumberAndOperator() {
	const ranNumberPri = Math.floor(Math.random() * 10) + 1;
	const ranNumberSec = Math.floor(Math.random() * 10) + 1;
	const ranOperator = Math.floor(Math.random() * 3) + 1;
	try {
		elPriNumber.innerText = String(ranNumberPri);
		elSecNumber.innerText = String(ranNumberSec);
		switch (ranOperator) {
			case 1:
				elOperator.innerText = "+";
				result = ranNumberPri + ranNumberSec;
				break;
			case 2:
				elOperator.innerText = "-";
				result = ranNumberPri - ranNumberSec;
				break;
			case 3:
				elOperator.innerText = "×";
				result = ranNumberPri * ranNumberSec;
				break;
			default:
				throw "Not supposed Value";
		}
	} catch (error) {
		console.log(error);
	}
}

function correctBanner() {
	elBanner.style.backgroundColor = "green";
	elBanner.innerText = "Correct answer!";
}

function wrongBanner() {
	elBanner.style.backgroundColor = "red";
	elBanner.innerText = "Wrong answer!";
}

function renderScore(number) {
	let stringNumber = String(number);
	if (stringNumber.length === 1) {
		stringNumber = "0" + stringNumber;
	}
	elScore.innerText = stringNumber;
}

function blankPage() {
	elTime.innerText = String(timePlay);
	elBanner.classList.add("hidden");
	elPriNumber.innerText = "";
	elSecNumber.innerText = "";
	elOperator.innerText = "";
	elInput.disabled = true;
	elInput.value = "";
	renderScore(0);
}

// Begin

window.onload = () => {
	blankPage();
};
