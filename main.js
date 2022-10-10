
function analogWatch(){
    var handOfSecond = document.getElementById("second");
    var handOfMinute = document.getElementById("minute");
    var handOfHour = document.getElementById("hour");


    let setDate = new Date();
    let secondRatio = setDate.getSeconds()/60;
    let minuteRatio = setDate.getMinutes()/60;
    let hourRatio = setDate.getHours()/ 12;

    handOfSecond.style.transform = `rotate(${secondRatio*360}deg)`;
    handOfMinute.style.transform = `rotate(${minuteRatio*360}deg)`;
    handOfHour.style.transform = `rotate(${hourRatio*360}deg)`;
    setInterval(analogWatch,1000);

}
analogWatch();




