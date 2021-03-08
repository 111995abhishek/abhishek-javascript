// var myCar = new Object();
// myCar.name = "tiago";
// myCar.model = 2020;
// myCar.speed = 0;
// myCar.type = 'sedan';

// myCar.move = function() {
//     this.speed++;
// }

// console.log(myCar.name);
// console.log(myCar[0]);
// console.log(myCar["model"]);
// console.log(myCar.speed);
// myCar.move()

// console.log(myCar.speed);

var emp1 = new Object();
emp1.name = "abhishek";
emp1.sex = "male";
emp1.age = 45;

var emp2 = emp1;

emp2.name = "salman khan";

console.log(emp1.name);


var msg1 = {
    to : 9739921787,
    msg : "how are you",
    from : 9886721787,
    delivered : true,
    read : false
}

for (property in msg1) 
    console.log(property+ ":" + msg1[property]);

console.log("-------------------");
msg1.timeStamp = 10;

for (property in msg1) 
    console.log(property+ ":" + msg1[property]);

console.log("-------------------");

delete msg1.from;

for (property in msg1) 
    console.log(property+ ":" + msg1[property]);

console.log("-------------");


var ford = {
    name : "aspire",
    model : 2020,
    start:function(){
        console.log("car started"); 
    },
    move : function() {
        console.log("car moving");
    }

};
for (property in ford)
    console.log(property+ ":" + ford[property]);

ford.start();
ford.move();
console.log("-----------");

var ford1 = {
    name : "aspire",
    color : "blue",
    model : 2020,


}

ford1.printdetails = function(){
    console.log(this.name + "" + this.color);
}

ford1.printdetails();
console.log("--------------");

// getter example

var employee = {
    name:"abhishek",
    age:27,
    get empName(){
        return this.name;
    },
    get empAge() {
        return this.age;
    }
};

console.log(employee.empName);
console.log(employee.empAge);
console.log("-------------------");

//setter example

var  employee1 = {
    name:"abhishek",
    age:27,
    set empname1(empname1){
        this.name = empname1;
    },
    set empAge1(empAge1){
        this.age = empAge1;
    }};

    employee1.empname1="salman khan";
    employee1.empAge1=35;

    console.log(employee1["name"]);
    console.log(employee1["age"]);
    console.log("----------------");

    //example of getter and setter

    var obj = {
        counter : 0,
        get reset(){
            this.counter = 0;
        },
        get incerment(){
            this.counter++;
        },
        get decrement(){
            this.counter--;
        },
        set add(value){
            this.counter+=value;
        },
        set substract(value){
            this.counter-=value;
        }
    };

    obj.incerment;
    console.log(obj.counter);
    obj.reset;
    console.log(obj.counter);
    obj.incerment;
    obj.add = 5;
    console.log(obj.counter);
    obj.substract = 3;
    console.log(obj.counter);
    console.log("--------------");

    

     



