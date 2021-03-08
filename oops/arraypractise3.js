function myFunc(x,y) {
    for(var i=0;i<y.length;i++)
        x(y[i])
}

function anotherFunc(i){
    console.log(i);
}

var array=[123,1,2,5,7];
console.log(anotherFunc,array);