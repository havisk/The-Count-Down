window.setInterval(function() {
	// Create a newDate() object and extract the seconds of the current time on the visitor's
	var seconds = new Date().getSeconds();
	// Add a leading zero to seconds value
	$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);
	



// window.setInterval(function() {
// 	// Create a newDate() object and extract the seconds of the current time on the visitor's
// 	var seconds = new Date().getSeconds();
// 	// Add a leading zero to seconds value
// 	$("#").html(( seconds < 10 ? "0" : "" ) + seconds);
// 	},1000);


//show time
var s, color;

function showTime(){
	d = newDate(); //new object
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();

	//add 0 to single digits
	if(h <= 9) h = '0' +h;
	if(m <= 9) m = '0' +m;
	if(s <= 9) s = '0' +s;


color = '#'+'8'+'45'+s;

//background color
document.querySelector(".box") = color

//set time
document.getElementById('hex').innerHTML = color

//function timeout
window.setTimout(showTime, 2000);

}

//call function
showTime();
