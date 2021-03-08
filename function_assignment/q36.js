function blackJack(num1,num2) {
    var diffNum1 = 21 - num1;
    var diffNum2 = 21 - num2;

    

    if(diffNum1>diffNum2)
        return num2;
    else
        return num1;

}

function check(num1,num2) {
    if(num1>21 && num2>21)
        return -1;
    else
        return -2;
}

console.log(blackJack(12,18));
console.log(check());