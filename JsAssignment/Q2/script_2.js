function myfunc()
{
	var v= document.getElementById('w').value;
	var h= document.getElementById('h').value;
	var b= (v)/(h*h);

	document.getElementById('p').innerHTML="BMI :" + b;

	if(b<18)
	{
	document.getElementById('h3').innerHTML="Your Status:" + "Underweight";
	}
	if(b>=18 && b<25)
	{
	document.getElementById('h3').innerHTML="Your Status:" + "Normal";
	}
	if(b>=25 && b<30)
	{
	document.getElementById('h3').innerHTML="Your Status:" + "Overweightweight";
	}
	if(b>30)
	{
	document.getElementById('h3').innerHTML="Your Status:" + "Obese";
	}

}
