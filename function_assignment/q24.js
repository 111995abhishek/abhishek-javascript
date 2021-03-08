//24. function which accept three nos as the input and create a 4 digit number out of each input and add all the 4 dig number generated and return the sum.
function sumOfFourDigit(num1,num2,num3) {
    
    num1 = num1*1000 + num1*100 + num1*11;

    num2 = num2*1000 + num2*100 + num2*11;
    
    num3 = num3*1000 + num3*100 + num3*11;
    
    return num1 + num2 + num3;
}

console.log(sumOfFourDigit(7,8,9));