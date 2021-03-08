 factorial = (num) => {

    for(var i=num-1;i>=1;i--) {

        var result = num * i;
        num=result;

    }
    
    return result;
}

console.log(factorial(12));