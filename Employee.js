class Employee {
    constructor(name, title, salary, boss) {
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = boss;
    }
    bonus(amount) {
        return this.salary * amount;
    }
}

module.exports.Employee = Employee