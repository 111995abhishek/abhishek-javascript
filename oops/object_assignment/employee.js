var employee1 = new Object();
employee1.id = 1;
employee1.name = "abhishek";
employee1.salary = 50000;
employee1.age = 45;
employee1.city = "bangalore";
employee1.feedback = function(){
    console.log(employee1.name+" is a hardworking employee ");
}
employee1.doSomething = function() {
    console.log(employee1.name + " is doing a project");
}

var employee2 = new Object();
employee2.id = 2;
employee2.name = "asif";
employee2.salary = 60000;
employee2.age = 47;
employee2.city = "chennai";
employee2.feedback = function(){
    console.log(employee2.name+" is a hardworking employee ");
}
employee2.doSomething = function() {
    console.log(employee2.name + " is doing a project");
}

var employee3 = new Object();
employee3.id = 1;
employee3.name = "salman";
employee3.salary = 70000;
employee3.age = 45;
employee3.city = "gwalior";
employee3.feedback = function(){
    console.log(employee3.name+" is a hardworking employee ");
}
employee3.doSomething = function() {
    console.log(employee3.name + " is doing a project");
}

employee1.doSomething();
employee1.feedback();
employee2.doSomething();
employee2.feedback();
employee3.doSomething();
employee3.feedback();