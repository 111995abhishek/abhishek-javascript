//15. function which takes number as the input and returns the hundred digit as the output
function hundredDigit(num){

    num1 =parseInt(num/100);
    dig = num1%10;
    return dig;

}

console.log(hundredDigit(123456789));