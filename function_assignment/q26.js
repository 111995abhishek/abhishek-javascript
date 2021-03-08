//26. function which accepts thrre nos as innput and return the largest of three.

function largestOfNumbers(num1,num2,num3) {
    return num1>num2 && num1>num3 ? num1 : num2>num1 && num2>num3 ? num2 : num3;

}

console.log(largestOfNumbers(12,23,11));