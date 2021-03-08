var start = 10;
var end = 1000;
var copyNum=0;
var rev = 0;

for(start=start;start<=end;start++){
    copyNum=start;
    rev=0;
    while(copyNum!=0){
        rev=rev*10+(copyNum%10);
        copyNum=parseInt(copyNum/10);
    }
    if(start==rev && start!=0){
        console.log(start + " ");
    }
}