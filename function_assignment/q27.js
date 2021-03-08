//27. function which accepts month and year as the input and return the days in a month.

function monthYear(month, year) {
    switch (month) {
        case 1:
            return 31;
            break;

        case 2:
            return 29;
            break;

        case 3:
            return 31;

        case 4:
            return 30;

        case 5:
            return 31;
            break;

        case 6:
            return 30;
            break;

        case 7:
            return 31;
            break;
        case 8:
            return 30;
            break;
        case 9:
            return 31;
            break;
        case 10:
            return 30;
            break;
        case 11:
            return 31;
            break;

        case 12:
            return 30;
            break;



    }

}

console.log(monthYear(2,2019));