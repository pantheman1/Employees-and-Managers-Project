const {Employee} = require('./Employee');



class Manager extends Employee {

    constructor(name, title, salary, boss) {
        super(name, title, salary, boss);
        this.assigned_employees = [];
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


// test cases:
const the_emp = new Employee('josh', 'programmer', 80000, 'Amber');
const the_manager = new Manager('Amber', 'head of programing', 100000, 'Robert');

the_manager.totalSubSal();
