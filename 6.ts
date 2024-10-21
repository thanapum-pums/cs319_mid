async function fetchStudentData(): Promise<{ name: string; grades: number[] }> {
    
    const fetchDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    try {
        await fetchDelay(2000); 

        const studentData = {
            name: 'Thanapum Test',
            grades: [15, 20, 50]
        };
        console.log('Data fetched successfully:');
        return studentData; 
    } catch (error) {
        console.error('Error fetching student data:', error);
        throw new Error('Failed to fetch student data'); 
    }
}

