function grow()
{
	var x = document.getElementById('rows').value;
	var y = document.getElementById('columns').value;
	var g = document.getElementById('garden');
	var i;
	//alert(x);
	/*g.style.width=x+"px";
	g.style.height=y+"px";*/

	var tbl = document.getElementById('tbl');
	var new_1 = '';
	var img = ['rose.jpg','daffodil.jpg']
	
	
	for(i=0;i<x;i++)
	
	{
		new_1 = new_1 + "<tr>";

		for(j=0;j<y;j++)
		
		{
			//var mat = Math.random();
			//alert(mat);
			new_1 = new_1 + "<td><img src =" + img[Math.floor(Math.random() * 2)] + " alt= 'sorry' height='50px' width = '50px'> </td>";
		}

		new_1 = new_1 + "</tr>";

		
	}

tbl.innerHTML = tbl.innerHTML + new_1;

}