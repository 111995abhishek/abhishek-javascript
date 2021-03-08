var prev = 0;
var current = 1;
console.log(prev);

for(var i=1;i<10;i++){
    console.log(current);
    var next = prev + current;
    prev = current;
    current = next;
}