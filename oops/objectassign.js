var obj1 = {x:123,y:"yo yo"};
var obj2 = {a:true,b:false};
let obj3 ={};

Object.assign(obj3,obj1,obj2);

console.log(obj3);