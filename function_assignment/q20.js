//20. function which takes three numbers as the input and if num1 is greater than any of the number returs true else return false.

function largestOfNumbers(num1,num2,num3) {
    return num1>num2 || num1>num3 ? true:false;
}

console.log(largestOfNumbers(7,9,8));