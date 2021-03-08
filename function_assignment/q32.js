function sumOfTwo(a,b,c) {
    return a+b == c || a+c == b || b+c == a ? true : false;
}

console.log(sumOfTwo(6,5,9));