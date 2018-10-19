$(".wrap div").mousedown(function() {
	if ($(this).css("background-color") == "rgb(0, 0, 0)") {
		$(this).css("background-color", colorWell.value)} else {
  	$(this).css("background-color", "black")}})

var colorWell;
var defaultColor = "#2098df";

window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#colorWell");
  colorWell.value = defaultColor;
  colorWell.select();
}
