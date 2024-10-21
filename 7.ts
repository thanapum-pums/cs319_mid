const students: Student[] = [
    new Student('Thanapum', 22, [85, 90, 78]),
];

// 1. Use filter() 
const passingStudents = students.filter(student => student.getAverageGrade() > 70);

// 2. Use map()
const studentNames = passingStudents.map(student => student.name);

// 3. Use reduce() 
const totalGradesCount = students.reduce((acc, student) => acc + student.grades.length, 0);

