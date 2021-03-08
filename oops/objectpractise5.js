function user() {
    console.log(new.target);

    if(new.target != undefined){
        console.log("do some object creation work")
    }
    else{
        console.log("do something appropriate");
    }
}

user();

var obj = new user();