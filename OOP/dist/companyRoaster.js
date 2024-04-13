function companyRoaster(candidatesArr) {
    const departments = {};
    class Employee {
        name;
        salary;
        position;
        department;
        email;
        age;
        constructor(name, salary, position, department, email, age) {
            this.name = name;
            this.salary = salary;
            this.position = position;
            this.department = department;
            this.email = email;
            this.age = age;
        }
    }
    candidatesArr.forEach((candidate) => {
        const [name, salaryString, position, department, email, ageString] = candidate.split(' ');
        const salary = Number(salaryString);
        const age = Number(ageString);
        const employee = new Employee(name, salary, position, department, email, age);
        if (!departments[department]) {
            departments[department] = [];
            departments[department].push(employee);
        }
        else {
            departments[department].push(employee);
        }
    });
    let highestAverageSalary = 0;
    let bestDepartment = '';
    for (const [department, employees] of Object.entries(departments)) {
        let sumSalaries = 0;
        employees.forEach((employee) => {
            sumSalaries += employee.salary;
        });
        if ((sumSalaries / employees.length) > highestAverageSalary) {
            highestAverageSalary = sumSalaries / employees.length;
            bestDepartment = department;
        }
        sumSalaries = 0;
    }
    console.log(`Highest Average Salary: ${bestDepartment}`);
    departments[bestDepartment].sort((employee1, employee2) => employee2.salary - employee1.salary).forEach((employee) => {
        let email = '';
        let age = null;
        employee.email ? email = employee.email : email = 'n/a';
        employee.age ? age = employee.age : age = -1;
        console.log(`${employee.name} ${employee.salary} ${email} ${age}`);
    });
}
companyRoaster([
    'Peter 120.00 Dev Development peter@abv.bg 28',
    'Tina 333.33 Manager Marketing 33',
    'Sam 840.20 ProjectLeader Development sam@sam.com',
    'George 0.20 Freeloader Nowhere 18'
]);
companyRoaster([
    'Silver 496.37 Temp Coding silver@yahoo.com ',
    'Sam 610.13 Manager Sales',
    'John 609.99 Manager Sales john@abv.bg 44',
    'Venci 0.02 Director BeerDrinking beer@beer.br 23',
    'Andre 700.00 Director Coding',
    'Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey'
]);
