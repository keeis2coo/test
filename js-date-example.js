
					var now = new Date();
					var dayNames = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
					
					var months = new Array("January","February","March","April","May",
							"June","July","August","September","October","November","December");
							
					document.write("Today is " + dayNames[now.getDay()] + ", " + months[now.getMonth()] + ", " + now.getDate() + " " +now.getFullYear() + ".");
