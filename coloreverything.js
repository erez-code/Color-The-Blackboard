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
