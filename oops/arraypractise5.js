//using foreach to print items in an array

var myColors = new Array("blue","orange","yellow");
myColors.forEach(function(item){
    console.log(item);
});

console.log("-------------");

var superHeroes = new Array("spidy","baty","naughty");
function myFunction(myVar){
    console.log(myVar);
}

superHeroes.forEach(myFunction);

console.log("-------------");

var anotherFunction = function(item){
    console.log(item);
}

myColors.forEach(anotherFunction);

console.log("----------------");

myColors.forEach(item => console.log(item));