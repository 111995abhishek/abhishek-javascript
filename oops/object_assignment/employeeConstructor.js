function Employee(id,name,salary,age,city) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.age = age;
    this.city = city;
    this.completeDetails = function(){
        return(this.id +" "+this.name+" "+this.salary+" "+this.age+" "+this.city)
    };
    this.feedback = function() {
        return(this.name + " is a hard working employee ");
    };
    this.getsalary = function() {
        return(this.name +" earns "+ this.salary);
    };
    this.raiseSalary = function(x) {
        return this.salary += this.salary * (x/100) ;
    };
}

var employee1 = new Employee(1,"abhishek",50000,25,"bangalore");
console.log(employee1.completeDetails());
console.log(employee1.feedback());
employee1.raiseSalary(50);
console.log(employee1.getsalary());

var employee2 = new Employee(2,"pramod",60000,26,"lucknow");
console.log(employee2.completeDetails());
console.log(employee2.feedback());
console.log(employee2.getsalary());

var employee3 = new Employee(3,"akashdeep",70000,27,"ranchi");
console.log(employee3.completeDetails());
console.log(employee3.feedback());
employee3.raiseSalary(100);
console.log(employee3.getsalary());

