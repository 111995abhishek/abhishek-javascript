function funcA(a,b) {
    return a+b;
}

function funcA(c) {
    return c; 
    
}


console.log(funcA(1,2));
console.log(funcA(3));
console.log('-------------------------------1st program--------------------');

function a(){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log('------------');
    console.log();
}
a(1);
a(1,2);
a(1,2,3);
a("192.168.2.0",'65');
console.log('-------------------------------2nd program--------------------');

function x(){
    console.log(arguments[0],arguments[1]);
}
x();
x(1,2);
x('vinay','243',true);
console.log('-------------------------------3rd program--------------------');

function x1() {
    for(i=0;i<arguments.length;i++)
        console.log(arguments[i]);
    console.log('--------');
    
}

x1();
x1(1,2,3);
x1('vinay','243',true,1,5,7);
