//iterating through an array using for loop and for of loop.

var myArray = new Array(true,"blue","orange","yellow",5,6,7,4.10);
console.log(myArray);

for(var i=0;i<myArray.length;i++)
    console.log(myArray[i]);

for(item of myArray)
    console.log(item);