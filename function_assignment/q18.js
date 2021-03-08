//18. function which takes number of two digit as the input and returns sum of two digits.

function sumOfDigits(num){
    var rev = 0;
    rev = rev*10 + (num%10);
    num = parseInt(num/10);
    var result = rev + num;
    return result;
}

console.log(sumOfDigits(98));