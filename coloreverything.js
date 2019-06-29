var defaultColor = "#930024";
var colorSelect;
var prev_index = 0;

$( '.wrap div' ).mousedown(  function(){
  var activeColor = $( '#colorindicator' );
  activeColor.css("color", colorSelect.value);
  var $this = $( this );
  var isBlack = $this.css( 'background-color' ) === activeColor.css("color");
  isBlack? $this.removeAttr("style") : $this.css('background-color', colorSelect.value);
});

$( function() {
	colorSelect = $("#colorSelect")[0];
	colorSelect.value = defaultColor;
	colorSelect.select();
} );

var numPrevColorBoxes = $(".previouscolor").length;

// change logo - if color selctor changes
$("#colorSelect").change(function(event) {$("#logo").css("color", colorSelect.value)});

// add previous color to list - if color selctor changes
$("#colorSelect").change(function(event) {
  $(".previouscolor:eq("+prev_index+")").css('background-color', colorSelect.value);
  prev_index++;
  prev_index %= numPrevColorBoxes;
});

$("#resave_button").click(function(event) {
  $(".previouscolor:eq("+prev_index+")").css('background-color', colorSelect.value);
  prev_index++;
  prev_index %= numPrevColorBoxes;
});

// pick a color from the previous colors list
$(".previouscolor").click(function(event) {
  var $this = $( this );
  colorSelect.value = rgb2hex($this.css('background-color'));
}
);

$("#clearcanvas").click(function(event)
  { 
    $(".wrap div").removeAttr("style");
    $(".wrap div").text("");
});

$("#cleartext").click(function(event)
    {$(".wrap div").text("")}
);

function randomColors() { return '#'+ Math.round( 0xffffff * Math.random() ).toString(16).padStart(6, '0') };
function randomColorsBlue() { return '#'+ Math.round( 0xff * Math.random() ).toString(16).padStart(4, '0') };

$("#randomcanvas").click(function(event)
  { 
    $(".wrap div").css("background-color", randomColors)
});

$("#bluenight").click(function(event)
  { 
    $(".wrap div").css("background-color", randomColorsBlue)
});

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

//check if hover mode is on//
var hoverCheck = !hoverCheck;
hoverCheck = !hoverCheck;

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

// helper funcs

var hexDigits =["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]; 
var hex= function(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
