$( '.wrap div' ).mousedown( function() {
  var activeColor = $( '#colorindicator' );
  activeColor.css("color", colorSelect.value);
  var $this = $( this );
	var isBlack = $this.css( 'background-color' ) === activeColor.css("color");
	isBlack? $this.removeAttr("style") : $this.css('background-color', colorSelect.value);
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
function randomColorsBlue() { return '#'+ Math.round( 0xff * Math.random() ).toString(16).padStart(4, '0') };

$("#randomcanvas").click(function(event)
  { 
    $(".wrap div").css("background-color", randomColors)
});

$("#bluenight").click(function(event)
  { 
    $(".wrap div").css("background-color", randomColorsBlue)
});

$( ".wrap div:odd" ).css("color", randomColors)

$("#smileycanvas").click(function(event)
  { 
    $(".wrap div:odd").css("color", randomColors);
    $(".wrap div:odd").text(":)");
});


//hover draw testing
//hover draw testing


// $('#hoverdrawing')[0].onclick = function() {$( '.hoverwrap .wrap div' ).hover( hoverfunction)};
$('#hoverdrawing').click( function() {
    $( '#hoverwrap' ).toggleClass( 'active' );
    $( '.active .wrap div' ).hover( hoverfunction);
});


// function hoverfunction() {
//     var $this = $( this );
//   $this.css( 'background-color',colorSelect.value);
// }
function hoverfunction() {
    var $this = $( this );
    if ( $( '#hoverwrap' ).is( '.active' ) ) $this.css( 'background-color',colorSelect.value);
}

// $('#stophoverdrawing')[0].onclick = function() {$( '.hoverwrap' ).attr("class","not")}
