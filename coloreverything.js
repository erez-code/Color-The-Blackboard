$( '.wrap div' ).mousedown( function() {
  var activeColor = $( '#colorindicator' );
  activeColor.css("color", colorSelect.value);
  var $this = $( this );
	var isBlack = $this.css( 'background-color' ) === activeColor.css("color");
	isBlack? $this.removeAttr("style") : $this.css('background-color', colorSelect.value);
} );


var colorSelect;
var defaultColor = "#930024";

$( function() {
	colorSelect = $("#colorSelect")[0];
	colorSelect.value = defaultColor;
	colorSelect.select();
} );

$("#colorSelect").mouseout(function(event) {$("#logo").css("color", colorSelect.value)});

$("#clearcanvas").click(function(event)
  { 
    $(".wrap div").removeAttr("style");
    $(".wrap div").text("");
});

$("#cleartext").click(function(event)
    {$(".wrap div").text("")}
);
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

$("#smileycanvas").click(smileycanvasfunc);
$("#personalisedbutton").click(mySmileycanvasfunc);

function smileycanvasfunc()  { 
    $(".wrap div:odd").css("color", randomColors);
    $(".wrap div:odd").text(":)");
}

function mySmileycanvasfunc()  { 
    $(".wrap div:even").css("color", randomColors);
    $(".wrap div:even").text($("#personalised").val());
}
var mySmiley = $("#personalised").val();

//hover draw testing
//hover draw testing

//check if hover mode is on//
var hoverCheck = !hoverCheck;
hoverCheck = !hoverCheck;

// $('.wrap div').mousedown( function() {
//     $( '.wrap div' ).hover( hoverfunction);
//     hoverCheck = !hoverCheck;
// });

// $(document).mouseup( function() {
//     hoverCheck = !hoverCheck;
// });

$('#hoverdrawing').click( function() {
    $( '.wrap div' ).hover( hoverfunction);
    hoverCheck = !hoverCheck;
});

$("body").keyup(function(e) {
  if (e.keyCode === 27 && hoverCheck) hoverCheck = !hoverCheck;
});

function hoverfunction() {
    var $this = $( this );
    if ( hoverCheck ) $this.css( 'background-color',colorSelect.value);
}
