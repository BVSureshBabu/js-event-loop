const student = {
    id: 103,
    name: "Anita",
    course: "Computer Science"
};

function enrollStudent(student) {
    console.log(`Starting enrollment for ${student.name}`);

    validateStudent(student);

    Promise.resolve().then(() => {
        updateEnrollmentStatus(student);
    });

    setTimeout(() => {
        sendEnrollmentNotification(student);
    }, 0);

    console.log(`Enrollment request submitted for ${student.name}`);
}

function validateStudent(student) {
    console.log(`Validating student: ${student.name}`);
}

function updateEnrollmentStatus(student) {
    console.log(`Enrollment status updated for ${student.name}`);
}

function sendEnrollmentNotification(student) {
    console.log(`Notification sent to ${student.name}`);
}

console.log("Student Management System started");

enrollStudent(student);

console.log("Student Management System finished");