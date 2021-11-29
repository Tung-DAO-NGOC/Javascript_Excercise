const colors = ["#3498db", "#9b59b6", "#e74c3c", "#2c3e50", "#d35400"];

const btnAddBox = document.querySelector(`#btn`);
const points = document.querySelector(`span.points`);
const showBox = document.querySelector(`div.boxes`);

const stackIDbox = [];

const addBox = function () {
	const addBoxID = function (element) {
		let idBox = 0;
		if (stackIDbox.length > 0) {
			idBox = stackIDbox.shift();
		} else {
			idBox = document.getElementsByClassName(`box`).length + 1;
		}
		element.setAttribute(`id`, `box${idBox}`);
	};

	for (let i = 0; i < colors.length; i++) {
		const box = document.createElement(`div`);
		box.classList.add(`box`);
		addBoxID(box);
		box.style.backgroundColor = colors[i];
		showBox.appendChild(box);
		box.addEventListener(`click`, () => {
			let number = parseInt(box.id.slice(3), 10);
			stackIDbox.push(number);
			stackIDbox.sort();
			box.parentElement.removeChild(box);
			pointCheck();
		});
	}
};

const pointCheck = function () {
	const number = document.getElementsByClassName(`box`).length;
	points.innerText = ` ${number}`;
};

const init = function () {
	addBox();
	pointCheck();
};

btnAddBox.addEventListener(`click`, () => {
	addBox();
	pointCheck();
});

init();
