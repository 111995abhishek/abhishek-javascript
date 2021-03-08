// 5. function which takes an integer as the input and returns true if the number is even anf false if it is not.

function evenOdd(num){
    
    if(num%2 == 0) {

        var iseven = true;
        
    }else {

        iseven = false;
    }
    return iseven;
}

console.log(evenOdd(9));