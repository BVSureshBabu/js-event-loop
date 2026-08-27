const student = {
    id: 107,
    name: "Kavya",
    course: "Computer Science"
};

function saveStudent(student) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Student record saved for ${student.name}`);
            resolve();
        }, 0);
    });
}

async function enrollStudent(student) {
    console.log(`Starting enrollment for ${student.name}`);

    await saveStudent(student);

    console.log(`Enrollment confirmed for ${student.name}`);
}

console.log("Student Management System started");

enrollStudent(student);

console.log("Student Management System finished");
