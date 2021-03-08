//12.funnction which takes number as the input and returns the number of the digits.
function countDigits(num) {
    var count = 0;
    while(num!= 0){
        
        num = parseInt(num/10);
        count+=1;

    }
    return count;
}

console.log(countDigits(123456));