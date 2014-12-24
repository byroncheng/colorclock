//DOM Ready =======================
$(document).ready(function(){

	setInterval(function(){
		var date = new Date();

		var hours = pad(date.getHours());
		var minutes = pad(date.getMinutes());
		var seconds = pad(date.getSeconds());
		var millisecond = date.getMilliseconds();

		$('#time').html(hours+' : '+minutes+' : '+seconds);

		var light = Math.round(100-hours*100/24)+'%';
		var hue = Math.round(minutes*360/60);
		var sat = Math.round(seconds*100/60)+'%';

		document.body.style.backgroundColor=('hsl('+hue+','+sat+','+light+')');

		var rVal = Math.round(hours*255/60);
		var gVal = Math.round(minutes*255/60);
		var bVal = Math.round(seconds*255/60+millisecond*5/1000);

		//document.body.style.backgroundColor=('rgb('+rVal+','+gVal+','+bVal+')');

		//$('#debug').append(hours+':'+minutes+':'+seconds);
		//$('#debug').append('hue='+hue+' sat='+sat+' lum='+lum+'<br>');
		//$('#debug').append('rVal='+rVal+' gVal='+gVal+' bVal='+bVal+'<br>');
	},1000);
	
});

var pad = function (value) {
    return (value < 10 ? '0' : '') + value;
};

