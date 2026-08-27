const student = {
    id: 101,
    name: "Suresh",
    course: "Computer Science"
};

function registerStudent(student) {
    console.log(`Registering student: ${student.name}`);

    validateStudent(student);

    console.log(`Student ${student.name} registered successfully`);
}

function validateStudent(student) {
    console.log(`Validating student: ${student.name}`);

    if (!student.name || !student.course) {
        console.log("Student details are incomplete");
        return;
    }

    console.log("Student details are valid");
}

console.log("Student Management System started");

registerStudent(student);

console.log("Application execution completed");