function inc()
{

var rec = document.getElementById("rectangle");
var width = rec.clientWidth;
var height = rec.clientHeight;

/*rec.style.width = "125px";
rec.style.height = "125px";*/
//rec.style.height = 125px;
width = width + (width/4);
height= height + (height/4);

rec.style.width = width + "px" ;
rec.style.height = height + "px" ;

}