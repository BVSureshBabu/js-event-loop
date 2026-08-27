const student = {
    id: 102,
    name: "Sri",
    course: "Computer Science"
};

function registerStudent(student) {
    console.log(`Registering student: ${student.name}`);

    saveStudent(student);

    setTimeout(() => {
        sendRegistrationNotification(student);
    }, 0);

    console.log(`Registration process completed for ${student.name}`);
}

function saveStudent(student) {
    console.log(`Saving ${student.name} to student records`);
}

function sendRegistrationNotification(student) {
    console.log(`Notification sent to ${student.name}`);
}

console.log("Student Management System started");

registerStudent(student);

console.log("Student Management System finished");