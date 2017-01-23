function myfunc()
{
	var v= document.getElementById('w').value;
	var h= document.getElementById('h').value;
	var b= (703 * v)/(h*h);
	document.getElementById('p').innerHTML="BMI :" + b;
}
