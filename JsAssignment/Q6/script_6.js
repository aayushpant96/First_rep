

//will generate random number 0 or 1
var i=1,j=1;

function flip()
{
	my_div = document.getElementById('div');

	h = document.getElementById('num_heads');
	t = document.getElementById('num_tails');

	var img = ['tails.jpg','heads.jpg'];
	var new_1="";
	var ran = Math.floor(Math.random() * 2)

	/*console.log(img[0]);
	console.log(Math.floor(Math.random() * 2));*/

	new_1 = new_1 + "<img src =" + img[ran] + " alt = 'sorry' >";
	my_div.innerHTML = new_1;

	if(ran==0)
	{
		t.innerHTML= i ;
		i++;
	}
	else
	{
		h.innerHTML= j  ;
		j++;
	}
}
//<img src="heads.jpg" alt="penny" /> <br />
//
