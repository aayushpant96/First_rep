function explode()
{
	var div = document.getElementById('div');
	var nor = document.getElementById('number').value;

	//alert(nor);
	var blank = "";

	//div.style.display = "block";

	for(i=1;i<=nor;i++)
	{
		
		blank = blank + "<div class = 'abc'></div>";
	}

	var time = document.getElementsByClassName('abc');
	//alert(blank);
	
	div.innerHTML = div.innerHTML + blank;

	
	//time.style.display = "inline-block";
	//div.style.display = "inline-block";
}