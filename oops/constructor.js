function car(name,price){
    this.name = name;
    this.price = price;
}

var car1 = new car("tiago",5000000);
var car2 = new car("ford",7000000);

console.log(car1);
console.log(car2);
