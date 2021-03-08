function reverse3(num) {
    var dig3 = 0;
    var dig2 = 0;
    var dig1 = 0;

    dig3 = dig3*10 + (num%10);
    num = parseInt(num/10);

    dig2 = dig2*10 +(num%10);
    num = parseInt(num/10);

    dig1 = dig1*10 + (num%10);
    num = parseInt(num/10);

    var reverse = dig3*100 + dig2*10 + dig1;

    return reverse;
}

console.log(reverse3(789));