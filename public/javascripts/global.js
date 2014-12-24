//DOM Ready =======================
$(document).ready(function(){

	setInterval(function(){
		var date = new Date();

		var hours = pad(date.getHours());
		var minutes = pad(date.getMinutes());
		var seconds = pad(date.getSeconds());
		var millisecond = date.getMilliseconds();

		$('#time').html(hours+':'+minutes+':'+seconds);

		var lum = Math.round(hours*100/24)+'%';
		var sat = Math.round(minutes*100/60)+'%';
		var hue = Math.round(seconds*360/60+millisecond*5/1000);

		//$('#debug').append(hours+':'+minutes+':'+seconds);
		//$('#debug').append('hue='+hue+' sat='+sat+' lum='+lum+'<br>');

		document.body.style.backgroundColor=('hsl('+hue+','+sat+','+lum+')');
	},200);
	
});

var pad = function (value) {
    return (value < 10 ? '0' : '') + value;
};

