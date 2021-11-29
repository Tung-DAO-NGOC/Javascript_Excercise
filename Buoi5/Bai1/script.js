const btnadd = document.querySelector(`#add`);
const btntoggle = document.querySelector("#toggle");
const btnremove = document.querySelector(`#remove`);
const input = document.querySelector(`input#ul-add`);
const list = document.querySelector(`ul`);

// Thêm 1 nút "add" + 1 ô input để nhập text. Mỗi khi bấm nút vào nút "add" thêm 1 thẻ có nội dung là nội dung trong ô input vào cuối danh sách ul

btnadd.addEventListener(`click`, () => {
	const newListItem = document.createElement(`li`);
	newListItem.innerText = input.value;
	list.appendChild(newListItem);
});

// Thêm 1 nút "remove". Chức năng để xóa thẻ cuối cùng của danh sách ul

btnremove.addEventListener(`click`, () => {
	const lastListItem = list.querySelector(`li:last-child`);
	list.removeChild(lastListItem);
});

// Thêm 1 nút "Hide" trên đầu của danh sách Khi bấm vào "Hide" thì li sẽ ẩn. Đồng thời label của nút "Hide" => "Show"
// Và ngược lại Khi bấm vào "Show" thì li sẽ hiện. Đồng thời label của nút "Show" => "Hide"

btntoggle.addEventListener(`click`, () => {
	list.classList.toggle(`hidden`);
	btntoggle.innerText = btntoggle.innerText === `Show` ? `Hide` : `Show`;
});
