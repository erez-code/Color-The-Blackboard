var defaultColor = "#4298f5";
var colorSelect;
var saved_colors_index = 0;
var selected_wrap_div = $(".wrap div");

selected_wrap_div.mousedown(  function(){
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

var numSavedColors = $(".saved_colors").length;

// change logo color - if color selctor changed color
$("#colorSelect").change(function() {$("#logo").css("color", colorSelect.value)});

// add previous color to list - if color selctor changed color
$("#colorSelect").change(BBPrevColorListSet);
$("#resave_button").click(BBPrevColorListSet);

function BBPrevColorListSet() {
  $(".saved_colors:eq("+saved_colors_index+")").css(
    {
    'background-color': colorSelect.value, 
    'box-shadow': "0 0 3px black",
  	});
  
  saved_colors_index++;
  saved_colors_index %= numSavedColors;
  
  $(".saved_colors:eq("+saved_colors_index+")").css({
    'box-shadow': "0 0 10px black",
    });
}

//old feature: randomize saved colors
//$(".saved_colors").css("background-color", CSSrandomColors);

// pick a color from the previous colors list
$(".saved_colors").click(function() {
  var $this = $( this );
  colorSelect.value = rgb2hex($this.css('background-color'));
}
);

$("#clearcanvas").click(function()
  { 
    selected_wrap_div
    .removeAttr("style")
    .text("");
});

$("#cleartext").click(function()
    {
    selected_wrap_div.text("")}
);

// css random colors functions
$(document).on('click', '#randomcanvas', function(){
    selected_wrap_div.css("background-color", CSSrandomColors) 
});

$(document).on('click', '#bluenight', function(){
    selected_wrap_div.css("background-color", function (){
  	return randomColors(0xff)}) 
});

function CSSrandomColors(){
  return randomColors()
}

function randomColors(rand_color_num = 0xffffff) {
  return '#'+ Math.round( rand_color_num * Math.random() ).toString(16).padStart(4, '0')
};

// more css random colors functions
$("#smileycanvas").click(function (){
  return randomColorText()
});

$("#personalisedbutton").click(function (){
  return randomColorText($("#personalised").val(), "even")
});

function randomColorText(text = ":)", odd_or_even = "odd")  { 
    $(".wrap div:"+odd_or_even+"")
    .css("color", CSSrandomColors)
    .text(text)
}

//hover draw 
//check if hover mode is on//
var hoverCheck = !hoverCheck;
hoverCheck = !hoverCheck;

$('#hoverdrawing').click( function() {
    selected_wrap_div.hover(hoverfunction);
    hoverCheck = !hoverCheck;
});

$("body").keyup(function(e) {
  if (e.keyCode === 27 && hoverCheck) hoverCheck = !hoverCheck;
});

function hoverfunction() {
    var $this = $( this );
    if ( hoverCheck ) $this.css('background-color',colorSelect.value);
}

// helper funcs
var hexDigits ="0123456789ABCDEF"; 
var hex= function(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
