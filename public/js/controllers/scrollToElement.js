function scrollToElement(elementId) {
    alert("animated scroll to: " + elementId);
    $(window).scrollTo(document.getElementById(elementId),800);
}