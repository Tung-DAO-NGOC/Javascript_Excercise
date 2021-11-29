"use strict";

const grades = [
	{ name: "John", grade: 8, sex: "M" },
	{ name: "Sarah", grade: 12, sex: "F" },
	{ name: "Bob", grade: 16, sex: "M" },
	{ name: "Johnny", grade: 2, sex: "M" },
	{ name: "Ethan", grade: 4, sex: "M" },
	{ name: "Paula", grade: 18, sex: "F" },
	{ name: "Donald", grade: 5, sex: "M" },
	{ name: "Jennifer", grade: 13, sex: "F" },
	{ name: "Courtney", grade: 15, sex: "F" },
	{ name: "Jane", grade: 9, sex: "F" },
];

const maleList = (array) => {
	return array.filter((element) => element.sex === `M`);
};

const femaleList = (array) => {
	return array.filter((ele) => ele.sex === `F`);
};

const maxGrade = (array) => {
	return Math.max(...array.map((ele) => ele.grade));
};

const minGrade = (array) => {
	return Math.min(...array.map((ele) => ele.grade));
};

const avgGrade = (array) => {
	return array.reduce((sum, nextEle) => sum + nextEle.grade, 0) / array.length;
};

const startByName = (array, char) => {
	return array.filter((ele) => ele.name.startsWith(char));
};

//Tìm thứ hạng trung bình của cả lớp

const avgGradeClass = (array) => {
	return avgGrade(array);
};

//Tìm thứ hạng trung bình của nam trong lớp

const avgMaleGradeClass = (array) => {
	return avgGrade(maleList(array));
};

//Tìm thứ hạng trung bình của Nữ trong lớp

const avgFemaleGradeClass = (array) => {
	return avgGrade(femaleList(array));
};
//Tìm thứ hạng cao nhất của Nam trong lớp

const maxMaleGrade = (array) => {
	return maxGrade(maleList(array));
};

//Tìm thứ hạng cao nhất của Nữ trong lớp

const maxFemaleGrade = (array) => {
	return maxGrade(femaleList(array));
};

//Tìm thứ hạng thấp nhất của Nam trong lớp

const minMaleGrade = (array) => {
	return minGrade(maleList(array));
};

//Tìm thứ hạng thấp nhất của Nữ trong lớp
const minFemaleGrade = (array) => {
	return minGrade(femaleList(array));
};
//Tìm thứ hạng cao nhất của cả lớp

const maxGradeClass = (array) => {
	return maxGrade(array);
};

//Tìm thứ hạng thấp nhất của cả lớp
const minGradeClass = (array) => {
	return minGrade(array);
};
//Lấy ra danh sách tất cả học viên nữ trong lớp
const provideFemaleList = (array) => {
	return femaleList(array);
};

//Sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
const sortByName = (array) => {
	return [...array].sort((a, b) => a.name.localeCompare(b.name));
};

//Sắp xếp thứ hạng học viên theo chiều giảm dần
const sortByGradeDesc = (array) => {
	return [...array].sort((a, b) => b.grade - a.grade);
};

//Lấy ra học viên nữ có tên bắt đầu bằng "J"
const startFemaleJ = (array) => {
	return startByName(femaleList(array), `J`);
};

//Lấy ra top 5 người có thứ hạng cao nhất
const topFiveGrade = (array) => {
	return sortByGradeDesc(array).slice(0, 5);
};
