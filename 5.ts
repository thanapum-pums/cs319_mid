function createGradeMultiplier(multiplier: number): (grade: number) => number {
    return function(grade: number): number {
        return grade * multiplier; 
    };
}

const doubleGrade = createGradeMultiplier(2);

const grade1 = 85;
const grade2 = 90;

console.log(`Double of ${grade1} is ${doubleGrade(grade1)}`);
