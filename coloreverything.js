$( '.wrap div' ).mousedown( function() {
	var $this = $( this );
	var isBlack = $this.css( 'background-color' ) === 'rgb(0, 0, 0)';
	isBlack? $this.css('background-color', colorSelect.value) : $this.removeAttr("style");
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
    $(".wrap div").removeAttr("style");
    $(".wrap div").text("")
});

function randomColors() { return '#'+ Math.round( 0xffffff * Math.random() ).toString( 16 ).padStart(6, '0') };


$("#randomcanvas").click(function(event)
  { 
    $(".wrap div").css("background-color", randomColors)
});


$( ".wrap div:odd" ).css("color", randomColors)

$("#smileycanvas").click(function(event)
  { 
    $(".wrap div:odd").css("color", randomColors);
    $(".wrap div:odd").text(":)");
});
