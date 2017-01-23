function calculate()
{
	var num=document.getElementById('amount').value;

	//alert(num);
	
	var af = num.toString().split(".")[1];
	var bf = Math.floor(num);
	var qr,qrf,dm,dmf,nk,nkf;
	//alert(bf);
	
	if(af==0)
	{
		//alert("hello");
		document.getElementById('change').innerHTML = num + "$";
		return;
	} 
	
	else
	{

	qr = af/25;
	qrf= Math.floor(qr);

	af=af-(qrf*25);

	dm = af / 10;
	dmf = Math.floor(dm);

	af = af - (dmf * 10);

	nk = af / 5;
	nkf = Math.floor(nk);

	af = af - (nkf * 5);

	document.getElementById('change').innerHTML = bf + "$ " + qrf + " quarter " + dmf + " dime " + nkf + " nickel " + af + " penny ";
	}
}