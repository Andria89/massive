var button = document.getElementById("button1");
var fnum=document.getElementById("input121");
var snum=document.getElementById("input281");
var input =   document.querySelectorAll("input");
   button.onclick = function(){
   if(fnum.value =="andria" && snum.value =="pass"){
        window.open("admin"); 
        changecolor("green");
   }
   else if(fnum.value ==="c#"&& snum.value ==="c#"){
    window.open("admin");
       changecolor("green")
      
   }
   else if (fnum.value ==="mongo" && snum.value === "mongo1"){
    window.open("admin");
       changecolor("green")
    
   }
   else if (fnum.value ==="nosql" && snum.value === "nosql1"){
    window.open("admin");
       changecolor("green")
      
   }
   else if (fnum.value ==="mysql" && snum.value === "mysql1"){
    window.open("admin");
       changecolor("green")
    
   }
   else if (fnum.value ==="java" && snum.value === "javascript"){
    window.open("admin");
       changecolor("green");
    
       
       
   }
   else{
       changecolor("red");
       alert("wrong email or password")
   }
}
function changecolor (){
   for(var i = 0; i< input.length;i++){
       input[i].style.borderColor=color;
   }
} 
