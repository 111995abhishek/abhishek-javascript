//cloning an object into another using for loop

var user = {
    name:"abhishek",
    age:25,
    city:"bangalore"
}

var clone={};

for(key in user){
    clone[key] = user[key];
}

console.log(user);
console.log(clone);

console.log(clone.name);

clone.name = "bahubali";
console.log(clone.name);

