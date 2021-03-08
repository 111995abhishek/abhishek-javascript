//objects inside object
var trainer1 ={
    name : "vinay hoysala",
    address:{
        streetAddress:"123, the usual street",
        city:"bengaluru",
        state:"karnataka",
    },
    subjects:{
        subject1:{name:'js',level:9},
        subject2:{name:'react',level:9},
        subject3:{name:'advance js',level:10},
    }
}

console.log(trainer1);
console.log(trainer1.name);
console.log(trainer1.address);
console.log(trainer1.address.streetAddress);
console.log(trainer1.subjects.subject1.name);