//8. function which takes the number as the input and return true if it is a palindrome and false if it is not.

function isPalindrome(num) {

    var rev = 0;
    var copynum = num;

    while(num!=0) {

        rev = rev*10 + (num%10);
        num = parseInt(num/10);

    }
    if(copynum==rev) {

        return true;

    } else {

        return false;
        
    }
}
console.log(isPalindrome(121));