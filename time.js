var a = new XMLHttpRequest();
var url = 'http://api.timezonedb.com/v2/get-time-zone?key=ABEJXPCJW3EP&format=json&by=zone&zone=Europe/Tirane';

var time;
var d;
var year, month, day, dayweek, hour, min, sec;
var m = ['január', 'ferbuár', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];
var dw = ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'];

var z;
var zone = {
  'UTC+0:00': 'Antarctica/Troll',
  'UTC+1:00': 'Europe/Tirane',
  'UTC+2:00': 'Europe/Mariehamn'
}

function check(n) {
	if (n<10) {
		n = "0" + n;
	}
	return n;
}

window.setInterval(go, 1000);

function go() {
	a.open('GET', url);
	a.onload = function() {
		time = JSON.parse(a.responseText);
		d = new Date(time.formatted);
		
		year = d.getFullYear();
		month = m[d.getMonth()];
		day = check(d.getDate()); //
    dayweek = dw[d.getDay()];
		hour = check(d.getHours());
		min = check(d.getMinutes());
		sec = check(d.getSeconds());
		
		document.querySelector('.clock').innerHTML = hour + ":" + min + ":" + sec;
		document.querySelector('.date').innerHTML = year + ". " + month + " " + day + ". " + dayweek;
    
    z = document.querySelector('.zones').value;
    url = 'http://api.timezonedb.com/v2/get-time-zone?key=ABEJXPCJW3EP&format=json&by=zone&zone=' + zone[z];
	};
	a.send();
}