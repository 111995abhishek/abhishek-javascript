//17. function which takes 3 nos as input as a,b and c and return in the form of decimal a.bc

function decimalForm(a,b,c){
    a*=100;
    b*=10;
    c*=1;
    sum = a + b + c;
    result = sum/100;
    return result;
}

console.log(decimalForm(8,7,9));