function add(num1,num2) {
    return num1 + num2;
}

console.log(add(9,10));

var func1 = (num1,num2) =>{
    return num1 + num2;
} 
console.log(func1(4,5));

var isEven = (num) => {
    if(num%2 == 0){
        return num + " is even";
    }else{
        return " it is odd ";
    }}

console.log(isEven(14));



