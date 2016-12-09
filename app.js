//provision the gpio pins 22 for the led output and 17 for the button input
var led = require("pi-pins").connect(22);
var Promise = require('promise');

//set the pin mode,  setting pin 22 as an output and 17 as an input
led.mode('out');

//set the initial value of the LED to be off.
led.value(true);


function sleeplight(ms) {
   led.value(false);

}

function main(led) {
  console.log('Taking a break...');
  led.value(false);

  setTimeout(sleeplight, 3000);

  led.value(true);

  console.log('Two second later');
}
while (true) {
main(led);
}