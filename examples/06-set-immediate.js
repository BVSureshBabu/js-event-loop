const fs = require("node:fs");

const student = {
    id: 106,
    name: "Arjun",
    course: "Computer Science"
};

function loadStudentRecord(student) {
    console.log(`Loading record for ${student.name}`);

    fs.readFile(__filename, () => {
        console.log(`Student record loaded for ${student.name}`);

        setImmediate(() => {
            console.log(`Advisor assigned to ${student.name}`);
        });

        setTimeout(() => {
            console.log(`Welcome email sent to ${student.name}`);
        }, 0);

        console.log(`Follow-up tasks scheduled for ${student.name}`);
    });
}

console.log("Student Management System started");

loadStudentRecord(student);

console.log("Student Management System finished");
