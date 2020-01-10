$(document).ready(function(){
	
	$("#knappTest").on('click', function(){	
		getForecast();
	})
	
	function getForecast(){
		$.ajax({
			url: "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18/lat/59/data.json",
			success: function(result){
				console.log(result);
				callback(result);
			}
		});
	}
	function callback(data){
		var temp = data.timeSeries[1].parameters[11].values[0];
		var humid = data.timeSeries[1].parameters[15].values[0]; //relative humidity
		var rainMin = data.timeSeries[1].parameters[2].values[0];
		var rainMax = data.timeSeries[1].parameters[4].values[0];
		$('#showTemp').empty();
		$('#showTemp').append("<p>" + "the temp is:" + "</p>");
		$('#showTemp').append("<p>" + temp + " c</p>");
		$('#showTemp').append("<p>" + "the humidity (in percent) is:" + "</p>");
		$('#showTemp').append("<p>" + humid + "</p>");		
		$('#showTemp').append("<p>" + "the minimum rain (in mm) is:" + "</p>");
		$('#showTemp').append("<p>" + rainMin + "</p>");
		$('#showTemp').append("<p>" + "the maximum rain (in mm) is:" + "</p>");
		$('#showTemp').append("<p>" + rainMax + "</p>");
	}
});