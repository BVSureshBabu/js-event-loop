const student = {
    id: 104,
    name: "Rahul",
    course: "Computer Science"
};

function processStudentRequest(student) {
    console.log(`Processing request for ${student.name}`);

    saveStudent(student);

    Promise.resolve().then(() => {
        console.log(`Enrollment confirmed for ${student.name}`);
    });

    setTimeout(() => {
        console.log(`Welcome email sent to ${student.name}`);
    }, 0);

    console.log(`Request accepted for ${student.name}`);
}

function saveStudent(student) {
    console.log(`Saving ${student.name} to student records`);
}

console.log("Student Management System started");

processStudentRequest(student);

console.log("Student Management System finished");
