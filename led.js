var five = require("johnny-five");
var board = new five.Board({ port: "/dev/cu.usbmodem1421" });

// Create board  
board.on("ready", function() {
	console.log('Succesfull connection');

	// Create a standard `led` component instance
  	var led = new five.Led(13);
  	
	// "blink" the led in 500ms
	// on-off phase periods
  	led.blink(500);
});