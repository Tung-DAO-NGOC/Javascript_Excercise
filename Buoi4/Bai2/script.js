"use strict";

const p = document.querySelector("p");

// Bài 1: Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = "yellow")

const bai1 = function () {
	const textP = p.innerText.split(" ");
	for (let i = 0; i < textP.length; i++) {
		if (textP[i].length >= 8) {
			textP[i] = `<span class="highlight">${textP[i]}</span>`;
		}
	}
	p.innerHTML = textP.join(" ");
	const highLightList = document.querySelectorAll(".highlight");
	for (let i = 0; i < highLightList.length; i++) {
		highLightList[i].style["background"] = "yellow";
	}
};

// bài 2: Thêm link hiển thị text "facebook" link đến trang facebook.com ở sau thẻ p

const bai2 = function () {
	const fbLink = document.createElement("a");
	fbLink.href = "https://facebook.com";
	fbLink.innerText = "Facebook";
	p.insertAdjacentElement(`afterend`, fbLink);
};

// bài 3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ

const bai3 = function () {
	const divCount = document.createElement("div");
	divCount.innerText = `The number of words in the text is : ${textP.length}`;
	divCount.style[`color`] = `blue`;
	divCount.style[`font-size`] = `2rem`;
	p.insertAdjacentElement(`afterend`, divCount);
};

// Bài 4: thay thế các ký hiệu ? => 🤔, ! => 😲

const bai4 = function () {
	const splice = function (string, start, delCount, newSubStr) {
		let newString = "";
		return newString.concat(string.slice(0, start), newSubStr, string.slice(start + delCount));
	};

	let textP = p.innerText;
	for (let i = 0; i < textP.length; i++) {
		if (textP.charAt(i) === `?`) {
			textP = splice(textP, i, 1, ` 🤔`);
		}
		if (textP.charAt(i) === `!`) {
			textP = splice(textP, i, 1, ` 😲`);
		}
	}
	console.log(textP);
	p.innerText = textP;
};

bai1();
bai2();
bai3();
bai4();
