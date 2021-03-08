function doGreeting() {
    let  name = document.getElementsByName("name")[0].value;
    document.getElementById("result").innerHTML = '<b>Greetings '+name+ '</b>';
}