//DOM Ready =======================
$(document).ready(function(){

	setInterval(function(){
		var date = new Date();

		var hours = pad(date.getHours());
		var minutes = pad(date.getMinutes());
		var seconds = pad(date.getSeconds());
		var millisecond = date.getMilliseconds();

		$('#time').html(hours+' : '+minutes+' : '+seconds);

		var lum = Math.round(hours*100/24)+'%';
		var sat = Math.round(minutes*100/60)+'%';
		var hue = Math.round(seconds*360/60+millisecond*5/1000);

		//document.body.style.backgroundColor=('hsl('+hue+','+sat+','+lum+')');

		var rVal = Math.round(hours*255/60);
		var gVal = Math.round(minutes*255/60);
		var bVal = Math.round(seconds*255/60+millisecond*5/1000);

		document.body.style.backgroundColor=('rgb('+rVal+','+gVal+','+bVal+')');

		//$('#debug').append(hours+':'+minutes+':'+seconds);
		//$('#debug').append('hue='+hue+' sat='+sat+' lum='+lum+'<br>');
		//$('#debug').append('rVal='+rVal+' gVal='+gVal+' bVal='+bVal+'<br>');
	},1000);
	
});

var pad = function (value) {
    return (value < 10 ? '0' : '') + value;
};

