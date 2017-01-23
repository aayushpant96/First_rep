function mirror()
{
	var h1 = document.getElementById('h1').innerHTML;
	var h2 = document.getElementById('h2').innerHTML;
	var h3 = document.getElementById('h3').innerHTML;
	var h4 = document.getElementById('h4').innerHTML;
	var h5 = document.getElementById('h5').innerHTML;
	var h6 = document.getElementById('h6').innerHTML;

	//alert(typeof h1);
	var rev1 = h1.split("").reverse().join("").split(" ").reverse().join(" ");

	console.log(rev1);

	h1.innerHTML="hello";

	document.body.innerHTML = document.body.innerHTML.replace(h1, rev1);
	document.body.innerHTML = document.body.innerHTML.replace(h2, rev1);
	document.body.innerHTML = document.body.innerHTML.replace(h3, rev1);
	document.body.innerHTML = document.body.innerHTML.replace(h4, rev1);
	document.body.innerHTML = document.body.innerHTML.replace(h5, rev1);
	document.body.innerHTML = document.body.innerHTML.replace(h6, rev1);
	

	}