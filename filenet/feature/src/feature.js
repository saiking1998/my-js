function fetchdocuments(){
    document.getElementById('Docelemenet').innerHTML = "";
     var path = document.getElementById('path').value;
     console.log(path);
     var my = new com.App();
 
    
     console.log(my.mymeth(path))
}