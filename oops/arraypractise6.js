//example of few methods in an array.

var myArray = ["modi","dkshe","rahul","gandhi","nikhil","amit shah","nograj","yedurappa"];
function f1(x){
    console.log("fi called");
}
console.log(myArray.findIndex(f1));

var newArray = myArray.splice[2,5];
for(item in newArray){
    console.log(item);
}

myArray.push("tejaswi surya");
console.log(myArray.pop());