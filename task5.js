const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function calculateTotalMonthlySalary(employees) {
    let totalSalary = 0, totalMonthlySalary = 0;

    employees.forEach((employee) => {
        const currentSalary = employee.starting + (employee.experience * employee.increment);
        totalSalary += currentSalary;
        
        totalMonthlySalary =parseInt(totalSalary/12);
    });

    return totalMonthlySalary; // Dividing by 12 to get the monthly salary
}

const result = calculateTotalMonthlySalary(employees);
console.log("Total salary to be provided by the company in a month: " + result);
