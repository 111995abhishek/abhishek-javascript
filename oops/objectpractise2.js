//clone one object into another using object.assign
var user1 = {
    name:"abhishek",
    age:25,
    city:"bangalore"
}

var clone1 = {};

Object.assign(clone1,user1);

console.log(user1);
console.log(clone1);