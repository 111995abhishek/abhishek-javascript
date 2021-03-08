function car(serial_no,name,model,variant,fuel_type,seater,type,color) {

    this.serial_no = serial_no;
    this.name = name;
    this.model = model;
    this.variant = variant;
    this.fuel_type = fuel_type;
    this.seater = seater;
    this.type = type;
    this.color = color;
    this.all_details = function(){
        console.log(this.name +" "+ this.model +" "+ this.variant +" "+ this.fuel_type +" "+ this.seater +" "+ this.type +" "+ this.color);
    };
    this.review = function() {
        console.log(this.name + " is awesome car");
    };
    

}


var  car1 = new car(1,"fortuner",2015,"sigma 4","diesel",8,"suv","white");
var car2 = new car(2,"honda city",2017,"lxi","petrol",5,"sedan","black");
car1.all_details();
car2.all_details();
car1.review();
car2.review();


