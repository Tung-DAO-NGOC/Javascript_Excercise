// random ID
function randomID() {
	return Math.floor(Math.random() * 1000);
}

function convertPrice(number) {
	return number.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}

// Khai báo danh sách sản phẩm

let products = [
	{
		id: randomID(),
		name: "Áo kiểu nữ cam đất phối cổ trắng dập ly",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.",
		price: 250000,
		image: "https://image.yes24.vn/Upload/ProductImage/anhduong201605/1947415_L.jpg?width=550&height=550",
		count: 1,
	},
	{
		id: randomID(),
		name: "Áo trắng bèo lé đen tay loe dễ thương",
		description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.",
		price: 350000,
		image: "https://image.yes24.vn/Upload/ProductImage/anhduong201605/1914666_L.jpg?width=550&height=550",
		count: 1,
	},
];

//Khai báo biến
const productsEle = document.querySelector(".products");
const countEle = document.querySelector("span.count");
const subTotalEl = document.querySelector(".subtotal > span");
const vatEl = document.querySelector(".vat > span");
const discountEl = document.querySelector(".discount > span");
const totalEl = document.querySelector(".total > span");
const promoButtonEl = document.querySelector(".promotion > button");
const promoInputEl = document.querySelector(".promotion > input");
const discountHide = document.querySelector("li.discount");
// Function Render

function updateCount(arr) {
	let totalProduct = 0;
	arr.forEach((element) => {
		totalProduct += element.count;
	});
	countEle.innerText = `${totalProduct} ${totalProduct > 1 ? "items" : "item"} in the bag`;
}

function renderProduct(arr) {
	productsEle.innerHTML = "";

	if (arr.length == 0) {
		productsEle.insertAdjacentHTML("afterbegin", "<li>Không có sản phẩm nào trong giỏ hàng</li>");
		document.querySelector(".option-container").style.display = "none";
		updateCount(arr);
		updateTotalMoney(arr);
		return;
	}

	arr.forEach((element) => {
		productsEle.innerHTML += `
        <li class="row">
            <div class="col left">
                <div class="thumbnail">
                    <a href="#">
                        <img src="${element.image}" alt=""/>
                    </a>
                </div>
                <div class="detail">
                    <div class="name">
                        <a href="#">${element.name}</a>
                    </div>
                    <div class="description">
                        ${element.description}
                    </div>
                    <div class="price">${convertPrice(element.price)}</div>
                </div>
            </div>
            <div class="col right">
                <div class="quantity">
                <input type="number" class="quantity" step="1" value="${element.count}" onchange="changeCount(${
			element.id
		}, event)"/>
                </div>
                <div class="remove">
                    <span class="close" onclick="removeProduct(${element.id})">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </li>`;
	});
	updateCount(arr);
	updateTotalMoney(arr);
}

function removeProduct(id) {
	for (let i = 0; i < products.length; i++) {
		if (products[i].id === id) {
			products.splice(i, 1);
			renderProduct(products);
			return;
		}
	}
}

function changeCount(id, event) {
	products.forEach((element) => {
		if (element.id === id) {
			element.count = Number(event.target.value);
			renderProduct(products);
		}
	});
}

function updateTotalMoney(array) {
	let totalMoney = 0;
	array.forEach((element) => {
		totalMoney += element.price * element.count;
	});

	subTotalEl.innerHTML = convertPrice(totalMoney);
	vatEl.innerHTML = convertPrice(totalMoney * 0.05);
	totalEl.innerHTML = convertPrice(totalMoney * 1.05);

	return totalMoney;
}

function updateDiscount(array, discount) {
	const subTotalMoney = updateTotalMoney(array);
	const discountMoney = Math.round(subTotalMoney * (discount / 100));
	const totalMoney = Math.round(subTotalMoney * 1.05 - discountMoney);
	discountHide.classList.remove("hide");
	discountEl.innerHTML = convertPrice(discountMoney);
	totalEl.innerHTML = convertPrice(totalMoney);
}

renderProduct(products);

// Danh sách mã giảm giá
let promotionCode = {
	A: 10,
	B: 20,
	C: 30,
	D: 40,
};

promoButtonEl.addEventListener(`click`, () => {
	const promoCodeInput = promoInputEl.value;
	for (const code in promotionCode) {
		if (code === promoCodeInput) {
			updateDiscount(products, promotionCode[code]);
			return;
		}
	}
	updateTotalMoney(products);
	discountHide.classList.add("hide");
	alert("Wrong promotion code!");
});

console.log(`Hello world`);
console.log(`Hello world`);
