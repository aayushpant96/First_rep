
var par = document.getElementsByClassName('par');


function small()
{

	var style = window.getComputedStyle(par[0], null).getPropertyValue('font-size');
	var fontSize = parseInt(style);
	var small = fontSize - 2 ;
	par[0].style.fontSize= small + "px" ;
	par[1].style.fontSize= small + "px" ; 
}


function big()
{
	style = window.getComputedStyle(par[0], null).getPropertyValue('font-size');
	var fontSize = parseInt(style);
	var big = fontSize + 2;
	par[0].style.fontSize= big + "px" ;
	par[1].style.fontSize= big + "px" ;
}


//(par[0].innerHTML);