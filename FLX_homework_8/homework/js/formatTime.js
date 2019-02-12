function formatTime(amountOfMinutes){
    let days= Math.floor(amountOfMinutes/1440);
    let hours=Math.floor((amountOfMinutes-(days*1440))/60);
    let minutes=amountOfMinutes-(days*1440)-(hours*60);
    return days+' day(s) '+hours+' hour(s)'+minutes+' minute(s).';
}
formatTime(120);
formatTime(59);
formatTime(3601);
