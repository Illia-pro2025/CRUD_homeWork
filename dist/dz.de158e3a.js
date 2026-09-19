const BASE_URL = "http://localhost:1111/students";
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
function getStudents() {
    fetch(BASE_URL).then((resp)=>resp.json()).then((data)=>renderStudents(data)).catch((error)=>console.error(error));
}
function renderStudents(students) {
    renderList.innerHTML = "";
    const studentList = students.map((student)=>{
        return ` <tr>
      <th scope="row" data-id>${student.id}</th>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.course}</td>
      <td>${student.skills}</td>
      <td>${student.email}</td>
      <td>${student.isEnrolled}</td>
      <td>
       <button data-edit>edit</button>
      <button data-delete>delete</button>
      </td>
    </tr>`;
    }).join();
    return renderList.innerHTML = studentList;
}
function addStudent(student) {
    fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(student)
    }).then((response)=>response.json()).then(()=>getStudents()).catch((error)=>console.error(error));
}
function updateStudent(id) {
// твій код
}
// Функція для видалення студента
function deleteStudent(id) {
// твій код
}
fun;
getBtn.addEventListener("click", getStudents);
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const student = {
        name: studentName.value.trim(),
        age: studentAge.value.trim(),
        course: studentCourse.value.trim(),
        skills: studentSkills.value.trim(),
        email: studentEmail.value.trim(),
        isEnrolled: studentIsEnrolled.value.trim()
    };
    addStudent(student);
    form.reset();
});
list.addEventListener("click", (e)=>{
    const id = e.target.dataset.id;
    if (e.target.classList.contains("edit")) fetchStudent(id);
    if (e.target.classList.contains("delete")) deleteStudent(id);
}); // 3. Реалізуйте функцію updateStudent  для часткового оновлення студента (HTTP PATCH /students/{id})
 // 4. Реалізуйте функцію  для deleteStudent видалення студента за його ідентифікатором (HTTP DELETE /students/{id})

//# sourceMappingURL=dz.de158e3a.js.map
