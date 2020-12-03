const {Employee} = require('./Employee');



class Manager extends Employee {

    constructor(name, salary, title, manager) {
        super(name, salary, title, manager);
        this.assigned_employees = [];
    }

    addEmployee(employee) { //"employee" here is referring to "this" which was passed in as an argument.
        this.assigned_employees.push(employee)
        return employee
    }

    bonus(multiplier) {
        return (this.salary + this.totalSubSal()) * multiplier;
    }


    totalSubSal(){
        // base case is not a manager
        let total = 0;                  // add slal
        this.assigned_employees.forEach(each_employee =>{
            if (each_employee instanceof Manager){                    // if its an instance of Manager
                total += each_employee.salary + each_employee.totalSubSal();
            } else {
                total += each_employee.salary;
            }
        });
        return total;
    }
    
}


let hobbes = new Manager('Hobbes', 1000000, 'Founder', null);
let calvin = new Manager('Calvin', 130000, 'Director', hobbes);
let susie = new Manager('Susie', 100000, 'TA Manager', calvin);
let lily = new Manager('Lily', 90000, 'TA', susie);
let clifford = new Manager('Clifford', 90000, 'TA', susie);

console.log(hobbes.bonus(0.05)); // 50000..70500
console.log(calvin.bonus(0.05)); // 6500..20500
console.log(susie.bonus(0.05)); // 14000--correct
console.log(lily.bonus(0.05)); // 4500--correct
console.log(clifford.bonus(0.05)); // 4500--correct
