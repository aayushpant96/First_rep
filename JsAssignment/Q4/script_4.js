function convert()
{

var txt = document.getElementById('inp').value;	

var s = document.getElementById('s');
var s1 = document.getElementById('s1');

var div = document.getElementById('d');
var ss =  s.selectedIndex;
var ss1 = s1.selectedIndex;

//alert(ss); //kg -> 0 ,lb ->1
//alert(ss1); //lb -> 0 ,kg ->1
//if()


//var v = "<div>Hello</div>"
if(ss==0 && ss1==0 )
{


	div.innerHTML = txt * 2.20;
	return;
}

if(ss==1 &&  ss1==1)
{
	div.innerHTML = txt * 0.45;
	return;	
}

else
{
	div.innerHTML = txt;
}
}