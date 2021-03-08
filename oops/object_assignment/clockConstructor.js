function Clock(hours,minutes,seconds){
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.setClock = function(seconds) {
        this.hours =parseInt(seconds/3600) ;
        this.minutes = parseInt((seconds - (this.hours*3600))/60);
        this.seconds = seconds - ((this.hours*3600)+(this.minutes*60));
    };
    this.getHours = function() {
        return this.hours;
    };
    this.getMinutes = function() {
        return this.minutes;
    };
    this.getSeconds = function() {
        return this.seconds;
    };
    this.setHours = function(x) {
        return this.hours = x;
    };
    this.setMinutes = function(y) {
        return this.minutes = y;
    };
    this.setSeconds = function(z) {
        return this.seconds = z;
    };
    this.tick = function() {
         this.seconds++;
        if(this.seconds==60){
            this.seconds=0;
            this.minutes++;
        }
        if(this.minutes==60){
            this.minutes=0;
            this.hours++;
        }
        if(this.hours==24){
            this.hours=0;
        }
            
    }
    this.now = function() {
        return this.hours+":"+this.minutes+":"+this.seconds;
    }
    this.tickDown = function() {
        this.seconds--;
        if(this.seconds==0){
            this.seconds=59;
            this.minutes--;
        }
        if(this.minutes==0){
            this.minutes=59;
            this.hours--;
        }
        if(this.hours==0){
            this.hours=23;
        }
    }
}

var clock1 = new Clock(10,30,58);

// clock1.setClock(10000);
console.log(clock1);
// console.log(clock1.getHours());
// console.log(clock1.getMinutes());
// console.log(clock1.getSeconds());


// clock1.setHours(5);
// clock1.setMinutes(56);
// clock1.setSeconds(58);
// console.log(clock1);
console.log(clock1.tick());
console.log(clock1.tick());
console.log(clock1.tick());
console.log(clock1);
console.log(clock1.now());
clock1.tickDown();
clock1.tickDown();
clock1.tickDown();
console.log(clock1);





