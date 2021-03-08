//16. function to find required run rate in a cricket match.

function runRate(target,maxovers,currentscore,oversbowled){
    var requiredRunRate = (target-currentscore)/(maxovers-oversbowled);
    return requiredRunRate;
}

console.log(runRate(350,50,50,10));