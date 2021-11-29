"strict mode";
// // Bài tập Array

// // // 1.
// // const checkElementExist = function (array, number) {
// // 	let result = false;
// // 	for (let i = 0; i < array.length; i++) {
// // 		if (array[i] === number) {
// // 			result = true;
// // 			return result;
// // 		}
// // 	}
// // 	return result;
// // };

// 2.
// const max2Numbers = function (array) {
// 	let copyArray = array.sort((a, b) => a - b);
// 	console.log(copyArray);
// 	const maxValue = array[copyArray.length - 1];
// 	for (let i = copyArray.length - 1; i >= 0; i--) {
// 		if (copyArray[i] < maxValue) {
// 			console.log(i);
// 			return copyArray[i];
// 		}
// 	}
// };

// const testArray = [1, 3, 2, 4, 2, 7, 6, 7];
// console.log(testArray);
// console.log(max2Numbers(testArray));

// // // 3.
// // const randomElement = function (array) {
// // 	const index = Math.floor(Math.random() * array.length);
// // 	return array[index];
// // };

// // // 4.
// // const findMaxLengthElement = function (array) {
// // 	let maxLength = 0;
// // 	const result = [];
// // 	array.forEach((element) => {
// // 		if (element.length > maxLength) {
// // 			maxLength = element.length;
// // 			result = [];
// // 			result.push(element);
// // 		} else if (element.length === maxLength) {
// // 			result.push(element);
// // 		}
// // 	});
// // 	return result;
// // };

// // // 5.
// // const similarity = function (arr1, arr2) {
// // 	const result = [];
// // 	arr1.forEach((element) => {
// // 		if (arr2.includes(element)) {
// // 			result.push(element);
// // 		}
// // 	});
// // 	return result;
// // };

// // // 6.
// // const removeDuplicate = function (array) {
// // 	const result = [];
// // 	array.forEach((element) => {
// // 		if (!result.includes(element)) {
// // 			result.push(element);
// // 		}
// // 	});
// // 	return result;
// // };

// // 7.
// const randomHexCode = function () {
// 	let result = "#";
// 	let hexCode = "";
// 	let number = 0;
// 	for (let i = 0; i < 3; i++) {
// 		number = Math.floor(Math.random() * 256);
// 		hexCode = number.toString(16);
// 		result = result.concat(hexCode);
// 	}
// 	return result;
// };

// //8.
// const randomRgbCode = function () {
// 	const number1 = Math.floor(Math.random() * 256);
// 	const number2 = Math.floor(Math.random() * 256);
// 	const number3 = Math.floor(Math.random() * 256);
// 	const result = `rgb(${number1}, ${number2}, ${number3})`;
// 	return result;
// };

// // Bài tập String

// // 1.

// const checkStringExist = (str1, str2) => {
// 	return str1.toLocaleLowerCase().includes(str2.toLocaleLowerCase()) ||
// 		str2.toLocaleLowerCase().includes(str1.toLocaleLowerCase())
// 		? true
// 		: false;
// };

// // 2.

// const shortenString = function (str) {
// 	if (str.length <= 8) {
// 		return str;
// 	} else {
// 		let result = str.slice(0, 8);
// 		result += `...`;
// 		return result;
// 	}
// };

// // 3.
// const capitalizeString = function (str) {
// 	function capitalizePart(str) {
// 		str = str.toLocaleLowerCase();
// 		str = str.charAt(0).toLocaleUpperCase() + str.slice(1);
// 		return str;
// 	}
// 	let result = ``;
// 	const arrStr = str.split(` `);
// 	arrStr.forEach((element) => {
// 		result += `${capitalizePart(element)} `;
// 	});
// 	result = result.trim();
// 	return result;
// };

// // 4.

// const repeatString = function (stringInit, repNum) {
// 	let result = stringInit;
// 	for (let i = 0; i < repNum - 1; i++) {
// 		result += `-${stringInit}`;
// 	}
// 	return result;
// };

// // 5.

// const reverseString = function (stringInit) {
// 	let result = ``;
// 	for (let i = stringInit.length - 1; i >= 0; i--) {
// 		result += stringInit.charAt(i);
// 	}
// 	return result;
// };

// // 6.

// const checkSymmetricString = function (stringInit) {
// 	const arrStr = stringInit.split(` `);
// 	let morphString = ``;
// 	arrStr.forEach((element) => {
// 		element = element.toLocaleLowerCase();
// 		morphString += element;
// 	});
// 	for (let i = 0; i < Math.floor(morphString.length / 2); i++) {
// 		if (morphString.charAt(i) !== morphString.charAt(morphString.length - 1 - i)) {
// 			return false;
// 		}
// 	}
// 	return true;
// };

// // 7.

// const countNumberVowel = function (stringInit) {
// 	const vowel = `aoeui`;
// 	let count = 0;
// 	for (let i = 0; i < stringInit.length; i++) {
// 		if (vowel.includes(stringInit.charAt(i))) {
// 			count++;
// 		}
// 	}
// 	return count;
// };

// //8.
// const confirmEnding = function (str1, str2) {
// 	function ending(strCheck, strEnding) {
// 		for (let i = 0; i < strEnding.length; i++) {
// 			if (strCheck.charAt(strCheck.length - 1 - i) !== strEnding.charAt(strEnding.length - 1 - i)) {
// 				return false;
// 			}
// 		}
// 		return true;
// 	}
// 	return ending(str1, str2) || ending(str2, str1);
// };

// //9.
// const getFirstLetter = function (strInit) {
// 	let result = ``;
// 	const arrStr = strInit.split(` `);
// 	arrStr.forEach((element) => {
// 		result += `${element.toLocaleLowerCase().charAt(0)} `;
// 	});
// 	result = result.trim();
// 	return result;
// };

// // 10.
// const sortLetters = function (strInit) {
// 	let letterArr = [];
// 	for (let i = 0; i < strInit.length; i++) {
// 		if (strInit.charAt(i) !== ` `) {
// 			letterArr.push(strInit.charAt(i));
// 		}
// 	}
// 	letterArr = letterArr.sort();
// 	letterArr = letterArr.join(``);
// 	return letterArr;
// };

// // 11.
// const getLetterNoRepeat = function (strInit) {
// 	let result = [];
// 	const found = [];
// 	for (let i = 0; i < strInit.length; i++) {
// 		if (strInit.charAt(i) !== ` `) {
// 			if (!found.includes(strInit.charAt(i))) {
// 				found.push(strInit.charAt(i));
// 				result.push(strInit.charAt(i));
// 			} else {
// 				if (result.includes(strInit.charAt(i))) {
// 					result.splice(result.lastIndexOf(strInit.charAt(i)), 1);
// 				}
// 			}
// 		}
// 	}
// 	return result.join();
// };

// console.log(getLetterNoRepeat(`abdbce abcdf`));
