function parseStudentData(jsonData: string): { success: boolean; data?: Student[]; error?: string } {
    try {
        const parsedData = JSON.parse(jsonData);
        
    
        if (!Array.isArray(parsedData) || !parsedData.every(student => typeof student.name === 'string' && Array.isArray(student.grades))) {
            throw new Error('Parsed data is not in the expected format.');
        }
        const students: Student[] = parsedData.map((student: { name: string; grades: number[] }) => 
            new Student(student.name, 0, student.grades) 
        );
        return { success: true, data: students }; 
    } catch (error) {
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
}

const jsonData = JSON.stringify([
    { name: 'Thanapum', grades: [80, 20, 10] },
]);

const result = parseStudentData(jsonData);

if (result.success) {
    console.log('Parsed Student Data:', result.data);
} else {
    console.error('Error parsing student data:', result.error);
}
