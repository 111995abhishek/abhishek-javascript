//checks wheather the given number is prime or not

var number = 2;
isPrime = true;
for(i=2;i<number;i++){
    if(number%i==0){
        isPrime=false;
        break;
    }   }
    if(isPrime){
        console.log("number is prime");
    }else
    console.log("number is not prime");

