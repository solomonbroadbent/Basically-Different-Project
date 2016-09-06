function showImageOverlay(imageToShowOverTopPath, imageToBeDrawnOverReference){
    var imageToOverlay = new Image();
    var divToDrawnOver = document.getElementById(imageToBeDrawnOverReference);
    imageToOverlay.src = imageToShowOverTopPath;

    imageToOverlay.onload = function(){
        divToDrawnOver.appendChild(imageToOverlay);
    }
}