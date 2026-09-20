const BASE_URL = "https://6aafacbeee9c55c910bf5fd7.mockapi.io/api/v1/students";
const renderList = document.querySelector("#list");
const getBtn = document.querySelector("#get-students-btn");
const form = document.querySelector("#add-student-form");
const studentName = document.querySelector("#name");
const studentAge = document.querySelector("#age");
const studentCourse = document.querySelector("#course");
const studentSkills = document.querySelector("#skills");
const studentEmail = document.querySelector("#email");
const studentIsEnrolled = document.querySelector("#isEnrolled");

let currentStudentId = null;

async function getStudents() {
  try {
    const data = await fetch(BASE_URL);
    const resp = await data.json();
    return renderStudents(resp);
  } catch (error) {
    console.error(error);
  }
}

async function addStudent(student) {
  try {
    const data = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(student),
    });
    return getStudents();
  } catch (error) {
    console.error(error);
  }
}

async function updateStudent(id, updates) {
  try {
    const data = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(updates),
    });
    return getStudents();
  } catch (error) {
    console.error(error);
  }
}

async function deleteStudent(id) {
  try {
    const data = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    return getStudents();
  } catch (error) {
    console.error(error);
  }
}

async function fetchStudent(id) {
  try {
    const data = await fetch(`${BASE_URL}/${id}`);
    const resp = await data.json();

    studentName.value = resp.name;
    studentAge.value = resp.age;
    studentCourse.value = resp.course;
    studentSkills.value = resp.skills;
    studentEmail.value = resp.email;
    studentIsEnrolled.value = resp.isEnrolled;
    currentStudentId = resp.id;
  } catch (error) {
    console.error(error);
  }
}

function renderStudents(students) {
  renderList.innerHTML = "";
  const studentList = students
    .map((student) => {
      return ` <tr>
      <th scope="row">${student.id}</th>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.course}</td>
      <td>${student.skills}</td>
      <td>${student.email}</td>
      <td>${student.isEnrolled}</td>
      <td>
       <button class="edit" data-id=${student.id}>edit</button>
      <button class="delete"data-id=${student.id}>delete</button>
      </td>
    </tr>`;
    })
    .join();
  return (renderList.innerHTML = studentList);
}
getBtn.addEventListener("click", getStudents);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const student = {
    name: studentName.value.trim(),
    age: studentAge.value.trim(),
    course: studentCourse.value.trim(),
    skills: studentSkills.value.trim(),
    email: studentEmail.value.trim(),
    isEnrolled: studentIsEnrolled.value.trim(),
  };

  if (!currentStudentId) {
    addStudent(student);
  } else {
    updateStudent(currentStudentId, student);
  }
  form.reset();
});

renderList.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (e.target.classList.contains("edit")) {
    fetchStudent(id);
  }
  if (e.target.classList.contains("delete")) {
    deleteStudent(id);
  }
});
