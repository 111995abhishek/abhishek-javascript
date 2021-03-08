function employee(id,name,salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.age = -1;
}

var emp1 = new employee(1,"abhishek",20000);
var emp2 = new employee(2,"farheen",30000);

console.log(emp1.name);
console.log(emp2.name);
console.log(typeof emp1);

emp1.city = "bangalore";

console.log(emp1.city);
console.log(emp2.city);
console.log(emp1.age);
console.log(emp2.age);
