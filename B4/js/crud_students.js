// ------------------------------------------
// OBJECT - ARRAY - DOM
// ------------------------------------------

// lấy element từ HTML
const add_student_form = document.getElementById("add-student-form");
const student_list = document.getElementById("student-list");

// mảng lưu dữ liệu học sinh
const student_data = [];

// ------------------------------------------
// THÊM HỌC SINH
// ------------------------------------------
function addStudent(event) {
  event.preventDefault();

  const name_input = document.getElementById("student-name-inp");
  const score_input = document.getElementById("student-score-inp");

  const name = name_input.value.trim();
  const score = score_input.value.trim();

  // validate tên
  if (name === "") {
    alert("Vui lòng nhập tên học sinh");
    return;
  }

  // tạo object học sinh mới
  const new_student = {
    fullName: name,
    score: parseFloat(score),
  };

  // thêm vào mảng
  student_data.push(new_student);

  // render lại danh sách
  renderStudentList();

  // reset form
  name_input.value = "";
  score_input.value = "";
}

// bắt sự kiện submit form
add_student_form.addEventListener("submit", addStudent);

// ------------------------------------------
// XÓA HỌC SINH
// ------------------------------------------
function deleteStudent(index) {
  student_data.splice(index, 1);

  renderStudentList();
}

// ------------------------------------------
// SỬA HỌC SINH
// ------------------------------------------
function editStudent(index) {
  const student = student_data[index];

  const new_name = prompt("Nhập tên mới:", student.fullName);
  const new_score = prompt("Nhập điểm mới:", student.score);

  // validate tên
  if (new_name !== null && new_name.trim() !== "") {
    student.fullName = new_name.trim();
  }

  // validate điểm
  if (new_score !== null && new_score.trim() !== "" && !isNaN(new_score)) {
    student.score = parseFloat(new_score);
  }

  renderStudentList();
}

// ------------------------------------------
// HIỂN THỊ DANH SÁCH HỌC SINH
// ------------------------------------------
function renderStudentList() {
  // xóa danh sách cũ
  student_list.innerHTML = "";

  // duyệt mảng học sinh
  student_data.forEach((student, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${student.fullName} (${student.score})
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;

    // nút edit
    li.querySelector(".edit-btn").addEventListener("click", () => {
      editStudent(index);
    });

    // nút delete
    li.querySelector(".delete-btn").addEventListener("click", () => {
      deleteStudent(index);
    });

    // thêm vào ul
    student_list.appendChild(li);
  });

  console.log(student_data);
}
