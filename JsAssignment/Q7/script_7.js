
function cal()
{
var small_p = document.getElementById("small").value;
var med_p = document.getElementById("medium").value;
var large_p = document.getElementById("large").value;
var par = document.getElementById("par");
var rb = document.getElementsByClassName('ab');
var tot_p1,tot_p2;
var c_nmbr;
//console.log(rb.length);
small_p = small_p * 8.99;
med_p = med_p * 10.99;
large_p = large_p * 12.99;

var tot_p= small_p + med_p + large_p ;

var temp = tot_p ;

tot_p = tot_p + (temp*9/100);

temp = tot_p;

console.log(small_p);
console.log(med_p);
console.log(large_p);


//alert(spp);
//alert(typeof spp);

for(i=0;i<rb.length;i++)
{
	if(rb[i].checked)
	{
		
		c_nmbr = Number(rb[i].value);
		
		
		tot_p = tot_p +  (temp*c_nmbr/100);

	}
}

par.innerHTML = par.innerHTML + tot_p;

}