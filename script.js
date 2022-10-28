var i = 0;
var txt = 'Contacts is not available for this time.';
var speed = 50;
		
function typeWriter() {
	if (i < txt.length) {
		document.getElementById("atext").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}