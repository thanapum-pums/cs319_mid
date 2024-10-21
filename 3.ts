interface Teacher {
    name : string;
    subject : string;
    students : Student[];
}

function getTeacherInfo(teacher : Teacher) : void {
    console.log(`Teacher's Name: ${teacher.name}`);
    console.log(`Subject: ${teacher.subject}`);
    console.log(`Number of Students: ${teacher.students.length}`);
}

const teacher: Teacher = {
    name : 'Mr.Kissada',
    subject : 'Typescript',
    students : [student1]
};

getTeacherInfo(teacher);