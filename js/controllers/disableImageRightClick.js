alert('ladsfasdfasdf');
$(document).ready(function(){
   $("img").bind("context-menu", function(e){
       alert("launched");
       return false;
   }) 
});