var rev = document.getElementById('names');

function myfunc()
{
var i = rev.childNodes.length;

while (i--)
  
  {

  	rev.appendChild(rev.childNodes[i]);
//alert(arr);
  }
}