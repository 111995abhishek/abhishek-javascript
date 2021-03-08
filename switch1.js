var dayNumber = 1;
var dayName = '';

switch(dayNumber){
    case 1 : 
        dayName = "sunday";
        break;

    case 2 :
        dayName = "monday";
        break;

    case 3:
        dayName = "tuesday";
        break;

    case 4 : 
        dayName = "wednesday";
        break;

    default:
        console.log("invalid choice");
        break;
}

console.log(dayName);
