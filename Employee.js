class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = manager;
        if (manager) manager.addEmployee(this)
    }
    bonus(amount) {
        return this.salary * amount;
    }

}

module.exports = { Employee };


// class Employee {
//     constructor(name, salary, title, manager = null) {
//         this.name = name;
//         this.salary = salary;
//         this.title = title;
//         this.manager = manager;
//         if (manager) manager.addEmployee(this);
//     }
//     bonus(multiplier) {
//         return this.salary * multiplier;
//     }
// }
// module.exports = {
//     Employee,
// };