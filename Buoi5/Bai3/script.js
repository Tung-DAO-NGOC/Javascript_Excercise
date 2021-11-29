const container = document.querySelector(`.row.jobs`);
const initJobCard = document.querySelector(`.job-card`);
const displayNumber = document.querySelector(`#jobs-listed > span`);
const search = document.querySelector(`input#search`);
const showAll = document.querySelector(`button#show-all`);

const newJobTitle = [`JavaScript Developer`, `Java Developer`, `Python Developer`, `PHP Developer`];

const threeJob = function () {
	for (let i = 0; i < newJobTitle.length; i++) {
		const newJobCard = initJobCard.cloneNode(true);
		const titleJob = newJobCard.querySelector(`h3`);
		titleJob.innerText = newJobTitle[i];
		container.appendChild(newJobCard);
	}
};

const numberJob = function () {
	const numberJob =
		container.getElementsByClassName(`job-card`).length - container.getElementsByClassName(`hidden`).length;
	displayNumber.innerText = numberJob.toString();
};

const init = () => {
	threeJob();
	numberJob();
};

search.addEventListener(`input`, () => {
	clear();
	const allJob = container.querySelectorAll(`.job-card`);
	Array.from(allJob).map((ele) => {
		console.log(`Element ${ele.querySelector(`h3`).innerText}`);
		if (!ele.querySelector(`h3`).innerText.toLowerCase().includes(search.value)) {
			ele.classList.add(`hidden`);
		}
	});
	numberJob();
});

function clear() {
	const allJob = container.querySelectorAll(`.job-card`);
	Array.from(allJob).map((ele) => {
		ele.classList.remove(`hidden`);
	});
}

showAll.addEventListener(`click`, () => {
	search.value = "";
	clear();
});

init();
