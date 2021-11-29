let student_warning = {
	students: [
		{
			name: "Lê Hoài Nam",
			email: "namlehoai@gmail.com",
			phone: "123456789",
			totalOff: 2,
			sessions: 14,
			detailInfo: [
				{
					date: "01-09-2020",
					note: "Xin nghỉ ốm",
					teacher_name: "Bùi Hiên",
				},
				{
					date: "05-09-2020",
					note: "Buồn vì thất tình",
					teacher_name: "Nguyễn Hàn Duy",
				},
			],
		},
		{
			name: "Đỗ Đăng Nguyên",
			email: "nguyen@gmail.com",
			phone: "0123987654",
			totalOff: 2,
			sessions: 14,
			detailInfo: [
				{
					date: "01-09-2020",
					note: "Mưa to nên ngại đi học",
					teacher_name: "Bùi Hiên",
				},
				{
					date: "05-09-2020",
					note: "Trượt lô, nên rút học phí để đánh",
					teacher_name: "Nguyễn Hàn Duy",
				},
			],
		},
		{
			name: "Nguyễn Xuân Ba",
			email: "3nx92nd@gmail.com",
			phone: "0344005987",
			totalOff: 3,
			sessions: 14,
			detailInfo: [
				{
					date: "01-09-2020",
					note: "Đang training không đi học được",
					teacher_name: "Bùi Hiên",
				},
				{
					date: "07-09-2020",
					note: "Soạn giáo án đặc vụ 0175",
					teacher_name: "Nguyễn Hàn Duy",
				},
				{
					date: "10-09-2020",
					note: "Ganks team còng lưng nên chưa đi học được",
					teacher_name: "Nguyễn Hàn Duy",
				},
			],
		},
	],
	class: "Lập trình Game 2D Canvas",
	course: "Lập trình Game",
	sessions: 14,
	teachers: [
		{
			name: "Bùi Hiên",
			email: "hien@techmaster.vn",
			phone: "0123456789",
		},
		{
			name: "Nguyễn Hàn Duy",
			email: "duy@techmaster.vn",
			phone: "0987654321",
		},
	],
};
const classInner = document.querySelector(`.class-inner`);
const tableBody = document.querySelector(`tbody`);
const createTable = () => {
	const createRowSpan = (span, innerText, parentElement) => {
		const data = document.createElement(`td`);
		data.innerHTML = innerText;
		data.rowSpan = span;
		parentElement.appendChild(data);
	};

	for (let stdNo = 0; stdNo < student_warning.students.length; stdNo++) {
		const studentInfo = student_warning.students[stdNo];
		const detailLength = studentInfo.detailInfo.length;

		for (let reasonNo = 0; reasonNo < detailLength; reasonNo++) {
			const rowInfo = document.createElement(`tr`);
			if (reasonNo === 0) {
				createRowSpan(detailLength, "" + (stdNo + 1), rowInfo);
				createRowSpan(detailLength, studentInfo.name, rowInfo);
				createRowSpan(detailLength, studentInfo.email, rowInfo);
				createRowSpan(detailLength, studentInfo.phone, rowInfo);
				createRowSpan(detailLength, `${studentInfo.totalOff}\\${studentInfo.sessions}`, rowInfo);
			}
			createRowSpan(1, studentInfo.detailInfo[reasonNo].date, rowInfo);
			createRowSpan(1, studentInfo.detailInfo[reasonNo].note, rowInfo);
			createRowSpan(1, studentInfo.detailInfo[reasonNo].teacher_name, rowInfo);

			tableBody.appendChild(rowInfo);
		}
	}
};

const createClassDetail = () => {
	const createInfoText = (context) => {
		const text = document.createElement(`p`);
		text.classList.add(`info`);
		text.innerHTML = context;
		classInner.appendChild(text);
	};
	createInfoText(`<strong> Lớp học </strong>: ${student_warning.class}`);
	createInfoText(`<strong> Thuộc khóa học </strong>: ${student_warning.course}`);

	//Create List
	const listDiv = document.createElement(`div`);
	const textList = document.createElement(`p`);
	textList.classList.add(`info`);
	textList.innerHTML = `<strong> Danh sách giảng viên </strong>`;
	listDiv.appendChild(textList);
	const listTeacher = document.createElement(`ul`);
	student_warning.teachers.forEach((teacher) => {
		const itemTeacher = document.createElement(`li`);
		itemTeacher.innerText = `${teacher.name} (${teacher.email} - ${teacher.phone})`;
		listTeacher.appendChild(itemTeacher);
	});
	listDiv.appendChild(listTeacher);

	classInner.appendChild(listDiv);
	//-----
	createInfoText(`<strong> Tổng số buổi </strong>: ${student_warning.sessions}`);
};

const init = () => {
	createTable();
	createClassDetail();
};

init();
