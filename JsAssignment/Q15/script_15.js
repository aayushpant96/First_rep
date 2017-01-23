

var fact = document.getElementById("div");
var fact1 = document.getElementById("div1");
var fact2 = document.getElementById("div2");
var fact3 = document.getElementById("div3");
var fld = document.getElementById('fld');

function mouseover()
{
	
	var a = Math.floor(Math.random()*4);
	console.log(a);
	fld.style.display = "block";
		
	switch(a)
	{
		case 0: fact.style.display = "block";
			break;

		case 1: fact1.style.display = "block";
			break;

		case 2: fact2.style.display = "block";
			break;

		case 3: fact3.style.display = "block";
			break;

		default: return;
	}
}

function mouseout()
{
	fact.style.display = "none";
	fact1.style.display = "none";
	fact2.style.display = "none";
	fact3.style.display = "none";
	fld.style.display = "none";

}