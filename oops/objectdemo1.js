var user = {
    name : "vinay",
    age: 1000
};

var clone ={};

for(let key in user) {
    clone[key] = user[key];
}

console.log(clone);
console.log(user);

clone.name = "bahubali";

console.log(clone);
console.log(user);