let Rectangle = class Rectangle1 {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
};

console.log(Rectangle.name);

let obj = new Rectangle(500,600);
console.log(obj.height);