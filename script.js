// let student=[];
// function addStudent(){
//     let name=document.getElementById("name").value;
//     let age=document.getElementById("age").value;
//     let course=document.getElementById("course").value;
// if(name=== "" ||age==="" ||course=== ""){
//     alert("please fill all the field");
//     return;
// }

// let student={
//     name:name,
//     age:age,
//     course:course
// };
// student.push(student);
// displayStudents();



// document.getElementById("name").value="";
// document.getElementById("age").value="";
// document.getElementById("course").value="";
// }




// function displayStudents() {
//     let list = document.getElementById("studentList");
//     list.innerHTML = "";

//     students.forEach((student, index) => {
//         list.innerHTML += `
//             <tr>
//                 <td>${student.name}</td>
//                 <td>${student.age}</td>
//                 <td>${student.course}</td>
//                 <td>
//                     <button onclick="deleteStudent(${index})">Delete</button>
//                 </td>
//             </tr>
//         `;
//     });
// }
// function deleteStudent(index) {
//     students.splice(index, 1);
//     displayStudents();
// }


let students = [];

function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    if (name === "" || age === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    let student = {
        name: name,
        age: age,
        course: course
    };

    students.push(student);
    displayStudents();

    // clear input
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";
}

function displayStudents() {
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach((student, index) => {
        list.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.course}</td>
                <td>
                    <button onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}