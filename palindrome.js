let num = 121;
let bkpnum = num;
let rev =0;

while(num!=0){
    rev= rev*10 + (num%10);
    num = parseInt(num/10);
}
if (bkpnum==rev){
    console.log("${bkpnum} is palindrome");
}else{
    console.log("${bkpnum} is not palindrome");



}