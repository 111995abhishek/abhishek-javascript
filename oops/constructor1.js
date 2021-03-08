function employee(id,name,slary) {
    this.id = id;
    this.name = name;
    this.slary = slary;
    this.age = -1;
}

employee.prototype.city = "not specified";
employee.prototype.doSomething = function(){
    console.log(this.name + "is doing something");
};

emp1 = new employee(1,"abhishek",20000);

emp2 = new employee(2,"salman",30000);

console.log(emp1.name);
console.log(emp2.name);

emp1.city = "bangalore";
console.log(emp1.city);
console.log(emp2.city);

emp1.doSomething();
emp2.doSomething();
