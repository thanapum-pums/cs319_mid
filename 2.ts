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

class GraduateStudent extends Student {
    thesisTopic : string;

    constructor(name: string, age: number, grades : number[], thesisTopic: string){
        super(name, age, grades);
        this.thesisTopic =thesisTopic;
    }
    getAverageGrade(): number {
        let average = super.getAverageGrade();
        if (this.thesisTopic.toLocaleLowerCase().includes('artificial intelligence')) {
            average += 5;
        }
        return average;
    }
}

const gradStudent = new GraduateStudent('Alice Johnson', 24, [88, 92, 85], 'Artificial Intelligence in Healthcare');


