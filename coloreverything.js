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

// change logo color - if color selctor changed color
$("#colorSelect").change(function() {$("#logo").css("color", colorSelect.value)});

// add previous color to list - if color selctor changed color
$("#colorSelect").change(BBPrevColorListSet);
$("#resave_button").click(BBPrevColorListSet);

function BBPrevColorListSet() {
  $(".previouscolor:eq("+prev_index+")").css(
    {
    'background-color': colorSelect.value,
    'border': "black solid 2px",
  });
  prev_index++;
  prev_index %= numPrevColorBoxes;
  $(".previouscolor:eq("+prev_index+")").css({
    'border': "white solid 2px",    
    });
}

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

// css random colors functions
$(document).on('click', '#randomcanvas', function(){

    $(".wrap div").css("background-color", CSSrandomColors) 
});

$(document).on('click', '#bluenight', function(){
    $(".wrap div").css("background-color", CSSrandomColorsBlue) 
});

function CSSrandomColors(){
  return randomColors(0xffffff)
}

function CSSrandomColorsBlue(){
  return randomColors(0xff)
}

function randomColors(rand_color_num) {
  return '#'+ Math.round( rand_color_num * Math.random() ).toString(16).padStart(4, '0')
};

$("#smileycanvas").click(CSSSmileyRandomColors);
$("#personalisedbutton").click(CSSTextRandomColors);

function CSSSmileyRandomColors(){
  return randomColorText(":)", "odd")
}

function CSSTextRandomColors(){
  return randomColorText($("#personalised").val(), "even")
}

function randomColorText(text, odd_or_even)  { 
    $(".wrap div:"+odd_or_even+"").css("color", CSSrandomColors);
    $(".wrap div:"+odd_or_even+"").text(text);
}

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
