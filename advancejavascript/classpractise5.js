function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes noise`);
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
}}

let d = new Dog('golden retriever');
console.log(d.speak());