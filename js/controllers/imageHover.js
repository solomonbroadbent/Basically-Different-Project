function changeOverlayStatus(overlayImageId){
    $("#" + overlayImageId + "").toggle();
}
//refactoring TODO:
/*  1: select all bd_upper
    2: insert a span above which:
    	a: contains the image tag from the bd_upper span
    	b: has the same heirachy in the DOM as bd_upper
    	c: has class bd_imageSpan and bd_invisible
    3: add event listeners to each span which changeOverlayStatus() on the id of
		the bd_upper span
*/
$(document).ready(function(){
  	$(".bd_upper").each(function(){
		var idUpper = $(this).attr('id');
		var containedImage = $(this).html();
		var idInvisible = idUpper + "_addedInvisibleLayer";
		var invisibleLayer = `<span id='` + idInvisible + `'
			onmouseenter='changeOverlayStatus(` + idUpper + `)'
			onmouseleave='changeOverlayStatus(` + idUpper + `)'>`
			+ containedImage + `</span>`;
		$(this).before(invisibleLayer);
		$("#" + idInvisible).addClass("bd_imageSpan bd_invisible");
	})
});
