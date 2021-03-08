function repeatTwice(num){
    var count = countDigits(num);
    switch(count){
        case 1:
            return num*10 + num;
        case 2 :
            return num*100 + num;
        case 3:
            return num*1000 + num;
        }
}
function countDigits(num){
    var count = 0;
    while(num!=0){
        num = parseInt(num/10);
        count++;
    }
    return count;
}

console.log(repeatTwice(123));