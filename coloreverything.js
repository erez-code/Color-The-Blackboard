$( '.wrap div' ).mousedown( function() {
	var $this = $( this );
	var isBlack = $this.css( 'background-color' ) === 'rgb(0, 0, 0)';
	$this.css( 'background-color', isBlack? colorSelect.value: 'black' );
} );

var colorSelect;
var defaultColor = "#2098df";

$( function() {
	colorSelect = $("#colorSelect")[0];
	colorSelect.value = defaultColor;
	colorSelect.select();
} );

$("#clearcanvas").click(function(event)
  { 
    $(".wrap div").css("background-color", "black")
  })

$("#randomcanvas").click(function(event)
  { 
    for (var i=0; i<4000; i++) {
	$(".wrap div").eq(i).css("background-color", '#'+ Math.round(0xffffff * Math.random()).toString(16))}
  })