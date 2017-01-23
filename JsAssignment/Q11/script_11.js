function add()
{
	var eb =  document.getElementById('essay_body');
	var scr = document.getElementById("paragraph").value;
	//alert(typeof scr);
	
	eb.innerHTML = eb.innerHTML + scr;

	document.getElementById("paragraph").value="";
	
	
}