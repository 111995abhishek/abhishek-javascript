//9.function which takes number as the input and return fibonacci serires till that number.
function fibonaciSeries(num) {

    var prev = 0;
    var current = 1;
    console.log(prev);

    for(i=1;i<=num;i++) {

        console.log(current);
        next = prev + current;
        prev = current;
        current = next;
        
    }
    
}
console.log(fibonaciSeries(10));