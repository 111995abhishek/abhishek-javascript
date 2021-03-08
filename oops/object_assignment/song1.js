function Song(id,name,duration) {
    this.id = id;
    this.name = name;
    this.duration = duration;
    this.completeDetails = function () {
        console.log(this.id + " " + this.name + " " + this.duration);
    };
    this.play = function () {
        console.log(this.name + " song is playing");
    };
}

var mySong = new song(1,"jana gana mana",2);
mySong.completeDetails();
mySong.play();

mySong.pause = function(){
    console.log(this.name + " song is paused");
}
mySong.pause();