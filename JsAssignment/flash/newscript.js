function play()
{

	//console.log('hello Everyone');
	var div = document.getElementById("div");

	div.innerHTML = div.innerHTML + "<embed src='flash.mp3' id = 'music' autostart='true' loop='true' hidden='true'>";

	document.getElementById("div1").innerHTML = "<h3 align = 'center' color = 'red'> My name is Barry Allen and I am the fastest person alive</h3>";
}


 function toggleSound() 
 {
  var audioElem = document.getElementById('music');
  if (audioElem.paused)
    audioElem.play();
  else
    audioElem.pause();
}