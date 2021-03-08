function employee(id,name,salary) {

    this.id = id;
    this.name = name;
    this.salary = salary;

}

employee.prototype.city = "not  specified";
employee.prototype.doSomething = function() {
    console.log(this.name + "is doing something");
}

var emp1 = new employee(1,"abhishek",20000);
var emp2 = new employee(2,"asif",30000);

console.log(emp1);
console.log(emp2);
console.log(emp1.city);
console.log(emp2.city);

emp1.city = "bangalore";
console.log(emp1.city);
console.log(emp2.city);
emp1.doSomething();

