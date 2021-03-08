//map() method

var numbers = [2,4,6,7];
var newArray = numbers.map(myFunction);

function myFunction(num){
    return num*2;
}

console.log(newArray);

//join() Method

var fruits = ['banana','apple','mango','orange'];

var energy = fruits.join();
console.log(energy);

// concat() method

var numbers1 = [9,12,34,56];
var numbers3 = numbers.concat(numbers1);
console.log(numbers3);

//reverse method

var obj = [9,8,55,43];
var rev = obj.reverse();
console.log(rev);
var sortedObj = obj.sort();
console.log(sortedObj);

