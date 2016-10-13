$(document).ready(function(){
   $("") 
});

function changeOverlayStatus(imageWhichOverlays, shouldOverlay){
    if(shouldOverlay == true){
        document.getElementById(imageWhichOverlays).style.visibility = 'visible';
    }
    else{
        document.getElementById(imageWhichOverlays).style.visibility = 'hidden';
    }
}