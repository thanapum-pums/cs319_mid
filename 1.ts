class Student {
    name: string;
    age: number;
    grades: number[];
    private static studentCount: number = 0; 

    constructor(name: string, age: number, grades: number[] = []) {
        this.name = name;
        this.age = age;
        this.grades = grades;
        Student.studentCount++; 
    }

    getAverageGrade(): number {
        if (this.grades.length === 0) return 0;
        const total = this.grades.reduce((acc, grade) => acc + grade, 0);
        return total / this.grades.length;
    }

    addGrade(grade: number): void {
        this.grades.push(grade);
    }

    static getStudentCount(): number {
        return Student.studentCount;
    }
}

const student1 = new Student('Thanapum', 21,[50]);
const student2 = new Student('Pumsawai', 22,[40]);

student1.addGrade(55);
student2.addGrade(66);



