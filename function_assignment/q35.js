function sumLastThree(num) {
    var dig1 = 0;
    var dig2 = 0;
    var dig3 = 0;

    dig1 = dig1*0 + (num%10);
    num = parseInt(num/10);

    dig2 = dig2*10 +(num%10);
    num = parseInt(num/10);

    dig3 = dig3*10 + (num%10);
    num = parseInt(num/10);

    return dig1 + dig2 + dig3;
}

console.log(sumLastThree(12345));