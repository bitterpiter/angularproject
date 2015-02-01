function startTime() {
    var month = new Array();
    month[0] = "sty";
    month[1] = "lut";
    month[2] = "mar";
    month[3] = "kwi";
    month[4] = "maj";
    month[5] = "cze";
    month[6] = "lip";
    month[7] = "sie";
    month[8] = "wrz";
    month[9] = "paź";
    month[10] = "lis";
    month[11] = "gru";
    var weekdayArray = new Array(7);
    weekdayArray[0]=  "nie";
    weekdayArray[1] = "pon";
    weekdayArray[2] = "wto";
    weekdayArray[3] = "śro";
    weekdayArray[4] = "czw";
    weekdayArray[5] = "pią";
    weekdayArray[6] = "sob";
    
    
    
    
    
    var today=new Date();
    var weekday = weekdayArray[today.getDay()];
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var day= today.getUTCDate();
    var n = month[today.getMonth()];
    var year=today.getFullYear();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = weekday + " " + day + " " + n + " " + h + ":" + m + ":" + s;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}