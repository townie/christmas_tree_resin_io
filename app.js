//provision the gpio pins 22 for the led output and 17 for the button input
var  ledToggle, pressCount;

//set the pin mode,  setting pin 22 as an output and 17 as an input
var led = require("pi-pins").connect(22);
led.mode('out');

//set the initial value of the LED to be off.
led.value(false);



'use strict';

const express = require('express');

// Constants
const PORT = 80;

// App
const app = express();
app.get('/on', function (req, res) {
	var led = require("pi-pins").connect(22);
	led.mode('out');
  	led.value(true);
  	res.send('on\n');
});

app.get('/off', function (req, res) {
	var led = require("pi-pins").connect(22);
	led.mode('out');
  	led.value(false);
  	res.send('off\n');
});


app.listen(PORT);
console.log('Running on http://localhost:' + PORT);