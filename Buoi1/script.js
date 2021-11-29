// Bài 1

const inputbai1 = prompt(`Input mark: 0 -> 100`);
const mark = Number.parseInt(inputbai1);
if (mark >= 85) {
	console.log(`A`);
} else if (mark >= 70 && mark < 85) {
	console.log(`B`);
} else if (mark >= 40 && mark < 70) {
	console.log(`C`);
} else {
	console.log(`D`);
}

// Bai 2

let inputbai2 = prompt(`Input day: 0 - 6`);
let day = Number.parseInt(inputbai2);
while (day < 0 || day > 6) {
	inputbai2 = prompt(`Input day: 0 - 6`);
	day = Number.parseInt(inputbai2);
}

switch (day) {
	case 0:
		console.log(`Chu Nhat`);
		break;
	case 1:
		console.log(`Thu hai`);
		break;
	case 2:
		console.log(`Thu ba`);
		break;
	case 3:
		console.log(`Thu tu`);
		break;
	case 4:
		console.log(`Thu nam`);
		break;
	case 5:
		console.log(`Thu sau`);
		break;
	case 6:
		console.log(`Thu bay`);
		break;
	default:
		break;
}

// Bai 3
const min = Number.parseInt(prompt(`Min value:`));
const max = Number.parseInt(prompt(`Max value:`));
const numberbai3 = Math.round(Math.random() * (max - min)) + min;
console.log(numberbai3);

// Bai 4:

const oddNumber = () => {
	let sum = 0;
	for (let index = 1; index <= 100; index++) {
		if (index % 2 === 0) {
			sum += index;
		}
	}
	return sum;
};
console.log(oddNumber());

const fooBar = () => {
	let sum = 0;
	for (let index = 1; index <= 100; index++) {
		if (index % 3 === 0 && index % 5 === 0) {
			sum += index;
		}
	}
	return sum;
};
console.log(fooBar());
