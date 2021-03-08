isPalindrome = (num) => {

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