
window.onload = function(e) {
var row =  document.getElementsByClassName('row');
for(i=0;i<row.length;i++)
{
	for(j=0;j<10;j++)
	{
		row[i].innerHTML += "<div class='col' onmouseenter='load(this)'></div>";
	}
}



};

function load(ele)

{

	ele.style.visibility = "hidden";

}

/*
document.getElementsByClassName('col').addEventListener("onmousein", function(this){
	this.style.visibility = "hidden";
*/
/*},false);*/

