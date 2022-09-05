var max_laps = 0;
let hour =0;
let min = 0;
let sec =0;
let mill = 0;
let hh =0;
let mm = 0;
let ss = 0;
let m = 0;
let ans = "";
let Pause = true;
setInterval(function(){
    if(Pause == false){

    
   if(mill > 99){
    sec++;
    mill = 0;
   }
   if(sec>59){
    min++;
    sec=0;
   }
   if(min > 59){
    hour++;
    min = 0;
   }
 if(mill <10)
 {
    m = 00+""+mill;
 }

 else{
    m = mill;
 }
 if(sec<10){
    ss = 0+""+sec;

 }
 else{
    ss= sec;
 }
 if(min<10){
    mm= 0+""+min;
 }
 else{
    mm = min;
 }
 if(hour< 10){
    hh = 0+""+hour;
 }
 else{
    hh = hour;
 }
 ans = hh+":"+mm+":"+ss+":"+m;
 document.getElementById('content').innerHTML = ans;
 mill++;
}
},10)
function pause(){
    if(Pause == true){
        Pause = false;
    }
    else{
        Pause = true;
    }
  
}
function lap(){
    if(max_laps <7){
        ans = hh+":"+mm+":"+ss+":"+m;
        var t = document.createTextNode(ans);
        var node  = document.createElement('P');
          node.append(t);
         document.getElementById('lap_content').appendChild(node);
         max_laps++;
    }
    else{
       document.getElementById('laphead').innerText = "max limit reached"
       document.getElementById('laphead').style.color = "red"
       setTimeout(function(){
        document.getElementById('laphead').innerText = "laps"
        document.getElementById('laphead').style.color = "coral"
       },5000)
    }
  

}
function Reset(){
    document.getElementById('laphead').innerText = "laps"
    max_laps =0;
    hour = 0;
    min = 0;
    sec=0;
    mill=0;
    hh="00";
    mm="00";
    ss = "00";
    m="000";
    Pause= true;
    ans = hh+":"+mm+":"+ss+":"+m;
    document.getElementById('content').innerHTML = ans;
    document.getElementById('lap_content').innerHTML="";
}