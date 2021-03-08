//22. function wwhich accept the number as the input and calculate the sum of its last 4 digit.

function sumOfDigits(num) {
    var rev = 0;

    dig1 = rev * 10 + (num%10);
    num = parseInt(num/10);

    dig2 = rev * 10 + (num%10);
    num = parseInt(num/10);

    dig3 = rev * 10 + (num%10);
    num = parseInt(num/10);

    dig4 = rev * 10 + (num%10);
    num = parseInt(num/10);

    return dig1 + dig2 + dig3 + dig4;

}

console.log(sumOfDigits(78945612));
