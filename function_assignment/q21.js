//21. function which returns three nos as the input and returns true if it is in ascending order and false if it is not in ascending.

function ascendingOrder(num1,num2,num3) {

    return num1<num2 && num2<num3 && num1<num3 ? true:false;

}

console.log(ascendingOrder(5,7,9));