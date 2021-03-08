function sameLastDigit(num1,num2) {
    var lastdigit1 = 0;
    var lastdigit2 = 0;
    lastdigit1 = lastdigit1*10 + (num1%10);
     lastdigit2 = lastdigit2%10 + (num2%10);
    return lastdigit1 == lastdigit2 ? true:false;
}

console.log(sameLastDigit(56,48));