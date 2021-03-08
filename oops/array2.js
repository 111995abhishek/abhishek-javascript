function x(a){
    a();
}

x(function(){
    console.log("anonymous function called");
});