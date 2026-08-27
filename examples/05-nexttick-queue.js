const student = {
    id: 105,
    name: "Meera",
    course: "Computer Science"
};

function processStudentRequest(student) {
    console.log(`Processing request for ${student.name}`);

    process.nextTick(() => {
        console.log(`Student record verified for ${student.name}`);
    });

    Promise.resolve().then(() => {
        console.log(`Enrollment confirmed for ${student.name}`);
    });

    setTimeout(() => {
        console.log(`Welcome email sent to ${student.name}`);
    }, 0);

    console.log(`Request accepted for ${student.name}`);
}

console.log("Student Management System started");

processStudentRequest(student);

console.log("Student Management System finished");
