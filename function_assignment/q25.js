//25. function which takes number as the input and returns true if it is divisible by  either 3 or 7 and false if  it is not.

function divisibleOrNot(num){
    return num%3==0 || num%7==0 ? true:false;
}

console.log(divisibleOrNot(95));