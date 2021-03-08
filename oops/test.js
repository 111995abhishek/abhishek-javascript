// var obj  = {
//     name:'tiago',
//     price:20000,
//     start:function(){
//         console.log(this.name + "car started");
//     }

// };
// obj.speed = 1234;
// delete obj.price;
// console.log(obj);

var myCar = new Object();
myCar.name = "tiago";
myCar.model = "2020";
myCar.color = "orange";
myCar.speed = 0;
myCar.move = function(){
    this.speed++;
}

console.log(myCar.name);
console.log(myCar["model"]);
console.log(myCar.color);
myCar.move();

console.log(myCar.speed);