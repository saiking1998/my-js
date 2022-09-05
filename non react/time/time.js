
let arr = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
setInterval(function() {
    let time = new Date();
    let day = time.getDay();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let mill = time.getMilliseconds();
    if(sec< 10){
        sec = 0+""+sec;
    }
   let asn =  arr[day]+" "+hour+":"+min+":"+sec+":"+ mill;
    document.getElementById('content').innerHTML = asn;
},10)

