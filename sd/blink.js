//Standar fimata plus
var five = require("johnny-five");
var board = new five.Board({port: "COM14"});

board.on("ready", function() {
    var led = new five.Led(13);
    led.blink(500);
});